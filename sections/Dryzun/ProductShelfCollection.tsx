import type { Product } from "apps/commerce/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

import ProductCard from "../../components/product/dryzun/ProductCard.tsx";
import Slider from "../../components/ui/Slider.tsx";

import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";

export interface Props {  
  products: Product[] | null;
  description: string;
  link: string;
  layout?: {
    showArrows?: boolean;
  };

  /** @description Banner Mobile */
  mobile: ImageWidget;

  /** @description Banner Desktop */
  desktop: ImageWidget;
}

function ProductShelfCollection(
  { products, description, layout, desktop, mobile, link }: Props,
) {
  const id = useId();
  const platform = usePlatform();

  if (!products || !products.length) {
    return null;
  }

  return (
    <div class="w-full container-2 flex flex-col gap-6 lg:py-3 mb-[50px]">
      <Picture preload={true}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={"auto"}
          src={mobile}
          width={430}
        />

        <Source
          media="(min-width: 768px)"
          fetchPriority={"auto"}
          src={desktop}
          width={1440}
        />

        <img
          class="object-cover w-full h-full max-md:px-5"
          loading={"lazy"}
          src={desktop}
        />
      </Picture>

      <p class="text-[#666461] text-center text-base not-italic font-normal leading-[normal] tracking-[0.8px] mt-5">
        {description}
      </p>

      <div
        id={id}
        class={clx(
          "grid",
          layout?.showArrows && "grid-cols-[48px_1fr_48px]",
          "px-0 md:px-5 container",
        )}
      >
        <Slider class="carousel carousel-center sm:carousel-end sm:gap-1 row-start-2 row-end-5">
          {products?.map((product, index) => (
            <Slider.Item
              index={index}
              class={clx("carousel-item", "md:w-1/4", "w-1/2")}
            >
              <ProductCard
                product={product}
                platform={platform}
                index={index}
              />
            </Slider.Item>
          ))}
        </Slider>

        <Slider.JS rootId={id} />
      </div>

      <div class="mx-auto my-0">
        <a
          href={link}
          class="border block text-center text-[#243959] text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase px-8 py-4 border-solid border-[#243959] hover:bg-[#243959] hover:text-[#fff] transition-[.3s]"
        >
          ver coleção completa
        </a>
      </div>
    </div>
  );
}

export default ProductShelfCollection;
