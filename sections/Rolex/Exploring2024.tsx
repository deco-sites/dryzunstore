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
      alt: "rolex-keep-exploring-datejust",
      action: {
        label: "Rolex Datejust",
        href: "/rolex/datejust",
      },
      mobile:
        "https://assets.decocache.com/dryzunstore/d1b8149e-aeb2-43a4-a374-d39ecb454074/rolex-new-watches-2025-keep-exploring-datejust-31_m278288rbr-0041_2501stojan_001-portrait.jpg",
      desktop:
        "https://assets.decocache.com/dryzunstore/d6dd5439-8bd4-4b65-9924-01318542fde2/rolex-new-watches-2025-keep-exploring-datejust-31_m278288rbr-0041_2501stojan_001-landscape.jpg",
    },
    {
      alt: "rolex-keep-exploring-gmt-master-II",
      action: {
        label: "Rolex GMT-Master II",
        href: "/rolex/novos-modelos/rolex-gmt-master-ii",
      },
      mobile:
        "https://assets.decocache.com/dryzunstore/80ecfb90-9fb7-471b-9141-15b02366d10e/rolex-new-watches-2025-keep-exploring-gmt-master-ii_m126729vtnr-0001_2501stojan_001-portrait.jpg",
      desktop:
        "https://assets.decocache.com/dryzunstore/d4f3b817-0d52-44bd-9924-10468c4a0705/rolex-new-watches-2025-keep-exploring-gmt-master-ii_m126729vtnr-0001_2501stojan_001-landscape.jpg",
    },
    {
      alt: "rolex-keep-exploring-land-dweller",
      action: {
        label: "Land-Dweller",
        href: "/rolex/novos-modelos/rolex-land-dweller",
      },
      mobile:
        "https://assets.decocache.com/dryzunstore/9a1c2c4f-3499-4d9d-89f9-4b062cf880bf/rolex-new-watches-2025-keep-exploring-land-dweller_m127334-0001_2501fj_001-portrait.jpg",
      desktop:
        "https://assets.decocache.com/dryzunstore/406a74a0-cd25-43e6-9c3f-80f48b6e029c/rolex-new-watches-2025-keep-exploring-land-dweller_m127334-0001_2501fj_001-landscape.jpg",
    },
    {
      alt: "rolex-keep-exploring-mostradores-ineditos",
      action: {
        label: "Mostradores inéditos",
        href: "/rolex/mostradores-ineditos",
      },
      mobile:
        "https://assets.decocache.com/dryzunstore/17f9bc7f-ac51-4a24-8714-e75897cb5de4/rolex-new-watches-2025-keep-exploring-new-dials_m126518ln-0014_2501stojan_001-portrait.jpg",
      desktop:
        "https://assets.decocache.com/dryzunstore/6aaaec6d-cb32-41d2-82a3-ab8372c5bdb3/rolex-new-watches-2025-keep-exploring-new-dials_m126518ln-0014_2501stojan_001-landscape.jpg",
    },
    {
      alt: "rolex-keep-exploring-oyster-perpetual",
      action: {
        label: "Rolex Oyster Perpetual",
        href: "/rolex/oyster-perpetual",
      },
      mobile:
        "https://assets.decocache.com/dryzunstore/c76b668c-ab8a-4724-8442-85a2f7d84896/rolex-new-watches-2025-keep-exploring-oyster-perpetual_m276200-0008_2501stojan_001-portrait.jpg",
      desktop:
        "https://assets.decocache.com/dryzunstore/3f88b339-a765-4144-b92e-c14c34d00fea/rolex-new-watches-2025-keep-exploring-oyster-perpetual_m276200-0008_2501stojan_001-landscape.jpg",
    },
    {
      alt: "rolex-keep-exploring-1908",
      action: {
        label: "Rolex 1908",
        href: "/rolex/novos-modelos/rolex-1908",
      },
      mobile:
        "https://assets.decocache.com/dryzunstore/2870bd47-1d3f-4489-a04c-77ef02f1ab6d/rolex-new-watches-2025-keep-exploring-perpetual-1908_m52508-0008_2501stojan_001-portrait.jpg",
      desktop:
        "https://assets.decocache.com/dryzunstore/e151c404-cfd4-44e1-89f4-0b7607603f6c/rolex-new-watches-2025-keep-exploring-perpetual-1908_m52508-0008_2501stojan_001-landscape.jpg",
    },
  ],
  preload: true,
};

function BannerItem(
  { image, lcp, id }: { image: Banner; lcp?: boolean; id: string },
) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

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
            class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
      </div>

      {action && (
        <span class="w-full flex mt-2 body20 text-[#452c1e] hover:text-[#127749]">
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
                  class="w-[20px] h-[4px] rounded group-disabled:w-[50px] transition-[width] ease-out duration-[400ms] group-disabled:bg-[#127749] bg-[#EBEBEB]"
                  style={{ animationDuration: `${interval}s` }}
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
      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2 absolute translate-y-[-50px] left-[-5%] md:left-[-7%] xxl:left-[-6%] text-[#452c1e]">
        <Slider.PrevButton class="w-[44px] min-h-[44px] h-[44px] btn btn-circle border-0 disabled:hidden hover:bg-[#f3f3f380] bg-[#d4d4d44d]">
          <Icon
            style="transform: rotate(180deg)"
            size={40}
            id="ChevronLeft2"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden md:flex items-center justify-center z-10 col-start-3 row-start-2 absolute translate-y-[-50px] right-[-5%] md:right-[-7%] xxl:right-[-6%] text-[#452c1e]">
        <Slider.NextButton class="w-[44px] min-h-[44px] h-[44px] btn btn-circle border-0 disabled:hidden hover:bg-[#f3f3f380] bg-[#d4d4d44d]">
          <Icon
            size={44}
            id="ChevronRight2"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function Exploring2024(props: Props) {
  const id = useId();
  const { images, preload, interval } = {
    ...DEFAULT_PROPS,
    ...{ interval: 10 },
  };

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
                  class="flex flex-col gap-4 carousel-item w-[48%] md:w-keep-width"
                >
                  <BannerItem
                    image={image}
                    lcp={index === 0 && preload}
                    id={`${id}::${index}`}
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

export default Exploring2024;
