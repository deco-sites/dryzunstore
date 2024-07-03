import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";

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
  /** @description Ocupar 100% container */
  full?: boolean;
  /** @description Exibir botão saiba mais */
  knowMore?: boolean;
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
    <div
      id={id}
      class="rolex-container bg-rolex-3 py-[60px] md:py-[90px] flex flex-wrap justify-start gap-[60px_5px] md:gap-[90px_5px]"
    >
      {items?.map((item) => {
        return (
          <a
            class={`w-full ${item.full ? "md:w-full" : "md:max-w-[49.5%]"
              } flex items-start flex-col`}
            href={item.action?.href}
          >
            <div className="w-full overflow-hidden">
              <img
                class="w-full hidden md:block hover:scale-110 duration-[650ms] "
                src={item.desktop}
                alt={item.alt}
              />
              <img
                class="w-full md:hidden hover:scale-110 duration-[650ms]"
                src={item.mobile}
                alt={item.alt}
              />
            </div>
            {
              item.action?.subTitle && <p class="test24 mt-5 fixed16 text-[#452c1e]">
                {item.action?.subTitle}
              </p>
            }

            <h3 class="mt-1 headline36 text-[#452c1e]">{item.action?.title}</h3>
            {item.knowMore && (
              <span class="secondary-cta justify-start">
                Saiba mais
                <Icon
                  class=""
                  size={22}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}

export default GalleryMini;
