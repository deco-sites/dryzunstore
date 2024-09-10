import type { Product } from "apps/commerce/types.ts";
import ProductCard from "../../components/product/tagheuer/ProductCard.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import Slider from "../../components/ui/Slider.tsx";

export interface Props {
  products: Product[] | null;
}

function Shelf({
  products,
}: Props) {
  const id = useId();
  const platform = usePlatform();

  const background = `background-color: #000`;

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <>
      <div
        class="w-full md:pl-10 py-8 flex flex-col gap-0 lg:py-10 overflow-hidden"
        style={background}
      >
        <div
          id={id}
          class="relative flex items-center flex-wrap gap-2"
        >
          <Slider class="carousel carousel-center sm:carousel-end gap-3 col-span-full row-start-2 row-end-5">
            {products?.map((product, index) => (
              <Slider.Item
                index={index}
                class={"carousel-item w-[78%] md:w-[28%] first:pl-0 sm:first:pl-0 last:pr-6 sm:last:pr-0"}
              >
                <ProductCard
                  product={product}
                  itemListName={"Tag heuer"}
                  platform={platform}
                  index={index}
                />
              </Slider.Item>
            ))}
          </Slider>

          <>
            <div class="bg-white absolute left-2 md:left-0 block z-10 col-start-1 row-start-3 border border-solid border-[#666]">
              <Slider.PrevButton class="w-12 h-12 flex justify-center items-center disabled:hidden">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
            <div class="bg-white absolute right-2 md:right-10 block z-10 col-start-3 row-start-3 border border-solid border-[#666]">
              <Slider.NextButton class="w-12 h-12 flex justify-center items-center disabled:hidden">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>

          <Slider.JS rootId={id} />
        </div>
      </div>
    </>
  );
}

export default Shelf;
