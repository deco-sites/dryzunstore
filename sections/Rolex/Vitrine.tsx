import type { Product } from "apps/commerce/types.ts";
import ProductCard from "../../components/product/ProductCardRolex.tsx";
import { useId } from "../../sdk/useId.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

import Collections from "./ExploringCollection.tsx";

export interface Props {
  products: Product[] | null;
  title?: string;
  subTitle?: string;
  /** @hidden */
  more?: number;
}

function Vitrine({
  products,
  title,
  subTitle,
  more = 6,
}: Props) {
  const id = useId();

  const background = `background-color: #f9f7f4`;

  if (!products || products.length === 0) {
    return null;
  }

  const maxMore = products?.length - 1;

  return (
    <>
      <div
        class="rolex-container-vitrine py-[60px] md:py-[90px]"
        style={background}
      >
        <h3 class="f-rolex text-[30px] md:text-[36px] leading-[1.1] font-boldd text-[#452c1e] mb-2 text-center">
          {title}
        </h3>
        {subTitle && (
          <h4 class="f-rolex text-[30px] md:text-[36px] leading-[1.1] font-boldd text-[#452c1e] mb-7 text-center">
            {subTitle}
          </h4>
        )}

        <div
          id={id}
          class="flex flex-wrap gap-2"
        >
          {products?.map((product, index) => (
            <div
              class={`${
                index < more ? "block" : "hidden"
              } w-[48.5%] md:w-[32%] card-${index}`}
            >
              <ProductCard
                product={product}
                itemListName={title}
                index={index}
              />
            </div>
          ))}

          {more < maxMore && (
            <div class="w-full flex items-center justify-center mt-5">
              <button
                {...usePartialSection({ props: { more: more + 6 } })}
                class="btn primary-cta bg-rolex-1 w-fit hover:bg-rolex-1"
              >
                Ver mais
              </button>
            </div>
          )}
        </div>
      </div>
      <Collections />
    </>
  );
}

export default Vitrine;
