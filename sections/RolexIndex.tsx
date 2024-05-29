import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

import Exploring from "./Rolex/Exploring.tsx";
import Footer from "../sections/Rolex/BackToTopRolex.tsx";

import { SendEventOnClick, SendEventOnView } from "../components/Analytics.tsx";
import Button from "../components/ui/Button.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

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
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
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
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: "rolex",
      action: {
        title: "Rolex",
        subTitle: "New watches 2024",
        label: "Discover",
        href: "/",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/discover-rolex-new-watches-2024-M126710GRNR-0003_2401jva_002_rvb.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/discover-rolex-new-watches-2024-M126710GRNR-0003_2401jva_002_rvb.jpg",
    },
    {
      alt: "/Rolex",
      action: {
        title: "Rolex",
        subTitle: "New watches 2024",
        label: "Discover",
        href: "/",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/discover-rolex-new-watches-2024-M126710GRNR-0003_2401jva_002_rvb.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/discover-rolex-new-watches-2024-M126710GRNR-0003_2401jva_002_rvb.jpg",
    },
    {
      alt: "/Rolex",
      action: {
        title: "Rolex",
        subTitle: "New watches 2024",
        label: "Discover",
        href: "/",
      },
      mobile:
        "https://dryzun.vteximg.com.br/arquivos/discover-rolex-new-watches-2024-M126710GRNR-0003_2401jva_002_rvb.jpg",
      desktop:
        "https://dryzun.vteximg.com.br/arquivos/discover-rolex-new-watches-2024-M126710GRNR-0003_2401jva_002_rvb.jpg",
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
      class="relative overflow-y-hidden w-full block md:flex items-center"
    >
      {action && (
        <div class="absolute right-0 max-md:bottom-[5%] w-[45%] max-md:w-[100%] flex flex-col justify-end gap-4 px-8 py-12">
          <span class="headline26 text-base-100">
            {action.title}
          </span>
          <span class="headline70 text-base-100">
            {action.subTitle}
          </span>
          <Button
            class="primary-cta bg-rolex-1 w-fit hover:bg-rolex-1"
            aria-label={action.label}
          >
            {action.label}
          </Button>
        </div>
      )}
      <Picture class="w-full" preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={780}
          height={1050}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={2880}
          height={1050}
        />
        <img
          class="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
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
      <ul class="carousel justify-center col-span-full gap-6 z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-[34px] h-[3px] group-disabled:w-[100px] rounded bg-[#EBEBEB]"
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
      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden md:flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function RolexIndex(props: Props) {
  const id = useId();
  const { images, preload, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <>    
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] sm:min-h-min min-h-[660px]"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
          {images?.map((image, index) => {
            const params = { promotion_name: image.alt };
            return (
              <Slider.Item index={index} class="carousel-item w-full">
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

        {props.arrows && <Buttons />}

        {props.dots && <Dots images={images} interval={interval} />}

        <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
      </div>
      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container flex justify-between items-center max-md:flex-col">
          <div class="w-full md:w-[45%]">
            <h1 class="headline50 text-[#452c1e]">
              Bem-vindo ao Dryzun Distribuidor oficial Rolex em
              São Paulo
            </h1>
          </div>
          <div class="w-full md:w-[50%]">
            <p class="body20-ligth text-[#212121]">
              <b>
                A Dryzun tem orgulho em fazer parte da rede
                mundial de distribuidores oficiais Rolex
              </b>, autorizados a vender e a realizar a manutenção dos relógios
              Rolex.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container">
          <h5 class="headline36 text-[#452c1e] text-left mb-5">
            Rolex watches
          </h5>
          <Picture preload={false}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"auto"}
              src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-portrait.jpg"
              width={430}
              height={590}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"auto"}
              src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watches-m126333_0010_1802jva_002.jpg.jpg"
              width={2400}
              height={800}
            />
            <img
              class="object-cover w-full h-full"
              loading={"lazy"}
              src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watches-m126333_0010_1802jva_002.jpg.jpg"
              alt="rolex watches"
            />
          </Picture>
        </div>
      </section>

      <section class="bg-rolex-3 pt-4">
        <div class="rolex-container">
          <p class="fixed16 text-[#452c1e] text-left mb-2">Relógios Rolex</p>
          <h5 class="headline36 text-[#452c1e] text-left">
            Encontre o seu Rolex Descubra a coleção Rolex
          </h5>
          <a class="secondary-cta justify-start" href="/rolex/watches">
            Saiba mais{" "}
            <Icon
              class=""
              size={22}
              id="ChevronRight"
              strokeWidth={3}
            />
          </a>
        </div>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container">
          <h5 class="headline36 text-[#452c1e] text-left mb-5">Contato</h5>
          <Picture preload={false}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"auto"}
              src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-appointment-push-a7404009-portrait.jpg?v=123"
              width={430}
              height={590}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"auto"}
              src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-appointment-push-a7404009.jpg"
              width={2400}
              height={800}
            />
            <img
              class="object-cover w-full h-full"
              loading={"lazy"}
              src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-appointment-push-a7404009.jpg"
              alt="rolex watches"
            />
          </Picture>
        </div>
      </section>

      <section class="bg-rolex-3 pt-4">
        <div class="rolex-container">
          <h5 class="headline36 text-[#452c1e] text-left">
          Entre em contato
          </h5>
          <a class="secondary-cta justify-start" href="/rolex/contato">
          Entrar em contato{" "}
            <Icon
              class=""
              size={22}
              id="ChevronRight"
              strokeWidth={3}
            />
          </a>
        </div>
      </section>

      <section class="bg-rolex-3 py-[60px] md:py-[90px]">
        <div class="rolex-container">
          <h5 class="headline36 text-[#452c1e] text-left mb-5">
            Descubra a Rolex
          </h5>
          <div class="flex flex-wrap items-center justify-between">
            <div class="w-full md:w-[33%] max-md:mb-5">
              <img
                alt="Descuba a Rolex"
                class="md:hidden"
                src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-wor-aach23an_2655_c-portrait.jpg"
              />
              <img
                alt="Descuba a Rolex"
                class="max-md:hidden"
                src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-wor-aach23an_2655_c.jpg"
              />
              <p class="legend16 text-[#452c1e] mt-3">
                Compromisso com a excelência
              </p>
              <h4 class="body24 text-[#452c1e]">O mundo Rolex</h4>
              <a class="secondary-cta justify-start" href="/rolex/o-mundo-rolex">
                Saiba mais
                <Icon
                  class=""
                  size={20}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </a>
            </div>
            <div class="w-full md:w-[33%] max-md:mb-5">
              <img
                alt="Descuba a Rolex"
                class="md:hidden"
                src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watchmaking-dial-mob.jpg"
              />
              <img
                alt="Descuba a Rolex"
                class="max-md:hidden"
                src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watchmaking-b460356_rolex_mp_olv_watchmaking_manifesto_d_9x16_en-gb_75_25p_pp002.jpg"
              />
              <p class="legend16 text-[#452c1e] mt-3">Excelência no ofício</p>
              <h4 class="body24 text-[#452c1e]">A arte da relojoaria</h4>
              <a class="secondary-cta justify-start" href="/rolex/a-arte-da-relojoaria">
                Saiba mais
                <Icon
                  class=""
                  size={20}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </a>
            </div>
            <div class="w-full md:w-[33%] max-md:mb-5">
              <img
                alt="Descuba a Rolex"
                class="md:hidden"
                src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-servicing-2-sav1910dh_005c-portrait.jpg"
              />
              <img
                alt="Descuba a Rolex"
                class="max-md:hidden"
                src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-servicing-2-sav1910dh_005c.jpg"
              />
              <p class="legend16 text-[#452c1e] mt-3">
                A filosofia da manutenção Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Manutenção</h4>
              <a class="secondary-cta justify-start" href="/rolex/manutencao">
                Saiba mais
                <Icon
                  class=""
                  size={20}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Exploring />
      <Footer />
    </>
  );
}

export default RolexIndex;
