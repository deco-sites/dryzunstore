
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { useId } from "../../sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    page: ProductDetailsPage | null;
}

function ProductMainRolex({ page }: Props) {
    const id = useId();

    if (page === null) {
        throw new Error("Missing Product Details Page Info");
    }

    const { product } = page;
    const {
        productID,
        offers,
        name = "",
        gtin,
        isVariantOf,
        additionalProperty = [],
        image = [],
    } = product;

    const width = 725;
    const height = 725;
    const refId = product?.additionalProperty?.find((item: any) =>
        item.name === "RefId"
    )?.value;

    const urlOtimized = image[0]?.url!.split(`${refId}`)[0] + `${refId}-725-auto`;    

    const aspectRatio = `${width} / ${height}`;

    /** infos */
    const model = product.isVariantOf?.additionalProperty?.find((item: any) =>
        item.name === "Caixa do Modelo")?.value;

    return (
        <section id={id}
            class="relative rolex-container flex max-md:flex-col-reverse justify-center items-center">
            <div class="md:absolute left-[7%] md:left-[8%] grid gap-3 max-md:mt-5">
                <p class="body24 text-[#452C1E]">Rolex</p>
                <h1 class="headline50 text-[#452C1E]">{name}</h1>
                <p>{model}</p>
                <a class="secondary-cta" href="#disponibilidade_modelo">Disponibilidade do modelo</a>
            </div>
            <div class="m-auto">
                <Image
                    style={{ aspectRatio }}
                    src={urlOtimized}
                    alt={"teste"}
                    width={width}
                    height={height}
                    preload={true}
                    loading={"eager"}
                />
            </div>
        </section>
    );
}

export default ProductMainRolex;
