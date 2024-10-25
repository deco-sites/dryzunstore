import type { ImageWidget } from "apps/admin/widgets.ts";

/*** @titleBy titulo */
interface Item {
  imagem?: ImageWidget;
  titulo?: string;
  /** @description Somente números */
  /** @format number */
  larguraDaImagem?: number;
  link?: string;
}

export interface Props {
  titulo?: string;
  quantidade?: 6 | 8;
  items?: Item[];
  bordaDosItens?: boolean;
  mostrarTituloDosItens?: boolean;
  /** @description é H1? */
  isH1?: boolean;
}

export default function BannerList(
  { titulo, mostrarTituloDosItens, isH1, quantidade, items, bordaDosItens }:
    Props,
) {
  return (
    <div class="container-2 py-8">
      {isH1
        ? (
          <h1 class="text-2xl text-center not-italic font-normal leading-[normal] tracking-[1.2px] text-[#333] mb-5">
            {titulo}
          </h1>
        )
        : (
          <h3 class="text-2xl text-center not-italic font-normal leading-[normal] tracking-[1.2px] text-[#333] mb-5">
            {titulo}
          </h3>
        )}
      <ul
        class={`flex flex-wrap justify-center gap-2`}
      >
        {items &&
          items?.map((item: Item) => (
            <li
              class={`flex items-center justify-center w-[48%] ${
                quantidade === 6 ? "md:w-[16%]" : "md:w-[12%]"
              }`}
            >
              <a
                class="flex flex-col items=center justify-center gap-2 mb-4 md:mb-0"
                href={item?.link}
              >
                <img
                  src={item?.imagem ?? ""}
                  class={`${
                    !item?.larguraDaImagem && "w-full"
                  } h-auto border-solid border-[#F5F3F0] ${
                    bordaDosItens ? "border" : "border-none"
                  }`}
                  alt={item?.titulo}
                  width={item?.larguraDaImagem ?? 200}
                  height={item?.larguraDaImagem ?? 200}
                  loading="lazy"
                />
                {mostrarTituloDosItens && (
                  <h4 class="text-[13px] text-center not-italic font-medium leading-[normal] tracking-[1.3px] text-[#333]">
                    {item?.titulo}
                  </h4>
                )}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
