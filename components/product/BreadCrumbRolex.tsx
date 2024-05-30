import { ProductDetailsPage } from "apps/commerce/types.ts";
import Icon from "../../components/ui/Icon.tsx";

interface Props {
    page: ProductDetailsPage | null;
}

function BreadCrumbRolex({ page }: Props) {
    if (page === null) {
        throw new Error("Missing Product Details Page Info");
    }
    const { product } = page;

    const collectionLabel = product.isVariantOf?.additionalProperty?.find((item: any) =>
        item.name === "Subtítulo Família")?.value;

    const collectionLink = product.isVariantOf?.additionalProperty?.find((item: any) =>
        item.name === "Link Família")?.value;

    const refId = product?.additionalProperty?.find((item: any) =>
        item.name === "RefId"
    )?.value;

    return (
        <div class="w-full py-4 bg-gradiente">
            <div class="rolex-container flex items-center">
                <a class="hidden md:flex items-center fixed14-ligth text-white mr-1" href="/rolex/descubra">
                    Rolex
                </a>
                <a class="hidden md:flex items-center fixed14-ligth text-white mr-1" href="/rolex/relogios-rolex">
                    <Icon
                        class="text-white mr-1"
                        size={20}
                        id="ChevronRight"
                        strokeWidth={3}
                    />
                    Relógios Rolex
                </a>
                <a class="flex items-center fixed14-ligth text-white mr-1" href={`${collectionLink}`}>
                    <Icon
                        class="hidden md:block text-white mr-1"
                        size={20}
                        id="ChevronRight"
                        strokeWidth={3}
                    />
                    <Icon
                        class="md:hidden text-white mr-1"
                        size={18}
                        id="ChevronLeft"
                        strokeWidth={3}
                    />
                    {collectionLabel}
                </a>
                <span class="hidden md:flex items-center fixed14-ligth text-[#61BD93]">
                    <Icon
                        class="text-white mr-1"
                        size={20}
                        id="ChevronRight"
                        strokeWidth={3}
                    />
                    {refId}
                </span>
            </div>
        </div>
    );
}

export default BreadCrumbRolex;