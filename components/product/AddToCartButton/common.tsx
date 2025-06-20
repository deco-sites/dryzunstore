import { AddToCartParams } from "apps/commerce/types.ts";
import { useState } from "preact/hooks";
import Button from "../../../components/ui/Button.tsx";
import { sendEvent } from "../../../sdk/analytics.tsx";
import { useUI } from "../../../sdk/useUI.ts";

export interface Props {
    /** @description: sku name */
    eventParams: AddToCartParams;
    onAddItem: () => Promise<void>;
    buttonColor?: string;
    bgColor?: string;
    buttonDisabled: any
}

const useAddToCart = ({ eventParams, onAddItem }: Props) => {
    const [loading, setLoading] = useState(false);
    const { displayCart } = useUI();

    const onClick = async (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            setLoading(true);

            await onAddItem();

            sendEvent({
                name: "add_to_cart",
                params: eventParams,
            });

            displayCart.value = true;
        } finally {
            setLoading(false);
        }
    };

    return { onClick, loading, "data-deco": "add-to-cart" };
};

export default function AddToCartButton(props: Props) {
    const btnProps = useAddToCart(props);

    if (!props.buttonColor) props.buttonColor = "text-[#243959]"
    if (!props.bgColor) props.bgColor = "bg-[#B4CBF0] hover:bg-[#81A1D4] hover:text-white"

    return (
        <Button
            {...btnProps}
            class={`${props.buttonColor} rounded-none btn shadow-none border-0 transition-[0.3s] flex h-12 justify-center 
                items-center gap-2.5 self-stretch px-4 py-2.5 text-xs not-italic font-bold 
                leading-[normal] tracking-[1.2px] uppercase 
                ${props.buttonDisabled
                    ? "bg-[#f5f5f5] cursor-not-allowed pointer-events-none"
                    : props.bgColor
                }`}
        >
            {props.buttonDisabled
                ? (
                    "Selecione o tamanho"
                )
                : (
                    "Comprar"
                )}
        </Button>
    );
}
