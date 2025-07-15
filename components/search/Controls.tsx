import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Filters from "../../components/search/Filters.tsx";
import Sort from "../../components/search/Sort.tsx";
import Drawer from "../../components/ui/Drawer.tsx";
import Breadcrumb from "../../components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "apps/commerce/types.ts";
import FiltersPrice from "./FiltersPrice.tsx";
import { parseRange } from "apps/commerce/utils/filters.ts";



export type Props =
  & Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">
  & {
    displayFilter?: boolean;
  };

function SearchControls(
  { filters, breadcrumb, displayFilter, sortOptions }: Props,
) {
  const open = useSignal(false);

  const FILTERS_PRICES:any = filters?.find((item) => {
    return item.key === "price";
  })

  const FILTERS_DEFAULT_VALUE = [
    {
      key: "price",
      values: [
        {
          value: "30000:1000000",
        },
      ],
    },
  ]

  const priceValue = FILTERS_PRICES?.values?.[0]?.value || FILTERS_DEFAULT_VALUE[0]?.values?.[0]?.value || "0:1000000";
  
  const PRICE_RANGE = parseRange(priceValue);
  const FILTER_PRICE_TO = PRICE_RANGE?.to
  const FILTER_PRICE_FROM = PRICE_RANGE?.from

  return (
    <Drawer
      loading="lazy"
      open={open.value}
      onClose={() => open.value = false}
      aside={
        <>
          <div class="w-[80%] bg-base-100 flex flex-col h-full divide-y overflow-y-hidden">
            <div class="flex justify-between items-center">
              <div class="px-4 py-3">
                <span class="font-medium text-2xl">Filtrar</span>
              </div>
              <Button class="btn btn-ghost" onClick={() => open.value = false}>
                <Icon id="XMark" size={24} strokeWidth={2} />
              </Button>
            </div>

            <div class="flex-grow overflow-auto">
              <Filters filters={filters} />

              <FiltersPrice
                min={FILTER_PRICE_FROM ?? 0}
                max={FILTER_PRICE_TO ?? 0}
                currentUrlFilterPrice={globalThis.location.search}
                currentMinFacet={FILTER_PRICE_FROM ?? 0}
                currentMaxFacet={FILTER_PRICE_TO ?? 0}
                isMobile={true}
              />
            </div>
          </div>
        </>
      }
    >
      <div class="flex flex-col justify-between mb-4 p-4 sm:mb-0 sm:p-0 sm:gap-4 sm:flex-row sm:h-[53px] sm:border-b sm:border-base-200">
        <div class="flex flex-row items-center sm:p-0 mb-2">
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
        </div>

        <div class="flex flex-row items-center justify-between border-b border-base-200 sm:gap-4 sm:border-none">
          <Button
            class={displayFilter ? "btn-ghost" : "btn-ghost sm:hidden"}
            onClick={() => {
              open.value = true;
            }}
          >
            Filtrar
            <Icon id="FilterList" width={16} height={16} />
          </Button>
          {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
        </div>
      </div>
    </Drawer>
  );
}

export default SearchControls;
