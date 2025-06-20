import { AddToCartParams } from "apps/commerce/types.ts";
import { useState } from "preact/hooks";
import Button from "../../../components/ui/Button.tsx";
import { sendEvent } from "../../../sdk/analytics.tsx";
import { useUI } from "../../../sdk/useUI.ts";

export interface Props {
    /** @description: sku name */
    eventParams: AddToCartParams;
    onAddItem: () => Promise<void>;
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

    console.log("dsadsa")
    console.log("btnProps", props)

    return (
        <Button
            {...btnProps}
            class={`rounded-none btn shadow-none border-0 transition-[0.3s] flex h-12 justify-center items-center gap-2.5 self-stretch px-4 py-2.5 text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase ${props.buttonColor}  ${props.buttonDisabled
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
