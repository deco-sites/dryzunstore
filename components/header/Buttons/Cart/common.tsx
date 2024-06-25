import { AnalyticsItem } from "apps/commerce/types.ts";
import Button from "../../../../components/ui/Button.tsx";
import Icon from "../../../../components/ui/Icon.tsx";
import { sendEvent } from "../../../../sdk/analytics.tsx";
import { useUI } from "../../../../sdk/useUI.ts";

interface Props {
  loading: boolean;
  currency: string;
  total: number;
  items: AnalyticsItem[];
}

function CartButton({ loading, currency, total, items }: Props) {
  const { displayCart } = useUI();
  const totalItems = items.length;

  const onClick = () => {
    sendEvent({
      name: "view_cart",
      params: { currency, value: total, items },
    });
    displayCart.value = true;
  };

  return (
    <div class="indicator">
      <span
        class={`indicator-item badge badge-secondary badge-sm ${totalItems === 0 ? "hidden" : ""
          }`}
      >
        {totalItems > 9 ? "9+" : totalItems}
      </span>

      <Button
        class="bg-transparent hover:bg-transparent btn-sm pr-0 border-0 shadow-none text-[#1A1A1A]"
        aria-label="open cart"
        data-deco={displayCart.value && "open-cart"}
        loading={loading}
        onClick={onClick}
      >
        <Icon id="Cart" size={24} strokeWidth={2} />
      </Button>
    </div>
  );
}

export default CartButton;
