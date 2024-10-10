import { useState } from "preact/hooks";
import { useUI } from "../../../sdk/useUI.ts";
import { useCart } from "apps/vtex/hooks/useCart.ts";
import { formatPrice } from "../../../sdk/format.ts";
import { useOffer } from "../../../sdk/useOffer.ts";

import Installments from "../../../islands/Installments.tsx";

interface Props {
  product: any;
}

function BuyButtonCustom({ product }: Props) {
  const [maxLetters, setMaxLetters] = useState("max4");
  const [inputValue, setInputValue] = useState("");

  const { cart, addItems, addItemAttachment } = useCart();
  const { items } = cart.value ?? { items: [] };

  const { displayCart } = useUI();

  const {
    productID,
    offers,
    brand,
  } = product;

  const isTudor = brand?.name == "Tudor";
  const { listPrice, price } = useOffer(offers);

  const changeOption = (str: string) => {
    setInputValue("");
    setMaxLetters(str);
  };

  const handleChange = (event: any) => {
    setInputValue(event?.target?.value);
  };

  const addToCart = () => {
    addItems({
      orderItems: [{
        id: productID,
        seller: "1",
        quantity: 1,
      }],
    }).then(() => {
      displayCart.value = true;

      var indexCurrent = items.findIndex((item: any) => item.id === productID);
      const index = indexCurrent >= 0 ? indexCurrent : items.length;

      addItemAttachment({
        index: index,
        attachment: "personalizacaoColar",
        content: {
          "quatroletras": maxLetters == "max4" ? inputValue : "",
          "cincoasete": maxLetters == "max7" ? inputValue : "",
        },
      });
    });
  };

  return (
    <>
      <div class="mt-2 text-[22px] not-italic font-normal leading-[normal] text-[#333]">
        {maxLetters == "max4"
          ? formatPrice(price, offers?.priceCurrency)
          : formatPrice(listPrice + 540, offers?.priceCurrency)}
      </div>

      <div class="text-[13px] not-italic font-normal leading-[normal] tracking-[0.65px] text-[#666461]">
        <Installments isTudor={isTudor} productID={productID} />
      </div>

      <div class="w-full bg-[#F5F5F5] p-5 mb-5 flex flex-col gap-4">
        <div class="flex flex-col">
          <span
            onClick={() => changeOption("max4")}
            class="flex items-center mb-2 text-[#333] text-xs font-normal"
          >
            <div class="mr-2 cursor-pointer w-[18px] h-[18px] rounded-[99px] border border-[#81A1D4] flex items-center justify-center">
              {maxLetters === "max4" && (
                <div class="w-2.5 h-2.5 bg-[#81A1D4] rounded-[99px]"></div>
              )}
            </div>
            <b class="mr-2">Até 4 letras</b> Sem acréscimo no valor
          </span>
          {maxLetters === "max4" && (
            <input
              onChange={handleChange}
              value={inputValue}
              maxLength={4}
              class="ml-6 focus:outline-0 placeholder:opacity-40 text-[#333] text-sm font-normal w-[200px] h-10 px-4 py-2.5 bg-white border border-[#E0E0E0] justify-start items-center gap-2.5 inline-flex"
              type="text"
              name="ate4letras"
              id=""
            />
          )}
        </div>
        <div class="flex flex-col">
          <span
            onClick={() => changeOption("max7")}
            class="flex items-center mb-2 text-[#333] text-xs font-normal"
          >
            <div class="mr-2 cursor-pointer w-[18px] h-[18px] rounded-[99px] border border-[#81A1D4] flex items-center justify-center">
              {maxLetters === "max7" && (
                <div class="w-2.5 h-2.5 bg-[#81A1D4] rounded-[99px]"></div>
              )}
            </div>
            <b class="mr-2">5 a 7 letras</b> Com acréscimo no valor
          </span>
          {maxLetters === "max7" && (
            <input
              onChange={handleChange}
              value={inputValue}
              maxLength={7}
              class="ml-6 focus:outline-0 placeholder:opacity-40 text-[#333] text-sm font-normal w-[200px] h-10 px-4 py-2.5 bg-white border border-[#E0E0E0] justify-start items-center gap-2.5 inline-flex"
              type="text"
              name="de5a7letras"
              id=""
            />
          )}
        </div>
      </div>

      <div class="w-full flex flex-wrap justify-start items-center py-2">
        <span class="flex items-center mr-10 max-md:mb-4 text-[13px] not-italic font-semibold leading-[normal] text-[#597CB2]">
          <svg
            class="mr-1"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1.54248C0.5 0.72998 1.15625 0.0424805 2 0.0737305H6.65625C7.1875 0.0737305 7.6875 0.26123 8.0625 0.63623L13.5625 6.13623C14.3438 6.91748 14.3438 8.19873 13.5625 8.97998L9.40625 13.1362C8.625 13.9175 7.34375 13.9175 6.5625 13.1362L1.0625 7.63623C0.6875 7.26123 0.5 6.76123 0.5 6.22998V1.54248ZM4 2.54248C3.4375 2.54248 3 3.01123 3 3.54248C3 4.10498 3.4375 4.54248 4 4.54248C4.53125 4.54248 5 4.10498 5 3.54248C5 3.01123 4.53125 2.54248 4 2.54248Z"
              fill="#597CB2"
            />
          </svg>

          10%OFF pagando à vista
        </span>
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
          Ganhe {formatPrice(price! * 0.10, offers?.priceCurrency)} de Cashback
        </span>
      </div>

      <button
        disabled={!inputValue}
        onClick={() => addToCart()}
        type="button"
        class={`${
          !inputValue &&
          "disabled:bg-[#f5f5f5] hover:bg-[#f5f5f5] disabledtext-[#999]"
        } mt-5 btn no-animation rounded-none btn shadow-none border-0 bg-[#B4CBF0] hover:bg-[#81A1D4] transition-[0.3s] hover:text-white flex h-12 justify-center items-center gap-2.5 self-stretch px-4 py-2.5 text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase text-[#243959]`}
      >
        comprar
      </button>
      {!inputValue && (
        <p class="mb-4 mt-2 text-[#C50000] text-[13px] font-normal">
          Adicione o texto personalizado
        </p>
      )}
    </>
  );
}

export default BuyButtonCustom;
