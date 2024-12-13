import { useId, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

import Avatar from "../../components/ui/Avatar.tsx";
import { formatPrice } from "../../sdk/format.ts";

import { parseRange } from "apps/commerce/utils/filters.ts";
import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

interface FilterRangeProps {
  min: number;
  max: number;
  currentUrlFilterPrice: string;
  currentMinFacet: string;
  currentMaxFacet: string;
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem({
  url,
  selected,
  label,
  quantity,
  order,
}: FilterToggleValue) {
  return (
    <a
      style={{ order: order ?? 0 }}
      href={url}
      rel="nofollow"
      class="flex items-center gap-2"
    >
      <div
        aria-checked={selected}
        class={`${
          selected ? "before:content-['✔'] before:text-white" : ""
        } flex items-center justify-center w-5 h-5 border border-solid border-[#E0DEDA] aria-checked:border-[#B4CBF0] aria-checked:bg-[#B4CBF0]`}
      />
      <span class="text-[0.80rem]">{label}</span>
      {quantity > 0 && <span class="text-[0.75rem]">({quantity})</span>}
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
              order={range.from}
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
          const isSelected = filter.values.find((item) => item.selected);

          return (
            <details
              key={filter.label}
              data-filters={filter.values.length}
              className={`collapse collapse-arrow filter-${filter.label} ${
                filter.values.length > 1 ? "flex" : "hidden"
              }  ${
                (filter.label === "Departments" ||
                    filter.label === "Categories")
                  ? "hidden"
                  : ""
              } flex-col gap-4`}
              style={{
                order: (isSelected && filter.label != "Preço")
                  ? -1
                  : filter.label === "Preço"
                  ? 99
                  : "initial",
              }}
              open={isSelected ? true : false || filter.label == "Preço"}
            >
              {filter.label !== "Preço" && ( 
                <summary className="collapse-title after:content-['ll']">
                  <h5>
                    {filter.label === "Brands" ? "Marcas" : filter.label }
                  </h5>
                </summary>
              )}

              { filter.label !== "Preço" && (
                <FilterValues {...filter} /> 
              )}
            </details>
          );
        })}
    </ul>
  );
}

export default Filters;
