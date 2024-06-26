import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

import {
  SendEventOnClick,
  SendEventOnView,
} from "../../components/Analytics.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Button label */
    label: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: "rolex-keep-exploring-1",
      action: {
        label: "Descubra a Rolex",
        href: "/rolex/descubra",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-1.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-1.jpg",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "Relógios Rolex",
        href: "/rolex/relogios-rolex",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-2.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-2.jpg",
    },
    {
      alt: "rolex-keep-exploring-3",
      action: {
        label: "Novos modelos 2024",
        href: "/rolex/novos-modelos",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-3.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-3.jpg",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "A arte da Relojoaria",
        href: "/rolex/a-arte-da-relojoaria",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-4.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/rolex-keep-exploring-4.jpg",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "Manutenção",
        href: "/rolex/manutencao",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/3a7562ef-9550-4e34-acad-cfdc30b6e41b",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/3a7562ef-9550-4e34-acad-cfdc30b6e41b",
    },
    {
      alt: "Contato",
      action: {
        label: "Contato",
        href: "/rolex/contato-sao-paulo",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/fe4498dd-7a59-4fb1-bcf6-92dccc71d3cd",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/fe4498dd-7a59-4fb1-bcf6-92dccc71d3cd",
    },
  ],
  preload: true,
};

function BannerItem(
  { image, lcp, id, current }: { image: Banner; lcp?: boolean; id: string, current: string },
) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  //console.log('current', current);

  return (
    <a
      id={id}
      href={action?.href ?? "#"}
      aria-label={action?.label}
      class="w-full flex flex-col items-center"
    >
      <div className="w-full overflow-hidden">
        <Picture class="w-full" preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            width={780}
            height={520}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            width={780}
            height={520}
          />
          <img
            class={`object-cover w-full h-full ${current != action?.href && 'hover:scale-110'} duration-[850ms]`}
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
      </div>

      {action && (
        <span class={`euu w-full flex mt-2 body20 hover:text-[#127749] ${current == action?.href ? 'text-[#127749]' : 'text-[#452c1e]'}`}>
          {action.label}
        </span>
      )}
    </a>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @property --dot-progress {
              syntax: '<percentage>';
              inherits: false;
              initial-value: 0%;
            }
            `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-3 z-10 row-start-4 mt-4">
        {images?.map((_, index) => (
          <li class="carousel-item hidden itemDotsKeep">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="rounded group-disabled:w-[50px] transition-[width] ease-out duration-[400ms] group-disabled:bg-[#127749] bg-[#EBEBEB] w-[20px] h-[4px]"
                  
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2 absolute translate-y-[-50px] left-[-5%] md:left-[-55px] text-[#452c1e]">
        <Slider.PrevButton class="btn btn-circle border-0 disabled:hidden bg-[#f9f7f4]">
          <Icon
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden md:flex items-center justify-center z-10 col-start-3 row-start-2 absolute translate-y-[-50px] right-[-5%] md:right-[-55px] text-[#452c1e]">
        <Slider.NextButton class="btn btn-circle border-0 disabled:hidden bg-[#f9f7f4]">
          <Icon
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function Exploring(props: Props) {
  const id = useId();
  const { images, preload, interval } = { ...DEFAULT_PROPS, ...props };

  const pathname = window.location.pathname;

  return (
    <div class="w-full py-[60px] md:py-[90px] bg-white">
      <div class="rolex-container">
        <h2 class="headline36 text-[#452c1e] mb-4">Descubra muito mais</h2>
        <div
          id={id}
          class="w-full flex items-center justify-center flex-col relative"
        >
          <Slider class="carousel carousel-start gap-2 row-start-2 row-end-5 w-full">
            {images?.map((image, index) => {
              const params = { promotion_name: image.alt };
              return (
                <Slider.Item
                  index={index}
                  class="flex flex-col gap-4 carousel-item w-[48%] md:w-[25%]"
                >
                  <BannerItem
                    image={image}
                    lcp={index === 0 && preload}
                    id={`${id}::${index}`}
                    current={pathname}
                  />
                  <SendEventOnClick
                    id={`${id}::${index}`}
                    event={{ name: "select_promotion", params }}
                  />
                  <SendEventOnView
                    id={`${id}::${index}`}
                    event={{ name: "view_promotion", params }}
                  />
                </Slider.Item>
              );
            })}
          </Slider>

          <Buttons />

          <Dots images={images} interval={interval} />

          <Slider.JS
            rootId={id}
            interval={interval && interval * 1e3}
          />
        </div>
      </div>
    </div>
  );
}

export default Exploring;
