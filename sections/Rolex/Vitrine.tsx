import type { Product } from "apps/commerce/types.ts";
import ProductCard from "../../components/product/ProductCardRolex.tsx";
import { useId } from "../../sdk/useId.ts";
import { usePartialSection } from "@deco/deco/hooks";
export interface Props {
  products: Product[] | null;
  title?: string;
  subTitle?: string;
  /** @hidden */
  more?: number;
}

function Vitrine({ products, title, more = 6 }: Props) {
  const id = useId();
  const background = `background-color: #fff`;

  if (!products || products.length === 0) {
    return null;
  }

  const maxMore = products?.length;
  
  return (
    <>
      <div class="rolex-container-vitrine mb-[90px]" style={background}>
        <div id={id} class="flex flex-wrap gap-2">
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
            <div class="w-full flex items-center justify-center mt-[50px]">
              <button
                {...usePartialSection({ props: { more: more + 6 } })}
                class="btn primary-cta bg-rolex-1 hover:bg-rolex-1 w-[170px]"
              >
                Ver mais
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Vitrine;
