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
        label: "Rolex GMT-Master II",
        href: "/rolex/novos-modelos/rolex-gmt-master-ii",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c4667e37-2034-4947-b70c-4c76cad46e9e",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c4667e37-2034-4947-b70c-4c76cad46e9e",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "Rolex Day-Date",
        href: "/rolex/novos-modelos/rolex-day-date",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/cf753c9c-ebc4-4733-818d-ac15bd8fdc6a",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/cf753c9c-ebc4-4733-818d-ac15bd8fdc6a",
    },
    {
      alt: "rolex-keep-exploring-3",
      action: {
        label: "Rolex 1908",
        href: "/rolex/novos-modelos/rolex-1908",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/7950a6cc-978e-446e-8f2c-10ee59460742",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/7950a6cc-978e-446e-8f2c-10ee59460742",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "Rolex Deepsea",
        href: "/rolex/novos-modelos/rolex-deepsea",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c4ec7d1a-b911-409a-93b6-443dbb146502",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c4ec7d1a-b911-409a-93b6-443dbb146502",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "Rolex Cosmopgrah Daytona",
        href: "/rolex/novos-modelos/rolex-cosmopgrah-daytona",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/9a211ea8-68d4-424f-864d-1c83eb59557d",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/9a211ea8-68d4-424f-864d-1c83eb59557d",
    },
    {
      alt: "rolex-keep-exploring-2",
      action: {
        label: "Rolex Sky-Dweller",
        href: "/rolex/novos-modelos/rolex-sky-dweller",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b9642564-9ad9-4541-9eb2-5117ca32ed35",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b9642564-9ad9-4541-9eb2-5117ca32ed35",
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
          />
        </div>
      </div>
    </div>
  );
}

export default Exploring2024;
