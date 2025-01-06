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
    linkAll?: string;
    description?: string;
    bgColor?: "fff" | "F5F3F0";
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
    linkAll,
    description,
    bgColor,
    layout,
}: Props) {
    const id = useId();
    const platform = usePlatform();

    if (!products || products.length === 0) {
        return null;
    }

    const isRolex = products[0]?.brand?.name === "Rolex";
    if (isRolex) {
        return;
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
        <div
            style={{ backgroundColor: `#${bgColor}` ?? "#fff" }}
            class="w-full container-2 pb-8 pt-10 flex flex-col gap-6 lg:pb-10 lg:pt-[64px]"
        >
            <Header
                title={title || ""}
                description={description || ""}
            />

            <div
                id={id}
                class="w-full relative"
            >
                <Slider class="max-md:flex max-md:flex-wrap max-md:justify-between w-full md:carousel md:carousel-end row-start-2 row-end-5">
                    {products?.map((product, index) => (
                        <Slider.Item
                            index={index}
                            class={clx(
                                `${index > 3 && "max-md:hidden"
                                } carousel-item max-md:w-[49%] box-border px-2 py-0`,
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

                <a
                    href={linkAll ?? "#"}
                    class="w-full h-[47px] mt-8 flex md:hidden justify-between items-center px-4 bg-[#B4CBF0] text-[#243959] text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase"
                >
                    ver todos
                    <Icon
                        size={22}
                        id="ChevronRight"
                        strokeWidth={3}
                        class="text-[#243959]"
                    />
                </a>

                {layout?.showArrows && (
                    <div class="hidden md:block">
                        <div class="absolute left-0 top-1/2">
                            <Slider.PrevButton class="flex justify-center items-center disabled:hidden">
                                <Icon
                                    size={24}
                                    id="ChevronLeft"
                                    strokeWidth={3}
                                    class="w-5 text-[#333]"
                                />
                            </Slider.PrevButton>
                        </div>
                        <div class="absolute right-0 top-1/2">
                            <Slider.NextButton class="flex justify-center items-center disabled:hidden">
                                <Icon
                                    size={24}
                                    id="ChevronRight"
                                    strokeWidth={3}
                                    class="text-[#333]"
                                />
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
                                        class="w-2.5 h-2.5 border border-solid border-[#81A1D4] bg-transparent group-disabled:bg-[#81A1D4] rounded-[50%]"
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
