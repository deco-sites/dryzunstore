import { useSignal } from "@preact/signals";
import type { ImageObject } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Modal from "../../components/ui/Modal.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";

export interface Props {
  images: ImageObject[];
  width: number;
  height: number;
}

function ProductImageZoom({ images, width, height }: Props) {
  const id = useId();
  const open = useSignal(false);

  return (
    <>
      <Button
        class="inline-flex btn-ghost"
        onClick={() => open.value = true}
      >
        <Icon id="Zoom" size={24} />
      </Button>
      <div id={id}>
        <Modal
          loading="lazy"
          open={open.value}
          onClose={() => open.value = false}
        >
          <div class="max-md:max-w-[100%] max-md:w-full max-md:h-full md:scroll-custom py-10 px-0 modal-box w-11/12 max-w-7xl grid grid-cols-[0_1fr_0] grid-rows-1 place-items-center">
            <Button
              class="absolute right-0 top-0 px-[25px] inline-flex btn-ghost"
              onClick={() => open.value = false}
            >
              <Icon id="XMark" size={24} strokeWidth={2} />
            </Button>

            <Slider class="carousel col-span-full col-start-1 row-start-1 row-span-full h-full w-full">
              {images.map((image, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full h-full justify-center items-center md:items-baseline md:overflow-y-scroll"
                >
                  <img
                    src={image.url!}
                    alt={image.alternateName}
                    class="zom w-full max-w-[1000px]"
                  />
                </Slider.Item>
              ))}
            </Slider>

            <Slider.PrevButton class={`${images.length < 2 && 'hidden'} absolute left-8 btn btn-circle btn-outline col-start-1 col-end-2 row-start-1 row-span-full`}>
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>

            <Slider.NextButton class={`${images.length < 2 && 'hidden'} absolute right-8 btn btn-circle btn-outline col-start-3 col-end-4 row-start-1 row-span-full`}>
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>

            <Slider.JS rootId={id} />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ProductImageZoom;
