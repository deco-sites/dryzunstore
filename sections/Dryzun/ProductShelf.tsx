import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnView } from "../../components/Analytics.tsx";
import ProductCard from "../../components/product/dryzun/ProductCard.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Header from "../../components/ui/SectionHeader.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";

export interface Props {
  products: Product[] | null;
  title?: string;
  description?: string;
  layout?: {
    numberOfSliders?: {
      mobile?: 1 | 2 | 3 | 4 | 5;
      desktop?: 1 | 2 | 3 | 4 | 5;
    };
    showArrows?: boolean;
  };
}

function ProductShelf({
  products,
  title,
  description,
  layout,
}: Props) {
  const id = useId();
  const platform = usePlatform();

  if (!products || products.length === 0) {
    return null;
  }
  const slideDesktop = {
    1: "md:w-full",
    2: "md:w-1/2",
    3: "md:w-1/3",
    4: "md:w-1/4",
    5: "md:w-1/5",
  };

  const slideMobile = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
    5: "w-1/5",
  };
  return (
    <div class="w-full container-2 py-8 flex flex-col gap-6 lg:py-10 max-md:my-10">
      <Header
        title={title || ""}
        description={description || ""}
      />

      <div
        id={id}
        class="w-full relative dryzun-2b"
      >
        <Slider class="max-md:flex max-md:flex-wrap max-md:justify-between w-full md:carousel md:carousel-end row-start-2 row-end-5">
          {products?.map((product, index) => (
            <Slider.Item
              index={index}
              class={clx(
                "carousel-item max-md:w-[49%] box-border px-2 py-0",
                slideDesktop[layout?.numberOfSliders?.desktop ?? 3],
                slideMobile[layout?.numberOfSliders?.mobile ?? 1],
              )}
            >
              <ProductCard
                product={product}
                itemListName={title}
                platform={platform}
                index={index}
              />
            </Slider.Item>
          ))}
        </Slider>

        {layout?.showArrows && (
          <div class="hidden md:block">
            <div class="z-10 absolute left-3 top-1/2">
              <Slider.PrevButton class="flex justify-center items-center">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5 text-[#333]" />
              </Slider.PrevButton>
            </div>
            <div class="z-10 absolute right-3 top-1/2">
              <Slider.NextButton class="flex justify-center items-center">
                <Icon size={24} id="ChevronRight" strokeWidth={3} class="text-[#333]" />
              </Slider.NextButton>
            </div>
          </div>
        )}


        <ul class="w-full hidden md:flex carousel justify-center col-span-full gap-6 z-10 row-start-4">
          {products?.map((_, index) => (
            <li class="carousel-item hidden itemDots">
              <Slider.Dot index={index}>
                <div class="py-5">
                  <div
                    class="w-2.5 h-2.5 border border-solid border-[#81A1D4] bg-white group-disabled:bg-[#81A1D4] rounded"
                    style={{ animationDuration: `${0}s` }}
                  />
                </div>
              </Slider.Dot>
            </li>
          ))}
        </ul>

        <Slider.JS rootId={id} />
        <SendEventOnView
          id={id}
          event={{
            name: "view_item_list",
            params: {
              item_list_name: title,
              items: products.map((product, index) =>
                mapProductToAnalyticsItem({
                  index,
                  product,
                  ...(useOffer(product.offers)),
                })
              ),
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProductShelf;
