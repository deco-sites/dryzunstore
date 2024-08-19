import type { ImageWidget } from "apps/admin/widgets.ts";

import Exploring from "./Exploring.tsx";
import Footer from "../sections/Rolex/BackToTopRolex.tsx";

import { SendEventOnClick, SendEventOnView } from "../components/Analytics.tsx";
import Button from "../components/ui/Button.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useId } from "../sdk/useId.ts";

import type { ComponentChildren, JSX } from "preact";
import { scriptAsDataURI } from "apps/utils/dataURI.ts";

/**
 * @titleBy alt
 */
export interface BannerI {
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
    /** @format rich-text */
    title: string;
    /** @description Image text subtitle */
    /** @format rich-text */
    subTitle: string;
    /** @description Button label */
    label: string;
    /** @description Color text */
    color: "White" | "Black";
  };
}

export interface Props {
  images?: BannerI[];
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

export interface PropsI {
  rootId: string;
  scroll?: "smooth" | "auto";
  interval?: number;
  infinite?: boolean;
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

function RolexIndex(props: Props) {
  const id = useId();
  const { images, preload, interval } = { ...DEFAULT_PROPS, ...props };

  function BannerItem(
    { image, lcp, id }: { image: BannerI; lcp?: boolean; id: string },
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
          <div class="absolute right-0 max-md:bottom-[70px] w-[45%] md:pr-[15%] max-md:w-[100%] flex flex-col justify-end gap-4 px-8 pt-12">
            <span
              class={`headline26 ml-[2px] mb-[-1rem] ${
                action.color == "Black" ? "text-black" : "text-white"
              }`}
            >
              {action.title}
            </span>
            <span
              class={`headline70 ${
                action.color == "Black" ? "text-black" : "text-white"
              }`}
            >
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
          <img class="hidden md:block" src={desktop} alt={alt} />
          <img class="md:hidden" src={mobile} alt={alt} />
      </a>
    );
  }

  function Dots({ images, interval = 0 }: Props) {
    //const bgcolor = images[currentIndex]?.action?.color == "Black" ? "#452c1e" : "#fff";
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
        <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
          {images?.map((_, index) => (
            <li class="carousel-item">
              <Slider.Dot index={index}>
                <div class="py-5">
                  <div
                    class={`dots_custom w-[20px] h-[4px] group-disabled:w-[50px] rounded transition-[width] ease-out duration-[400ms] bg-[#fff]`}
                   
                  />
                </div>
              </Slider.Dot>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function Buttons({ images }: Props) {
    return (
      <>
        <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2">
          <Slider.PrevButton currentIndex={0} images={images}>
            <Icon
              size={18}
              id="ChevronLeft"
              strokeWidth={3}
            />
          </Slider.PrevButton>
        </div>
        <div class="hidden md:flex items-center justify-center z-10 col-start-3 row-start-2">
          <Slider.NextButton currentIndex={0} images={images}>
            <Icon
              size={24}
              id="ChevronRight"
              strokeWidth={4}
            />
          </Slider.NextButton>
        </div>
      </>
    );
  }

  function Dot({ index, children }: {
    index: number;
    children: ComponentChildren;
  }) {
    return (
      <button
        data-dot={index}
        aria-label={`go to slider item ${index}`}
        class="focus:outline-none group"
      >
        {children}
      </button>
    );
  }

  function Slider(props: JSX.IntrinsicElements["ul"]) {
    return <ul data-slider {...props} />;
  }

  function Item({
    index,
    ...props
  }: JSX.IntrinsicElements["li"] & { index: number }) {
    return <li data-slider-item={index} {...props} />;
  }

  function NextButton({ currentIndex, images, ...props }: any) {
    const currentImage = images[currentIndex];
    const colorClass = currentImage.action?.color === "Black"
      ? "text-[#452c1e] bg-[#d4d4d44d] hover:bg-[#f3f3f380]"
      : "text-white bg-[#7676764d] hover:bg-[#54545480]";

    return (
      <button
        class={`btn btn-circle w-10 max-h-10 min-h-[40px] border-0 disabled:hidden ${colorClass}`}
        data-slide="next"
        aria-label="Next item"
        data-current-index={currentIndex}
        {...props}
      />
    );
  }

  function PrevButton({ currentIndex, images, ...props }: any) {
    const currentImage = images[currentIndex];
    const colorClass = currentImage.action?.color === "Black"
      ? "text-[#452c1e] bg-[#d4d4d44d] hover:bg-[#f3f3f380]"
      : "text-white bg-[#7676764d] hover:bg-[#54545480]";

    return (
      <button
        class={`btn btn-circle w-10 max-h-10 min-h-[40px] bg-[#7676764d] hover:bg-[#54545480] border-0 disabled:hidden ${colorClass}`}
        data-slide="prev"
        aria-label="Previous item"
        data-current-index={currentIndex}
        {...props}
      />
    );
  }

  Slider.Dot = Dot;
  Slider.Item = Item;
  Slider.PrevButton = PrevButton;
  Slider.NextButton = NextButton;

  const setup = (
    { rootId, scroll, interval, infinite, images }: PropsI & {
      images: BannerI[];
    },
  ) => {
    const ATTRIBUTES = {
      "data-slider": "data-slider",
      "data-slider-item": "data-slider-item",
      'data-slide="prev"': 'data-slide="prev"',
      'data-slide="next"': 'data-slide="next"',
      "data-dot": "data-dot",
    };

    const THRESHOLD = 0.6;
    let currentIndex = 0;

    const updateCurrentIndex = (index: number, images: BannerI[]) => {
      currentIndex = index;
      const color = images[currentIndex]?.action?.color === "Black"
        ? "text-[#452c1e] bg-[#d4d4d44d] hover:bg-[#f3f3f380]"
        : "text-white bg-[#7676764d] hover:bg-[#54545480]";
      prev?.setAttribute("data-current-index", currentIndex.toString());
      next?.setAttribute("data-current-index", currentIndex.toString());
      prev?.setAttribute(
        "class",
        `btn btn-circle w-10 max-h-10 min-h-[40px] border-0 disabled:hidden ${color}`,
      );
      next?.setAttribute(
        "class",
        `btn btn-circle w-10 max-h-10 min-h-[40px] border-0 disabled:hidden ${color}`,
      );

      const bgcolor = images[currentIndex]?.action?.color == "Black"
        ? "#452c1e"
        : "#fff";
      const dotsList = document.querySelectorAll(".dots_custom");
      dotsList.forEach((dot: any) => {
        dot.style.backgroundColor = `${bgcolor}`;
      });
    };

    const intersectionX = (element: DOMRect, container: DOMRect): number => {
      const delta = container.width / 1_000;
      if (element.right < container.left - delta) {
        return 0.0;
      }
      if (element.left > container.right + delta) {
        return 0.0;
      }
      if (element.left < container.left - delta) {
        return element.right - container.left + delta;
      }
      if (element.right > container.right + delta) {
        return container.right - element.left + delta;
      }
      return element.width;
    };

    const isHTMLElement = (x: Element): x is HTMLElement =>
      typeof (x as any).offsetLeft === "number";

    const root = document.getElementById(rootId);
    const slider = root?.querySelector(`[${ATTRIBUTES["data-slider"]}]`);
    const items = root?.querySelectorAll(`[${ATTRIBUTES["data-slider-item"]}]`);
    const prev = root?.querySelector(`[${ATTRIBUTES['data-slide="prev"']}]`);
    const next = root?.querySelector(`[${ATTRIBUTES['data-slide="next"']}]`);
    const dots = root?.querySelectorAll(`[${ATTRIBUTES["data-dot"]}]`);

    if (!root || !slider || !items || items.length === 0) {
      console.warn(
        "Missing necessary slider attributes. It will not work as intended. Necessary elements:",
        { root, slider, items, rootId },
      );
      return;
    }

    const getElementsInsideContainer = () => {
      const indices: number[] = [];
      const sliderRect = slider.getBoundingClientRect();
      for (let index = 0; index < items.length; index++) {
        const item = items.item(index);
        const rect = item.getBoundingClientRect();
        const ratio = intersectionX(rect, sliderRect) / rect.width;
        if (ratio > THRESHOLD) {
          indices.push(index);
        }
      }
      return indices;
    };

    const goToItem = (index: number) => {
      const item = items.item(index);
      if (!isHTMLElement(item)) {
        console.warn(
          `Element at index ${index} is not an html element. Skipping carousel`,
        );
        return;
      }
      slider.scrollTo({
        top: 0,
        behavior: scroll,
        left: item.offsetLeft - root.offsetLeft,
      });
      updateCurrentIndex(index, images);
    };

    const onClickPrev = () => {
      const indices = getElementsInsideContainer();
      const itemsPerPage = indices.length;
      const isShowingFirst = indices[0] === 0;
      const pageIndex = Math.floor(indices[indices.length - 1] / itemsPerPage);
      const newIndex = isShowingFirst
        ? items.length - 1
        : (pageIndex - 1) * itemsPerPage;
      goToItem(newIndex);
    };

    const onClickNext = () => {
      const indices = getElementsInsideContainer();
      const itemsPerPage = indices.length;
      const isShowingLast = indices[indices.length - 1] === items.length - 1;
      const pageIndex = Math.floor(indices[0] / itemsPerPage);
      const newIndex = isShowingLast ? 0 : (pageIndex + 1) * itemsPerPage;
      goToItem(newIndex);
    };

    const initialIndices = getElementsInsideContainer();
    if (initialIndices.length > 0) {
      updateCurrentIndex(initialIndices[0], images);
    }

    const observer = new IntersectionObserver(
      (elements) =>
        elements.forEach((item) => {
          const index = Number(item.target.getAttribute("data-slider-item")) ||
            0;
          const dot = dots?.item(index);
          if (item.isIntersecting) {
            dot?.setAttribute("disabled", "");
          } else {
            dot?.removeAttribute("disabled");
          }
          if (!infinite) {
            if (index === 0) {
              if (item.isIntersecting) {
                prev?.setAttribute("disabled", "");
              } else {
                prev?.removeAttribute("disabled");
              }
            }
            if (index === items.length - 1) {
              if (item.isIntersecting) {
                next?.setAttribute("disabled", "");
              } else {
                next?.removeAttribute("disabled");
              }
            }
          }
        }),
      { threshold: THRESHOLD, root: slider },
    );

    items.forEach((item) => observer.observe(item));

    for (let it = 0; it < (dots?.length ?? 0); it++) {
      dots?.item(it).addEventListener("click", () => goToItem(it));
    }

    prev?.addEventListener("click", onClickPrev);
    next?.addEventListener("click", onClickNext);

    const timeout = interval && setInterval(onClickNext, interval);

    return () => {
      for (let it = 0; it < (dots?.length ?? 0); it++) {
        dots?.item(it).removeEventListener("click", () => goToItem(it));
      }
      prev?.removeEventListener("click", onClickPrev);
      next?.removeEventListener("click", onClickNext);
      observer.disconnect();
      clearInterval(timeout);
    };
  };

  function JS({
    rootId,
    scroll = "smooth",
    interval,
    infinite = false,
    images,
  }: PropsI & { images: BannerI[] }) {
    return (
      <script
        src={scriptAsDataURI(setup, {
          rootId,
          scroll,
          interval,
          infinite,
          images,
        })}
        defer
      />
    );
  }

  Slider.JS = JS;

  return (
    <>
      <div
        id={id}
        class={`grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] sm:min-h-min`}
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

        {props.arrows && <Buttons images={images} />}

        {props.dots && <Dots images={images} interval={interval} />}

        <Slider.JS
          rootId={id}
          interval={interval && interval * 1e3}
          images={images}
        />
      </div>
      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container flex justify-between items-start max-md:flex-col">
          <div class="w-full md:w-[45%]">
            <h1 class="headline50 text-[#452c1e]">
              Bem-vindo à Dryzun Distribuidor oficial Rolex em São Paulo
            </h1>
          </div>
          <div class="w-full md:w-[50%] md:pr-[8%]">
            <p class="body20-ligth text-[#212121]">
              <b>
                A Dryzun tem orgulho em fazer parte da rede mundial de
                distribuidores oficiais Rolex
              </b>
              , autorizados a vender e fazer a manutenção dos relógios Rolex. Na
              Dryzun, nos dedicamos a apresentar-lhe toda a coleção Rolex e a
              acompanhá-lo na escolha de um relógio para a eternidade.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container">
          <a href="/rolex/relogios-rolex">
            <h3 class="headline36 text-[#452c1e] text-left mb-5">
              Relógios Rolex
            </h3>
            <div class="w-full overflow-hidden"> 
              <img class="hidden md:block" src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watches-m126333_0010_1802jva_002.jpg.jpg" alt="banner" />
              <img class="md:hidden" src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watches-1945_oyster_perpetual_datejust_1802jva_m126333_0010_1802jva_002-portrait.jpg" alt="banner" />
            </div>
          </a>
        </div>
      </section>

      <section class="bg-rolex-3 pt-4">
        <div class="rolex-container">
          <p class="fixed16 text-[#452c1e] text-left mb-2">
            Encontre o seu Rolex
          </p>
          <h3 class="headline36 text-[#452c1e] text-left">
            Descubra as coleções Rolex
          </h3>
          <a class="secondary-cta justify-start" href="/rolex/relogios-rolex">
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
        <a href="/rolex/contato-sao-paulo" class="block rolex-container">
          <h3 class="headline36 text-[#452c1e] text-left mb-5">Contato</h3>
          <div class="w-full overflow-hidden">         
            <img class="hidden md:block" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/ced309b9-4fc2-4b06-8083-782d220f1203" alt="banner" />
            <img class="md:hidden" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/2e31e735-5795-49b5-8da0-a1c44ebd8445" alt="banner" />
          </div>
        </a>
      </section>

      <section class="bg-rolex-3 pt-4 pb-[60px] pb:mt-[90px]">
        <div class="rolex-container">
          <h3 class="headline36 text-[#452c1e] text-left">
            Mensagem
          </h3>
          <a
            class="secondary-cta justify-start"
            href="/rolex/contato-sao-paulo"
          >
            Enviar uma mensagem{" "}
            <Icon
              class=""
              size={22}
              id="ChevronRight"
              strokeWidth={3}
            />
          </a>
        </div>
      </section>

      <section class="bg-[rgb(244,239,235)] py-[60px] md:py-[90px] ">
        <div class="rolex-container">
          <h3 class="headline36 text-[#452c1e] text-left mb-5">
            Descubra a Rolex
          </h3>
          <div class="flex flex-wrap items-center justify-between">
            <a
              href="/rolex/o-mundo-rolex"
              class="w-full md:w-[33%] max-md:mb-5"
            >
              <div class="w-full overflow-hidden">
                <img
                  alt="Descuba a Rolex"
                  class="md:hidden hover:scale-110 duration-[850ms]"
                  src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/954e065f-f9f6-435a-8c03-2e1f934fa98f"
                />
                <img
                  alt="Descuba a Rolex"
                  class="max-md:hidden hover:scale-110 duration-[850ms]"
                  src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/4b45b732-7eea-413e-8d38-43be3b9ae332"
                />
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Compromisso com a excelência
              </p>
              <h3 class="body24 text-[#452c1e]">O mundo Rolex</h3>
              <span class="secondary-cta justify-start">
                Saiba mais
                <Icon
                  class=""
                  size={20}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </span>
            </a>
            <a
              href="/rolex/a-arte-da-relojoaria"
              class="w-full md:w-[33%] max-md:mb-5"
            >
              <div class="w-full overflow-hidden">
                <img
                  alt="Descuba a Rolex"
                  class="md:hidden hover:scale-110 duration-[850ms]"
                  src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watchmaking-dial-mob.jpg"
                />
                <img
                  alt="Descuba a Rolex"
                  class="max-md:hidden hover:scale-110 duration-[850ms]"
                  src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-watchmaking-b460356_rolex_mp_olv_watchmaking_manifesto_d_9x16_en-gb_75_25p_pp002.jpg"
                />
              </div>
              <p class="legend16 text-[#452c1e] mt-3">Excelência no ofício</p>
              <h3 class="body24 text-[#452c1e]">A arte da relojoaria</h3>
              <span class="secondary-cta justify-start">
                Saiba mais
                <Icon
                  class=""
                  size={20}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </span>
            </a>
            <a href="/rolex/manutencao" class="w-full md:w-[33%] max-md:mb-5">
              <div class="w-full overflow-hidden">
                <img
                  alt="Descuba a Rolex"
                  class="md:hidden hover:scale-110 duration-[850ms]"
                  src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-servicing-2-sav1910dh_005c-portrait.jpg"
                />
                <img
                  alt="Descuba a Rolex"
                  class="max-md:hidden hover:scale-110 duration-[850ms]"
                  src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-servicing-2-sav1910dh_005c.jpg"
                />
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                A filosofia da manutenção Rolex
              </p>
              <h3 class="body24 text-[#452c1e]">Manutenção</h3>
              <span class="secondary-cta justify-start">
                Saiba mais
                <Icon
                  class=""
                  size={20}
                  id="ChevronRight"
                  strokeWidth={3}
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Exploring />
      <Footer />
    </>
  );
}

export default RolexIndex;
