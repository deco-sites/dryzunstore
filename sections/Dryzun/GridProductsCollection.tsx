import type { Product } from "apps/commerce/types.ts";

import ProductCard from "../../components/product/dryzun/ProductCard.tsx";

import { useId } from "../../sdk/useId.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";

export interface Props {
    products: Product[] | null;
    description: string;
    link: string;
}

function GrindProductsCollection(
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

                <div class="flex gap-4 md:gap-12 justify-center items-center">
                    {products?.map((product, index) => (
                        <ProductCard
                            product={product}
                            platform={platform}
                            index={index}
                        />
                    ))}
                </div>

                <div class="mx-auto my-0">
                    <a
                        href={link}
                        class="border boder-solid boder-[#C50C45] p-4 text-center uppercase text-xs
                        font-bold tracking-[10%] md:text-sm md:py-5 md:px-8"
                    >
                        Ver coleção completa
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GrindProductsCollection
