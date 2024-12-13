import { useEffect, useId, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { formatPrice } from "../../sdk/format.ts";

export interface Props {
  min: number;
  max: number;
  currentUrlFilterPrice: string;
  currentMinFacet: string;
  currentMaxFacet: string;
}

interface UpdateUrlArgs {
  min: number;
  max: number;
  currentUrlFilterPrice: string;
}

interface FilterRangeProps {
  min: number;
  max: number;
  currentUrlFilterPrice?: string;
  currentMinFacet?: string;
  currentMaxFacet?: string;
}

function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 300,
): (...args: Parameters<T>) => void {
  let timeoutId: number | undefined;

  return (...args: Parameters<T>) => {
    // Limpa o timeout anterior
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    // Define um novo timeout
    timeoutId = globalThis.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function applyFilterPrice({ min, max, currentUrlFilterPrice }: FilterRangeProps) {
  const searchParams = new URLSearchParams(currentUrlFilterPrice);

  searchParams.set("filter.price", `${min}:${max}`);

  const newUrl = `${globalThis.location.pathname}?${searchParams.toString()}`;

  console.log({ newUrl, searchParams, min, max, currentUrlFilterPrice });

  globalThis.location.href = newUrl;
}

const debouncedApplyFilterPrice = debounce(applyFilterPrice, 300);

function FiltersPrice({
  min: minValue,
  max: maxValue,
  currentUrlFilterPrice = "",
  currentMinFacet,
  currentMaxFacet,
}: Props) {
  const id = useId();
  const sliderRef = useRef<HTMLDivElement>(null);
  const rangemin = useSignal(Number(currentMinFacet));
  const rangemax = useSignal(Number(currentMaxFacet));

  const handleSliderChange = (min: number, max: number) => {
    rangemin.value = min;
    rangemax.value = max;

    debouncedApplyFilterPrice({
      min,
      max,
      currentUrlFilterPrice,
    });
  };

  useEffect(() => {
    rangemin.value = minValue;
    rangemax.value = maxValue;
  }, [minValue, maxValue]);

  return (
    <div class="flex flex-col">
      <div ref={sliderRef} class="relative w-full">
        <input
          type="range"
          id={`min-${id}`}
          min={minValue}
          max={maxValue}
          value={rangemin.value}
          onInput={(e) =>
            handleSliderChange(Number(e.currentTarget.value), rangemax.value)}
        />

        <input
          type="range"
          id={`max-${id}`}
          min={minValue}
          max={maxValue}
          value={rangemax.value}
          onInput={(e) =>
            handleSliderChange(rangemin.value, Number(e.currentTarget.value))}
        />
      </div>

      <div class="flex justify-end items-center mt-2">
        <output>{formatPrice(rangemin.value, "BRL")}</output>

        <span class="mx-1">-</span>

        <output>{formatPrice(rangemax.value, "BRL")}</output>
      </div>
    </div>
  );
}

export default FiltersPrice;
