import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { formatPrice } from "../../sdk/format.ts";
import Button from "../ui/Button.tsx";

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
  const baseUrl = currentUrlFilterPrice || globalThis.location.search;
  const searchParams = new URLSearchParams(baseUrl);

  // Remove temporariamente os parâmetros que queremos controlar a ordem
  const categoryValue = searchParams.get("filter.category-1") || "aneis";
  searchParams.delete("filter.category-1");
  searchParams.delete("filter.price");

  searchParams.set("filter.category-1", categoryValue);
  searchParams.set("filter.price", `${min}:${max}`);

  // Constrói a nova URL mantendo o pathname atual
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
  isMobile,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Garantir que os valores sejam números válidos
  const safeMinValue = Number(minValue) || 0;
  const safeMaxValue = Number(maxValue) || 0;
  
  // Validar se existe um filtro de preço selecionado na URL atual
  const getCurrentPriceFilter = () => {
    const searchParams = new URLSearchParams(currentUrlFilterPrice || globalThis.location.search);
    const priceFilter = searchParams.get("filter.price");
    
    if (priceFilter) {
      const [min, max] = priceFilter.split(":").map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        return { min, max };
      }
    }
    return null;
  };
  
  const currentPriceFilter = getCurrentPriceFilter();
  const safeCurrentMin = currentPriceFilter?.min ?? Number(currentMinFacet) ?? safeMinValue;
  const safeCurrentMax = currentPriceFilter?.max ?? Number(currentMaxFacet) ?? safeMaxValue;
  
  const rangemin = useSignal(safeCurrentMin);
  const rangemax = useSignal(safeCurrentMax);

  const updateSliderTrack = () => {
    if (sliderRef.current && safeMaxValue > safeMinValue) {
      const percent1 = ((rangemin.value - safeMinValue) / (safeMaxValue - safeMinValue)) * 100;
      const percent2 = ((rangemax.value - safeMinValue) / (safeMaxValue - safeMinValue)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #B4CBF0 ${percent1}% , #B4CBF0 ${percent1}%, #B4CBF0 ${percent2}%, #B4CBF0 ${percent2}%)`;
    }
  };

  const handleApplyFilter = () => {
    applyFilterPrice({
      min: rangemin.value,
      max: rangemax.value,
      currentUrlFilterPrice,
    });
  };

  const handleSliderChange = (min: number, max: number) => {
    if (min >= max) {
      return;
    }

    rangemin.value = min;
    rangemax.value = max;

    updateSliderTrack();

    if (!isMobile) {
      debouncedApplyFilterPrice({
        min,
        max,
        currentUrlFilterPrice,
      });
    }
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

      {isMobile && (
        <div class="flex justify-center mt-4">
          <Button 
            onClick={handleApplyFilter}
            class="btn no-animation rounded-none btn shadow-none border-0 transition-[0.3s] flex h-12 justify-center items-center gap-2.5 self-stretch px-4 py-2.5 text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase text-[#243959] bg-[#B4CBF0] hover:bg-[#81A1D4] hover:text-white w-[90%]"
          >
              Aplicar Filtro
            </Button>
        </div>
      )}
    </div>
  );
}

export default FiltersPrice;
