import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "../../../sdk/useOffer.ts";
import { usePlatform } from "../../../sdk/usePlatform.tsx";

import AddToCartButtonLinx from "../../../islands/AddToCartButton/linx.tsx";
import AddToCartButtonNuvemshop from "../../../islands/AddToCartButton/nuvemshop.tsx";
import AddToCartButtonShopify from "../../../islands/AddToCartButton/shopify.tsx";
import AddToCartButtonVNDA from "../../../islands/AddToCartButton/vnda.tsx";
import AddToCartButtonVTEX from "../../../islands/AddToCartButton/vtex.tsx";
import AddToCartButtonWake from "../../../islands/AddToCartButton/wake.tsx";
import OutOfStock from "../../../islands/OutOfStock.tsx";

interface Props {
    page: ProductDetailsPage | null;
    buttonColor?: string;
}

function BuyButton({ page, buttonColor }: Props) {
    const platform = usePlatform();

    if (page === null) {
        throw new Error("Missing Product Details Page Info");
    }

    const { breadcrumbList, product } = page;

    const {
        productID,
        offers,
        isVariantOf,
        additionalProperty = [],
        category,
    } = product;

    console.log({ category });

    const {
        price = 0,
        listPrice,
        seller = "1",
        availability,
    } = useOffer(offers);

    const productGroupID = isVariantOf?.productGroupID ?? "";

    const breadcrumb = {
        ...breadcrumbList,
        itemListElement: breadcrumbList?.itemListElement.slice(0, -1),
        numberOfItems: breadcrumbList.numberOfItems - 1,
    };

    const eventItem = mapProductToAnalyticsItem({
        product,
        breadcrumbList: breadcrumb,
        price,
        listPrice,
    });

    return (
        <>
            {availability === "https://schema.org/InStock"
                ? (
                    <>
                        {platform === "vtex" && (
                            <>
                                <AddToCartButtonVTEX
                                    eventParams={{ items: [eventItem] }}
                                    productID={productID}
                                    category={category ? category : ""}
                                    seller={seller}
                                    buttonColor={buttonColor}
                                />
                            </>
                        )}

                        {platform === "wake" && (
                            <>
                                <AddToCartButtonWake
                                    eventParams={{ items: [eventItem] }}
                                    productID={productID}
                                />
                            </>
                        )}

                        {platform === "linx" && (
                            <AddToCartButtonLinx
                                eventParams={{ items: [eventItem] }}
                                productID={productID}
                                productGroupID={productGroupID}
                            />
                        )}

                        {platform === "vnda" && (
                            <AddToCartButtonVNDA
                                eventParams={{ items: [eventItem] }}
                                productID={productID}
                                additionalProperty={additionalProperty}
                            />
                        )}

                        {platform === "shopify" && (
                            <AddToCartButtonShopify
                                eventParams={{ items: [eventItem] }}
                                productID={productID}
                            />
                        )}

                        {platform === "nuvemshop" && (
                            <AddToCartButtonNuvemshop
                                productGroupID={productGroupID}
                                eventParams={{ items: [eventItem] }}
                                additionalProperty={additionalProperty}
                            />
                        )}
                    </>
                )
                : <OutOfStock productID={productID} />}
        </>
    );
}

export default BuyButton;
