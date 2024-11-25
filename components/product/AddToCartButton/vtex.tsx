import { useCart } from "apps/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";
import { useState } from "preact/hooks";

export interface Props extends Omit<BtnProps, "onAddItem"> {
  seller: string;
  productID: string;
  category: string;
}

function AddToCartButton({ seller, productID, category, eventParams }: Props) {
  const { addItems } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>("");

  const onAddItem = () =>
    addItems({
      orderItems: [{
        id: productID,
        seller: seller,
        quantity: 1,
      }],
    });

  return (
    <>
      {/* <p>{category}</p> */}

      {
        /* {category === "Anéis" && (
        <select name="" id="">
          <option value="">Teste 1</option>
          <option value="">Teste 2</option>
          <option value="">Teste 3</option>
        </select>
      )} */
      }

      <Button onAddItem={onAddItem} eventParams={eventParams} />
    </>
  );
}

export default AddToCartButton;
