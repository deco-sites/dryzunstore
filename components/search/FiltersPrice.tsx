import { useEffect, useId, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { formatPrice } from "../../sdk/format.ts";

export interface Props {
  min: number;
  max: number;
  currentUrlFilterPrice: string;
  currentMinFacet: number;
  currentMaxFacet: number;
  isMobile?: boolean;
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
  currentMinFacet?: number;
  currentMaxFacet?: number;
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

  globalThis.location.href = newUrl;
}

const debouncedApplyFilterPrice = debounce(applyFilterPrice, 1500);

function FiltersPrice({
  min: minValue,
  max: maxValue,
  currentUrlFilterPrice = "",
  currentMinFacet,
  currentMaxFacet,
}: Props) {
  const id = useId();
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Garantir que os valores sejam números válidos
  const safeMinValue = Number(minValue) || 0;
  const safeMaxValue = Number(maxValue) || 0;
  const safeCurrentMin = Number(currentMinFacet) || safeMinValue;
  const safeCurrentMax = Number(currentMaxFacet) || safeMaxValue;
  
  const rangemin = useSignal(safeCurrentMin);
  const rangemax = useSignal(safeCurrentMax);

  const updateSliderTrack = () => {
    if (sliderRef.current && safeMaxValue > safeMinValue) {
      const percent1 = ((rangemin.value - safeMinValue) / (safeMaxValue - safeMinValue)) * 100;
      const percent2 = ((rangemax.value - safeMinValue) / (safeMaxValue - safeMinValue)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #B4CBF0 ${percent1}% , #B4CBF0 ${percent1}%, #B4CBF0 ${percent2}%, #B4CBF0 ${percent2}%)`;
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
  }, [safeMinValue, safeMaxValue]);

  return (
    <div class="flex flex-col">
      <summary class="collapse-title">
        <h5>Faixa de Preço</h5>
      </summary>

      <div class="relative w-[90%] h-50 rounded m-0 mx-auto">
        <div ref={sliderRef} class="w-full h-[4px] absolute m-auto top-0 bottom-0 rounded-[5px]"></div>

        <input
          type="range"
          id={`min-range-price`}
          min={safeMinValue}
          max={safeMaxValue}
          value={rangemin.value}
          class="w-full appearance-none bg-transparent"
          onInput={(e) => handleSliderChange(Number(e.currentTarget.value), rangemax.value)}
          style={{ pointerEvents: 'auto' }}
        />

        <input
          type="range"
          id={`max-range-price`}
          min={safeMinValue}
          max={safeMaxValue}
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
