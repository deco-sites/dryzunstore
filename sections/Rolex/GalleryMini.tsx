import type { ImageWidget } from "apps/admin/widgets.ts";

import { useId } from "../../sdk/useId.ts";

/**
 * @titleBy Mini Banner
 */
export interface Item {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description link */
    href: string;
    /** @title Sub Titulo */
    subTitle: string;
    /** @title Titulo */
    title: string;
  };
}

export interface Props {
  items?: Item[];
}

function GalleryMini(props: Props) {
  const id = useId();
  const { items } = { ...props };

  return (
    <div id={id} class="rolex-container bg-rolex-3 py-[60px] md:py-[90px] flex flex-wrap justify-start gap-[60px_5px] md:gap-[90px_5px]">
      {items?.map((item, index) => {
        return (
          <a id={index} class="w-full md:max-w-[49.5%] flex items-start flex-col" href={item.action?.href}>
            <img class="hidden md:block" src={item.desktop} alt={item.alt} />
            <img class="md:hidden" src={item.mobile} alt={item.alt} />
            <p class="mt-5 fixed16 text-[#452c1e]">Novos modelos 2024</p>
            <h3 class="mt-1 headline36 text-[#452c1e]">{item.action?.title}</h3>
          </a>
        );
      })}

    </div>
  );
}

export default GalleryMini;
