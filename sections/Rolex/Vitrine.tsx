import type { Product } from "apps/commerce/types.ts";
import ProductCard from "../../components/product/ProductCardRolex.tsx";
import { useId } from "../../sdk/useId.ts";

export interface Props {
    products: Product[] | null;
    title?: string;
    subTitle?: string;
}

function Vitrine({
    products,
    title,
    subTitle,
}: Props) {
    const id = useId();

    const background = `#f9f4f7`;

    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div class="rolex-container-2 py-[60px] md:py-[90px]" style={background}>

            <h3 class="f-rolex text-[30px] md:text-[50px] leading-[1.1] font-boldd text-[#452c1e] mb-2 text-center">{title}</h3>
            {subTitle && <h4 class="f-rolex text-[30px] md:text-[50px] leading-[1.1] font-boldd text-[#452c1e] mb-7 text-center">{subTitle}</h4>}

            <div
                id={id}
                class="flex flex-wrap gap-2 md:gap-4"
            >
                {products?.map((product, index) => (
                    <ProductCard
                        product={product}
                        itemListName={title}
                        index={index}
                    />

                ))}
            </div>
        </div>
    );
}

export default Vitrine;
