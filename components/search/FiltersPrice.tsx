import { useEffect, useId, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { formatPrice } from "../../sdk/format.ts";

export interface Props {
  min: number;
  max: number;
  currentUrlFilterPrice: string;
  currentMinFacet: number;
  currentMaxFacet: number;
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
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = globalThis.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function applyFilterPrice({ min, max, currentUrlFilterPrice }: FilterRangeProps) {
  const searchParams = new URLSearchParams(currentUrlFilterPrice);

  searchParams.set("filter.price", `${min}:${max}`);

  const newUrl = `${globalThis.location.pathname}?${searchParams.toString()}`;

  console.log({ 
    newUrl, 
    searchParams, 
    min, 
    max, 
    currentUrlFilterPrice 
  });

  // globalThis.location.href = newUrl;
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

  rangemin.value = rangemin?.value;
  rangemax.value = rangemax?.value;

  const updateSliderTrack = () => {
    if (sliderRef.current) {
      const percent1 = ((rangemin.value - minValue) / (maxValue - minValue)) * 100;
      const percent2 = ((rangemax.value - minValue) / (maxValue - minValue)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }
  };

  const handleSliderChange = (min: number, max: number) => {
    if (min >= max) {
      return;
    }

    rangemin.value = min;
    rangemax.value = max;

    updateSliderTrack();

    debouncedApplyFilterPrice({
      min,
      max,
      currentUrlFilterPrice,
    });
  };

  useEffect(() => {
    updateSliderTrack();
  }, [minValue, maxValue]);

  return (
    <div class="flex flex-col">
      <summary class="collapse-title">
        <h5>Faixa de Preço</h5>
      </summary>

      <div class="relative w-[90%] h-50 rounded m-0 mx-auto">
        <div ref={sliderRef} class="w-full h-[4px] absolute m-auto top-0 bottom-0 rounded-[5px]"></div>

        <input
          type="range"
          id={`min-${id}`}
          min={minValue}
          max={maxValue}
          value={rangemin.value}
          class="w-full appearance-none bg-transparent"
          onInput={(e) => handleSliderChange(Number(e.currentTarget.value), rangemax.value)}
          style={{ pointerEvents: 'auto' }}
        />

        <input
          type="range"
          id={`max-${id}`}
          min={minValue}
          max={maxValue}
          value={rangemax.value}
          class="w-full appearance-none bg-transparent"
          onInput={(e) => handleSliderChange(rangemin.value, Number(e.currentTarget.value))}
          style={{ pointerEvents: 'auto' }}
        />
      </div>

      <div class="flex justify-center items-center mt-2">
        <p class="text-sm font-normal leading-[normal] tracking-[0.42px] text-[#666461]">
          {formatPrice(rangemin.value, "BRL")} - {formatPrice(rangemax.value, "BRL")}
        </p>
      </div>
    </div>
  );
}

export default FiltersPrice;
