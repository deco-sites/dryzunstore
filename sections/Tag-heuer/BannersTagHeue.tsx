import type { ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";

export interface CardI {
  image: ImageWidget;
  title: string;
  link: string;
}

export interface Props {
  cards: CardI[];
  title?: string;
  subTitle?: string;
}

function BannersTagHeue({
  cards,
  title,
  subTitle,
}: Props) {
  const id = useId();

  const background = `background-color: #000`;

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <>
      <div
        class="w-full md:pl-10 py-8 flex flex-col gap-0 lg:py-10 overflow-hidden"
        style={background}
      >
        {title && (
          <h3 class="text-2xl font-semibold text-white text-center tracking-[2px] mx-5 my-0">
            {title}
          </h3>
        )}

        {subTitle && (
          <p class="text-xs font-normal text-white text-center mt-2.5 mb-10 mx-5">
            {subTitle}
          </p>
        )}

        <div
          id={id}
          class="relative flex items-center flex-wrap gap-2"
        >
          <Slider class="carousel carousel-center sm:carousel-end gap-3 col-span-full row-start-2 row-end-5">
            {cards?.map((card, index) => (
              <Slider.Item
                index={index}
                class={"carousel-item w-[78%] md:w-[28%] first:pl-0 sm:first:pl-0 last:pr-6 sm:last:pr-0"}
              >
                <div
                  class="relative flex flex-col items-center justify-center"
                  key={index}
                >
                  <img
                    width={427}
                    height={533}
                    class="w-full h-auto"
                    src={card.image}
                    alt="banner tag heuer"
                  />
                  <div class="absolute flex flex-col items-center bottom-5 text-white">
                    <h2 class="text-xs font-semibold text-white text-center tracking-[2px] mt-0 mb-2.5 mx-5">
                      TAG HEUER
                    </h2>
                    <h3 class="text-[19px] font-semibold text-white text-center tracking-[2px] mt-0 mb-5 mx-5">
                      {card.title}
                    </h3>
                    <a
                      class="text-xs font-semibold text-white text-center tracking-[2px] block no-underline mx-5 my-0"
                      href={card.link}
                    >
                      &gt; CONHEÇA A COLEÇÃO
                    </a>
                  </div>
                </div>
              </Slider.Item>
            ))}
          </Slider>

          <>
            <div class="bg-white absolute left-2 md:left-10 block z-10 col-start-3 row-start-3 border border-solid border-[#666]">
              <Slider.PrevButton class="w-12 h-12 flex justify-center items-center disabled:hidden">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
            <div class="bg-white absolute right-2 md:right-10 block z-10 col-start-3 row-start-3 border border-solid border-[#666]">
              <Slider.NextButton class="w-12 h-12 flex justify-center items-center disabled:hidden">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>

          <ul class="w-full hidden md:flex carousel justify-center col-span-full gap-6 z-10 row-start-4">
            {cards?.map((_, index) => (
              <li class="carousel-item hidden itemDots">
                <Slider.Dot index={index}>
                  <div class="py-5">
                    <div
                      class="w-[95px] h-[2px] border border-solid border-[#fff] bg-transparent group-disabled:border-[#333]"
                      style={{ transition: `${.3}s` }}
                    />
                  </div>
                </Slider.Dot>
              </li>
            ))}
          </ul>

          <Slider.JS rootId={id} />
        </div>
      </div>
    </>
  );
}

export default BannersTagHeue;
