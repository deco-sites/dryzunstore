import { AnalyticsItem } from "apps/commerce/types.ts";
import Button from "../../../components/ui/Button.tsx";
import { sendEvent } from "../../../sdk/analytics.tsx";
import { formatPrice } from "../../../sdk/format.ts";
import { useUI } from "../../../sdk/useUI.ts";
import CartItem, { Item, Props as ItemProps } from "./CartItem.tsx";
import Coupon, { Props as CouponProps } from "./Coupon.tsx";
import FreeShippingProgressBar from "./FreeShippingProgressBar.tsx";

interface Props {
    items: Item[];
    loading: boolean;
    total: number;
    subtotal: number;
    discounts: number;
    locale: string;
    currency: string;
    coupon?: string;
    freeShippingTarget: number;
    checkoutHref: string;
    onAddCoupon?: CouponProps["onAddCoupon"];
    onUpdateQuantity: ItemProps["onUpdateQuantity"];
    itemToAnalyticsItem: ItemProps["itemToAnalyticsItem"];
}

function Cart({
    items,
    total,
    subtotal,
    locale,
    coupon,
    loading,
    currency,
    discounts,
    freeShippingTarget,
    checkoutHref,
    itemToAnalyticsItem,
    onUpdateQuantity,
    onAddCoupon,
}: Props) {
    const { displayCart } = useUI();
    const isEmtpy = items.length === 0;

    console.log("cart", items)

    const calculateTotalCashback = () => {
        const jewelryCategories = [
            "Anéis",
            "Brincos",
            "Colares",
            "Pendentes",
            "Pulseiras"
        ];

        const eligibleBrands = [
            "Dryzun",
            "TAG Heuer",
            "Frederique Constant",
            "Baume & Mercier",
            "Tudor",
            "Montegrappa"
        ];

        return items.reduce((total, item) => {
            const itemCategoryOrBrand = item.category ? item.category : "";

            const isEligible =
                jewelryCategories.includes(itemCategoryOrBrand) ||
                eligibleBrands.includes(itemCategoryOrBrand);

            const rate = isEligible ? 0.05 : 0;
            return total + (item.price.sale * item.quantity * rate);
        }, 0);
    };

    const totalCashback = calculateTotalCashback();

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(totalCashback);

    console.log("totalcash", totalCashback)

    return (
        <div
            class="flex flex-col justify-center items-center overflow-hidden"
            style={{ minWidth: "calc(min(100vw, 425px))", maxWidth: "425px" }}
        >
            {isEmtpy
                ? (
                    <div class="flex flex-col gap-6">
                        <span class="font-medium text-2xl">Sua sacola está vazia</span>
                        <Button
                            class="btn-outline"
                            onClick={() => {
                                displayCart.value = false;
                            }}
                        >
                            Escolher produtos
                        </Button>
                    </div>
                )
                : (
                    <>
                        {/* Free Shipping Bar */}
                        <div class="px-2 py-4 w-full">
                            <FreeShippingProgressBar
                                total={total}
                                locale={locale}
                                currency={currency}
                                target={freeShippingTarget}
                            />
                        </div>

                        {/* Cart Items */}
                        <ul
                            role="list"
                            class="mt-6 px-2 flex-grow overflow-y-auto flex flex-col gap-6 w-full"
                        >
                            {items.map((item, index) => (
                                <li key={index}>
                                    <CartItem
                                        item={item}
                                        index={index}
                                        locale={locale}
                                        currency={currency}
                                        onUpdateQuantity={onUpdateQuantity}
                                        itemToAnalyticsItem={itemToAnalyticsItem}
                                    />
                                </li>
                            ))}
                        </ul>

                        <div class="bg-[#E9EDF5] py-3 flex w-full justify-center">
                            <span class="flex items-center text-[13px] not-italic font-semibold leading-[normal] text-[#597CB2]">
                                <svg
                                    class="mr-1"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 4.51123C10.0625 2.57373 6.9375 2.57373 4.96875 4.47998L6.25 5.76123C6.46875 5.97998 6.53125 6.32373 6.40625 6.60498C6.3125 6.88623 6.03125 7.04248 5.71875 7.04248H2H1.71875C1.3125 7.04248 0.96875 6.72998 0.96875 6.29248V2.29248C0.96875 2.01123 1.15625 1.72998 1.4375 1.60498C1.71875 1.51123 2.03125 1.57373 2.25 1.76123L3.5625 3.07373C6.28125 0.38623 10.7188 0.38623 13.4375 3.10498C14.1875 3.85498 14.75 4.76123 15.0938 5.72998C15.25 6.22998 15 6.82373 14.4688 7.01123C13.9375 7.16748 13.375 6.91748 13.1875 6.38623C12.9688 5.69873 12.5625 5.07373 12 4.51123ZM15.9688 9.79248V10.0425V10.0737V13.7925C15.9688 14.105 15.8125 14.3862 15.5312 14.5112C15.25 14.605 14.9062 14.5425 14.6875 14.3237L13.4062 13.0425C10.6562 15.73 6.25 15.73 3.53125 13.0112C2.78125 12.23 2.21875 11.355 1.875 10.3862C1.6875 9.85498 1.96875 9.29248 2.5 9.10498C3 8.91748 3.5625 9.19873 3.75 9.72998C4 10.4175 4.40625 11.0425 4.9375 11.605C6.875 13.5425 10.0312 13.5425 11.9688 11.6362L10.6875 10.3237C10.4688 10.1362 10.4062 9.79248 10.5312 9.51123C10.6562 9.22998 10.9375 9.04248 11.2188 9.04248H14.9688H15H15.2188C15.6562 9.04248 15.9688 9.38623 15.9688 9.79248Z"
                                        fill="#597CB2"
                                    />
                                </svg>
                                Ganhe{" "}
                                {formattedPrice}
                                {" "}
                                de Cashback em joias
                            </span>
                        </div>

                        {/* Cart Footer */}
                        <footer class="w-full">
                            {/* Subtotal */}
                            <div class="border-t border-base-200 py-2 flex flex-col">
                                {discounts > 0 && (
                                    <div class="hidden justify-between items-center px-4">
                                        <span class="text-sm">Descontos</span>
                                        <span class="text-sm">
                                            {formatPrice(discounts, currency, locale)}
                                        </span>
                                    </div>
                                )}
                                <div class="w-full flex justify-between px-4 text-sm">
                                    <span>Subtotal</span>
                                    <span>
                                        {formatPrice(subtotal, currency, locale)}
                                    </span>
                                </div>
                                <div class="hidden">
                                    {onAddCoupon && (
                                        <Coupon onAddCoupon={onAddCoupon} coupon={coupon} />
                                    )}
                                </div>
                            </div>

                            {/* Total */}
                            <div class="border-t border-base-200 pt-4 flex flex-col justify-end items-end gap-2 mx-4">
                                <div class="flex justify-between items-center w-full">
                                    <span>Total</span>
                                    <span class="font-medium text-xl">
                                        {formatPrice(total, currency, locale)}
                                    </span>
                                </div>
                                <span class="hidden w-full text-sm text-[#333] text-center">
                                    Taxas e fretes serão calculados no checkout
                                </span>
                            </div>

                            <div class="p-4">
                                <a class="inline-block w-full" href={checkoutHref}>
                                    <Button
                                        data-deco="buy-button"
                                        class="w-full btn no-animation rounded-none btn shadow-none border-0 bg-[#B4CBF0] hover:bg-[#81A1D4] transition-[0.3s] hover:text-white flex h-12 justify-center items-center gap-2.5 self-stretch px-4 py-2.5 text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase text-[#243959]"
                                        disabled={loading || isEmtpy}
                                        onClick={() => {
                                            sendEvent({
                                                name: "begin_checkout",
                                                params: {
                                                    coupon,
                                                    currency,
                                                    value: total,
                                                    items: items
                                                        .map((_, index) => itemToAnalyticsItem(index))
                                                        .filter((x): x is AnalyticsItem => Boolean(x)),
                                                },
                                            });
                                        }}
                                    >
                                        Fechar pedido
                                    </Button>
                                </a>
                            </div>
                        </footer>
                    </>
                )}
        </div>
    );
}

export default Cart;
