import { useCart } from "apps/vtex/hooks/useCart.ts";
import { useState } from "preact/hooks";
import Button, { Props as BtnProps } from "./common.tsx";

export interface Props extends Omit<BtnProps, "onAddItem"> {
    seller: string;
    productID: string;
    category: string;
    buttonColor: string;
    bgColor: string;
}

function AddToCartButton({ seller, productID, category, eventParams, buttonColor, bgColor }: Props) {
    const { cart, addItems, addItemAttachment } = useCart();
    const { items } = cart.value ?? { items: [] };

    const [selectedSize, setSelectedSize] = useState<string>("");

    const handleSizeChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        setSelectedSize(target.value);
    };

    const onAddItem = async () => {
        await addItems({
            orderItems: [{ id: productID, seller, quantity: 1 }],
        });

        if (category === "Anéis") {
            const existingItemIndex = items.findIndex((item) =>
                item.id === productID
            );
            const index = existingItemIndex >= 0 ? existingItemIndex : items.length;

            await addItemAttachment({
                index: index,
                attachment: "personalization",
                content: { aro: selectedSize },
            });
        }
    };

    const RING_SIZES = [
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
    ];

    const SHOW_SELECT_ATTACHMENT = category === "Anéis" ||
        category === "Casamento>Alianças";

    return (
        <>
            {category === "Anéis" ||
                category === "Casamento>Alianças" && (
                    <p className="text-[12px] font-normal not-italic leading-normal">
                        Tamanho {category}
                    </p>
                )}

            {SHOW_SELECT_ATTACHMENT && (
                <select
                    name="size"
                    id="size"
                    onChange={handleSizeChange}
                    className="w-full border border-gray-300 rounded-none p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="" disabled selected>
                        Selecione
                    </option>

                    {RING_SIZES.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            )}

            {SHOW_SELECT_ATTACHMENT && (
                <Button
                    onAddItem={onAddItem}
                    eventParams={eventParams}
                    buttonDisabled={!selectedSize}
                    button
                />
            )}

            {!SHOW_SELECT_ATTACHMENT && (
                <Button
                    onAddItem={onAddItem}
                    eventParams={eventParams}
                    buttonDisabled={false}
                    buttonColor={buttonColor}
                    bgColor={bgColor}
                />
            )}
        </>
    );
}

export default AddToCartButton;
