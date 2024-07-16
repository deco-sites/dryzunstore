import Icon from "../../components/ui/Icon.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";

/**
 * @titleBy title
 */
interface Item {
  /**
   * @description Adicione uma Imagem
   */
  image?: ImageWidget;
  /**
   * @description Adicione um Titulo
   */
  title?: string;
  /**
   * @description Adicione uma Descrição
   */
  text?: string;
  /**
   * @description Adicione um Link
   */
  link?: string;
}

export interface Props {
  /**
   * @description Adicione um Item
   */
  items: Item[] | null;
  /**
   * @description Adicione um Titulo
   */
  title?: string;
  /**
   * @description Adicione uma Descrição
   */
  description?: string;
  /**
   * @description Ative as setas no mobile
   */
  showArrows?: boolean;
}

function AboutDryzun(props: Props) {
  const id = useId();

  return (
    <section class="w-full max-w-[1270px] mx-auto px-5 py-[34px] md:py-[64px] md:px-0 flex flex-col gap-4">
      <h3 class="text-center text-2xl not-italic font-normal leading-[normal] tracking-[1.2px] uppercase text-[#333]">
        {props.title}
      </h3>
      <p class="hidden mb-6 max-w-[855px] mx-auto text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px] text-[#333]">
        {props.description}
      </p>
      <div
        id={id}
        class="w-full relative"
      >
        <Slider class="w-full carousel carousel-center sm:carousel-end sm:gap-1 row-start-2 row-end-5">
          {props.items?.map((item, index) => (
            <Slider.Item
              index={index}
              class="carousel-item md:w-1/5 w-full"
            >
              <a
                href={item.link}
                class="w-full flex flex-col items-center justify-start gap-4 box-border px-4"
              >
                <div class="rounded-[50%] flex justify-center items-center w-20 h-20 border border-solid border-[#E8EDF5]">
                  <img
                    src={item.image ?? ""}
                    alt={item.title}
                    width={30}
                    height={30}
                    class="w-auto max-h-[24px]"
                    loading="lazy"
                  />
                </div>
                <h4 class="text-center text-base not-italic font-normal leading-[normal] text-[#333]">
                  {item.title}
                </h4>
                <p class="text-center text-[13px] not-italic font-light leading-[140%] tracking-[0.65px] text-[#333]">
                  {item.text}
                </p>
              </a>
            </Slider.Item>
          ))}
        </Slider>

        {props?.showArrows && (
          <div class="md:hidden">
            <div class="z-10 absolute left-3 top-1/2">
              <Slider.PrevButton class="flex justify-center items-center">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
            <div class="z-10 absolute right-3 top-1/2">
              <Slider.NextButton class="flex justify-center items-center">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </div>
        )}
        <Slider.JS rootId={id} />
      </div>
    </section>
  );
}

export default AboutDryzun;
