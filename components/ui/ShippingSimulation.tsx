import { Signal, useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import Button from "../../components/ui/Button.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useCart } from "apps/vtex/hooks/useCart.ts";
import type { SimulationOrderForm, SKU, Sla } from "apps/vtex/utils/types.ts";

export interface Props {
  items: Array<SKU>;
}

const formatShippingEstimate = (estimate: string) => {
  const [, time, type] = estimate.split(/(\d+)/);

  if (type === "bd") return `${time} dias úteis`;
  if (type === "d") return `${time} dias`;
  if (type === "h") return `${time} horas`;
};

const changeStore = (store: string) => {
  if (store == 'Retira em Loja (1)') {
    return 'Dryzun - Shopping Pátio Higienópolis';
  }
  else if (store == 'Retira em Loja (2)') {
    return 'Dryzun - Shopping Ibirapuera';
  }
  else if (store == 'Retira em Loja (3)') {
    return 'Dryzun - Shopping Iguatemi';
  }
  else if (store == 'Retira em Loja (4)') {
    return 'Dryzun - Morumbi Shopping';
  }
  else {
    return `Entrega ${store}`;
  }
}

function ShippingContent({ simulation }: {
  simulation: Signal<SimulationOrderForm | null>;
}) {
  const { cart } = useCart();

  const methods = simulation.value?.logisticsInfo?.reduce(
    (initial, { slas }) => [...initial, ...slas],
    [] as Sla[],
  ) ?? [];

  const locale = cart.value?.clientPreferencesData.locale || "pt-BR";
  const currencyCode = cart.value?.storePreferencesData.currencyCode || "BRL";

  if (simulation.value == null) {
    return null;
  }

  if (methods.length === 0) {
    return (
      <div class="p-2">
        <span>CEP inválido</span>
      </div>
    );
  }

  return (
    <ul class="flex flex-col gap-4 p-4 bg-white rounded-[4px] border p-2.5 border-solid border-[#E0DEDA]">
      {methods.map((method, index) => (
        <li class="flex justify-between items-center border-base-200 not-first-child:border-t">
          <span class="w-full md:w-[50%] text-left text-[13px] text-button">
            {changeStore(method.name)}
          </span>
          <span class="w-full md:w-[25%] text-left text-[13px] text-button">
            até {formatShippingEstimate(method.shippingEstimate)}
          </span>
          <span class="w-full md:w-[25%] text-left text-[13px] font-semibold">
            {method.price === 0 ? "Grátis" : (
              formatPrice(method.price / 100, currencyCode, locale)
            )}
          </span>
        </li>
      ))}
      <span class="text-[13px]">
        Os prazos de entrega começam a contar a partir da confirmação do
        pagamento e podem variar de acordo com a quantidade de produtos na
        sacola.
      </span>
    </ul>
  );
}

function ShippingSimulation({ items }: Props) {
  const postalCode = useSignal("");
  const loading = useSignal(false);
  const simulateResult = useSignal<SimulationOrderForm | null>(null);
  const { simulate, cart } = useCart();

  const handleSimulation = useCallback(async () => {
    if (postalCode.value.length !== 8) {
      return;
    }

    try {
      loading.value = true;
      simulateResult.value = await simulate({
        items: items,
        postalCode: postalCode.value,
        country: cart.value?.storePreferencesData.countryCode || "BRA",
      });
    } finally {
      loading.value = false;
    }
  }, [items, postalCode.value]);

  return (
    <div class="w-full flex flex-col gap-2 mt-4 pt-4 border-t-[#E0DEDA] border-t border-solid">
      <div class="flex flex-col">
        <span class="text-[13px] not-italic font-bold leading-[normal] mb-2">
          Calcular o Frete
        </span>
        <span class="text-[13px] not-italic font-normal leading-[normal]">
          Informe seu CEP para consultar os prazos de entrega
        </span>
      </div>

      <form
        class="flex gap-3 mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSimulation();
        }}
      >
        <input
          as="input"
          type="text"
          class="rounded-none w-[171px] h-10 border p-2.5 border-solid border-[#E0DEDA] text-[16px] not-italic font-normal leading-[normal] text-[#666461]"
          placeholder="Seu cep aqui"
          value={postalCode.value}
          maxLength={8}
          size={8}
          onChange={(e: { currentTarget: { value: string } }) => {
            postalCode.value = e.currentTarget.value;
          }}
        />
        <Button
          type="submit"
          loading={loading.value}
          class="rounded-none flex min-h-10 max-h-10 justify-center items-center border text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase text-[#243959] bg-white border-solid border-[#243959] hover:bg-[#B4CBF0] transition-[.3s]"
        >
          Calcular
        </Button>
      </form>

      <div>
        <div>
          <ShippingContent simulation={simulateResult} />
        </div>
      </div>
    </div>
  );
}

export default ShippingSimulation;
