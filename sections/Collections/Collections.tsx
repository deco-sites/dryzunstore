import type { ImageWidget } from "apps/admin/widgets.ts";
import type { Product } from "apps/commerce/types.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

import { usePlatform } from "../../sdk/usePlatform.tsx";

export interface Props {
  /** @description Banner Mobile */
  mobile?: ImageWidget;

  /** @description Banner Desktop */
  desktop?: ImageWidget;

  /** @description Adicione uma Descrição */
  description?: string;

  /** @description Coleção de Produtos */
  products?: Product[] | null;

  /** @description URL da coleção */
  link?: string;
}

function Collections(props: Props) {
  // console.log({ props })

  const platform = usePlatform();

  return (
    <>
      <div className="container-2">

        <Picture preload={true}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={"auto"}
            src={props?.mobile || ""}
            width={430}
          />

          <Source
            media="(min-width: 768px)"
            fetchPriority={"auto"}
            src={props?.desktop || ""}
            width={1440}
          />

          <img
            class="object-cover w-full h-full"
            loading={"lazy"}
            src={props?.desktop}
          />
        </Picture>

        <p class="text-[#666461] text-center text-base not-italic font-normal leading-[normal] tracking-[0.8px] px-0 py-8">
          {props.description}
        </p>

        <div>
          {props.products?.map((product, index) => {
            console.log("#####", product, index)

            return <> Teste </>
          })}
        </div>

        <div class="w-[225px] h-12 border block text-center mx-auto my-0 px-4 py-2.5 border-solid border-[#243959]">
          <a href={props.link} class="text-[#243959] text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase">
            ver coleção completa
          </a>
        </div>
      </div>
    </>
  );
}

export default Collections;
