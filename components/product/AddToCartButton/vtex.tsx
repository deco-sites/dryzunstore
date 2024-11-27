import { useCart } from "apps/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";
import { useState } from "preact/hooks";

export interface Props extends Omit<BtnProps, "onAddItem"> {
  seller: string;
  productID: string;
  category: string;
}

function AddToCartButton({ seller, productID, category, eventParams }: Props) {
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
      const existingItemIndex = items.findIndex((item) => item.id === productID);
      const index = existingItemIndex >= 0 ? existingItemIndex : items.length;

      await addItemAttachment({
        index: index,
        attachment: "personalization",
        content: { aro: selectedSize },
      });
    }
  }
  
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
    "22"
  ];

  return (
    <>
      {category === "Anéis" && (  
        <p className="text-[12px] font-normal not-italic leading-normal">
          Tamanho
        </p>
      )}

      {category === "Anéis" && (
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

      {category === "Anéis" && (
        <Button
          onAddItem={onAddItem} 
          eventParams={eventParams} 
          buttonDisabled={!selectedSize}
        />
      )}

      {category !== "Anéis" && (
        <Button
          onAddItem={onAddItem} 
          eventParams={eventParams} 
          buttonDisabled={false}
        />
      )}
    </>
  );
}

export default AddToCartButton;
