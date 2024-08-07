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
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/da022b73-ea80-46fc-9fb7-24372ae0fd8e",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/da022b73-ea80-46fc-9fb7-24372ae0fd8e",
    },
    {
      alt: "Datejust",
      action: {
        label: "Datejust",
        href: "/rolex/datejust",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/8e944309-5288-45f5-9f69-daa0e2a46bb6",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/8e944309-5288-45f5-9f69-daa0e2a46bb6",
    },
    {
      alt: "Lady-Datejust",
      action: {
        label: "Lady-Datejust",
        href: "/rolex/lady-datejust",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/a209c093-b0e0-4d7f-9694-394bdb48cddf",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/a209c093-b0e0-4d7f-9694-394bdb48cddf",
    },
    {
      alt: "Sky-Dweller",
      action: {
        label: "Sky-Dweller",
        href: "/rolex/sky-dweller",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/96804433-82e8-45b0-9794-458cc1cf16ad",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/96804433-82e8-45b0-9794-458cc1cf16ad",
    },
    {
      alt: "Oyster Perpetual",
      action: {
        label: "Oyster Perpetual",
        href: "/rolex/oyster-perpetual",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c3feaed6-071e-4ddd-8d32-53071c7fc5bb",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c3feaed6-071e-4ddd-8d32-53071c7fc5bb",
    },
    {
      alt: "Air-King",
      action: {
        label: "Air-King",
        href: "/rolex/air-king",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/2c30fdc8-12d2-4fbd-973d-18ab79e7085d",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/2c30fdc8-12d2-4fbd-973d-18ab79e7085d",
    },
    {
      alt: "GMT-Master II",
      action: {
        label: "GMT-Master II",
        href: "/rolex/gmt-master-ii",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/54cf5be7-1e74-40f4-8703-576be89a9c31",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/54cf5be7-1e74-40f4-8703-576be89a9c31",
    },
    {
      alt: "Sea-Dweller",
      action: {
        label: "Sea-Dweller",
        href: "/rolex/sea-dweller",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b4516551-b364-477d-83eb-a56fda01dcd0",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b4516551-b364-477d-83eb-a56fda01dcd0",
    },

    {
      alt: "Submariner",
      action: {
        label: "Submariner",
        href: "/rolex/submariner",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/d19ad223-d348-4599-a60f-7b2c83ebf3d6",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/d19ad223-d348-4599-a60f-7b2c83ebf3d6",
    },
    {
      alt: "Cosmograph Daytona",
      action: {
        label: "Cosmograph Daytona",
        href: "/rolex/cosmograph-daytona",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/2322b599-27a1-4828-af0b-8ef70fec0c5b",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/2322b599-27a1-4828-af0b-8ef70fec0c5b",
    },
    {
      alt: "Yacht-Master",
      action: {
        label: "Yacht-Master",
        href: "/rolex/yacht-master",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/39d39191-8e2e-4cc4-8c39-06f2ed813a93",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/39d39191-8e2e-4cc4-8c39-06f2ed813a93",
    },
    {
      alt: "Explorer",
      action: {
        label: "Explorer",
        href: "/rolex/explorer",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/924e3703-27bf-4e97-b350-2790a9fc6e12",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/924e3703-27bf-4e97-b350-2790a9fc6e12",
    },
    {
      alt: "Deepsea",
      action: {
        label: "Deepsea",
        href: "/rolex/deepsea",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/6edc1fbb-9a36-456c-90fc-5aa6492c8790",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/6edc1fbb-9a36-456c-90fc-5aa6492c8790",
    },
    {
      alt: "1908",
      action: {
        label: "1908",
        href: "/rolex/perpetual-1908",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/a08261eb-e6d0-4882-82b9-0d17cf851604",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/a08261eb-e6d0-4882-82b9-0d17cf851604",
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
            size={44}
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
