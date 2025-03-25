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
      {(category === "Anéis" ||
        category === "Casamento>Alianças") && (
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
        />
      )}

      {!SHOW_SELECT_ATTACHMENT && (
        <Button
          onAddItem={onAddItem}
          eventParams={eventParams}
          buttonDisabled={false}
        />
      )}

      <button
        onClick={() => {
          const modal = document.getElementById("size-guide");
          if (modal) modal.style.display = "block";
        }}
        class="text-[13px] not-italic font-normal leading-[normal] text-[#597CB2] hover:text-[#81A1D4] transition-[0.3s] mt-2"
      >
        Ver guia de tamanhos
      </button>

      <div class="modal" id="size-guide">
        <div class="modal-content">
          <h3 class="text-lg font-medium mb-4">Guia de Tamanhos</h3>

          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="border p-2">Diâmetro (mm)</th>
                <th class="border p-2">Tamanho Brasil</th>
                <th class="border p-2">Tamanho EUA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">15.7</td>
                <td class="border p-2">12</td>
                <td class="border p-2">5</td>
              </tr>
              <tr>
                <td class="border p-2">16.1</td>
                <td class="border p-2">13</td>
                <td class="border p-2">6</td>
              </tr>
              <tr>
                <td class="border p-2">16.5</td>
                <td class="border p-2">14</td>
                <td class="border p-2">7</td>
              </tr>
              <tr>
                <td class="border p-2">16.9</td>
                <td class="border p-2">15</td>
                <td class="border p-2">7.5</td>
              </tr>
            </tbody>
          </table>

          <button
            class="mt-4 px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => {
              const modal = document.getElementById("size-guide");
              if (modal) modal.style.display = "none";
            }}
          >
            Fechar
          </button>
        </div>
      </div>

      <style>
        {`
          .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 100;
          }

          .modal-content {
            background: white;
            padding: 20px;
            width: 90%;
            max-width: 500px;
            margin: 50px auto;
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
}

export default AddToCartButton;
