import type { Product } from "apps/commerce/types.ts";

import ProductCard from "../../components/product/dryzun/ProductCard.tsx";
import Slider from "../../components/ui/Slider.tsx";

import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";

export interface Props {
    products: Product[] | null;
    description: string;
    link: string;
}

function SimpleProductCollection(
    { products, link }: Props,
) {
    const id = useId();
    const platform = usePlatform();

    if (!products || !products.length) {
        return null;
    }

    return (
        <div class="w-full container-2 flex flex-col gap-6 lg:py-3 mb-[50px]">
            <div
                id={id}
                class="grid grid-cols-2 md:flex"
            >
                <Slider class="carousel carousel-center sm:carousel-end sm:gap-1 row-start-2 row-end-5 mx-auto">
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
                    class="border block text-center text-[#8da0d1] text-xs not-italic font-bold 
          leading-[normal] tracking-[1.2px] px-8 py-4 border-solid border-[#8da0d1] 
          hover:bg-[#8da0d1] hover:text-[#fff] transition-[.3s]"
                >
                    Ver coleção completa
                </a>
            </div>
        </div>
    );
}

export default SimpleProductCollection;
