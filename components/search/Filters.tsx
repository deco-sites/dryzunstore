import { itemToAnalyticsItem } from "apps/wake/hooks/useCart.ts";
import Avatar from "../../components/ui/Avatar.tsx";
import { formatPrice } from "../../sdk/format.ts";
import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";
import { parseRange } from "apps/commerce/utils/filters.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem(
  { url, selected, label, quantity }: FilterToggleValue,
) {
  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div
        aria-checked={selected}
        class={`${selected ? "before:content-['✔'] before:text-white" : ""
          } flex items-center justify-center w-5 h-5 border border-solid border-[#E0DEDA] aria-checked:border-[#B4CBF0] aria-checked:bg-[#B4CBF0]`}
      />
      <span class="text-sm">{label}</span>
      {quantity > 0 && <span class="text-sm">({quantity})</span>}
    </a>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  const flexDirection = key === "tamanho" || key === "cor"
    ? "flex-row"
    : "flex-col";

  return (
    <ul class={`collapse-content flex flex-wrap gap-2 ${flexDirection}`}>
      {values.map((item) => {
        const { url, selected, value, quantity } = item;

        if (key === "cor" || key === "tamanho") {
          return (
            <a href={url} rel="nofollow">
              <Avatar
                content={value}
                variant={selected ? "active" : "default"}
              />
            </a>
          );
        }

        if (key === "price") {
          const range = parseRange(item.value);

          return range && (
            <ValueItem
              {...item}
              label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
            />
          );
        }

        return <ValueItem {...item} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul className="flex flex-col gap-2 md:pl-0 p-4">
      {filters
        .filter(isToggle)
        .map((filter) => {
          const isSelected = filter.values.find(item => item.selected);

          return (
            <details
              key={filter.label}
              data-filters={filter.values.length}
              className={`collapse collapse-arrow ${filter.values.length ? 'flex' : 'hidden'}  ${(filter.label === "PriceRanges" ||
                filter.label === "Departments" ||
                filter.label === "Categories") ? "hidden" : ""
                } flex-col gap-4`}
              style={{ order: isSelected ? -1 : 'initial' }}
              open={isSelected ? true : false}
            >
              <summary className="collapse-title after:content-['ll']">
                {filter.label === 'Brands' ? 'Marcas' : filter.label}
              </summary>
              <FilterValues {...filter} />
            </details>
          );
        })}
    </ul>

  );
}

export default Filters;
