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
      alt: "Day-date",
      action: {
        label: "Day-Date",
        href: "/rolex/day-date",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-day-date.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-day-date.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Datejust",
      action: {
        label: "Datejust",
        href: "/rolex/datejust",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-datejust.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-datejust.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Lady-Datejust",
      action: {
        label: "Lady-Datejust",
        href: "/rolex/lady-datejust",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-lady-datejust.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-lady-datejust.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Sky-Dweller",
      action: {
        label: "Sky-Dweller",
        href: "/rolex/sky-dweller",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-sky-dweller.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-sky-dweller.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Oyster Perpetual",
      action: {
        label: "Oyster Perpetual",
        href: "/rolex/oyster-perpetual",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-oyster-perpetual.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-oyster-perpetual.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Air-King",
      action: {
        label: "Air-King",
        href: "/rolex/air-king",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-air-king.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-air-king.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "GMT-Master II",
      action: {
        label: "GMT-Master II",
        href: "/rolex/gmt-master-ii",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-gmt-master-II.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-gmt-master-II.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Sea-Dweller",
      action: {
        label: "Sea-Dweller",
        href: "/rolex/sea-dweller",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-sea-dweller.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-sea-dweller.jpg&fit=cover&width=1620&height=1080",
    },


    {
      alt: "Submariner",
      action: {
        label: "Submariner",
        href: "/rolex/submariner",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-submariner.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-submariner.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Cosmograph Daytona",
      action: {
        label: "Cosmograph Daytona",
        href: "/rolex/cosmograph-daytona",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-cosmograph-daytona.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-cosmograph-daytona.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Yacht-Master",
      action: {
        label: "Yacht-Master",
        href: "/rolex/yacht-master",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-yacht-master.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-yacht-master.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Explorer",
      action: {
        label: "Explorer",
        href: "/rolex/exporer",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-explorer.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-explorer.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "Deepsea",
      action: {
        label: "Deepsea",
        href: "/rolex/deepsea",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-deepsea.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-deepsea.jpg&fit=cover&width=1620&height=1080",
    },
    {
      alt: "1908",
      action: {
        label: "1908",
        href: "/rolex/perpetual-1908",
      },
      mobile:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-1908.jpg&fit=cover&width=1620&height=1080",
      desktop:
        "https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdryzun.vteximg.com.br%2Farquivos%2Frolex-watches-1908.jpg&fit=cover&width=1620&height=1080",
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
          class="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>

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
      <ul class="carousel justify-center col-span-full gap-6 z-10 row-start-4 mt-4">
        {images?.map((_, index) => (
          <li class="carousel-item hidden itemDotsKeep">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-[20px] h-[3px] rounded group-disabled:w-[40px] group-disabled:bg-[#127749] bg-[#EBEBEB]"
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
      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2 absolute left-[-5%] md:left-[-55px] text-[#452c1e]">
        <Slider.PrevButton class="btn btn-circle glass bg-[#f9f7f4]">
          <Icon
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden md:flex items-center justify-center z-10 col-start-3 row-start-2 absolute right-[-5%] md:right-[-55px] text-[#452c1e]">
        <Slider.NextButton class="btn btn-circle glass bg-[#f9f7f4]">
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

function Exploring2024(props: Props) {
  const id = useId();
  const { images, preload, interval } = { ...DEFAULT_PROPS, ...props };

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
            infinite
          />
        </div>
      </div>
    </div>
  );
}

export default Exploring2024;
