import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../../components/ui/Icon.tsx";
import Slider from "../../../components/ui/Slider.tsx";
import ProductImageZoom from "../../../islands/ProductImageZoom.tsx";
import { useId } from "../../../sdk/useId.ts";

export interface Props {
  /** @title Integration */
  page: ProductDetailsPage | null;

  layout?: {
    width: number;
    height: number;
  };
}

/**
 * @title Product Image Slider
 * @description Creates a three columned grid on destkop, one for the dots preview, one for the image slider and the other for product info
 * On mobile, there's one single column with 3 rows. Note that the orders are different from desktop to mobile, that's why
 * we rearrange each cell with col-start- directives
 */
export default function GallerySlider(props: Props) {
  const id = useId();

  if (!props.page) {
    throw new Error("Missing Product Details Page Info");
  }

  const {
    page: { product: { image: images = [] } },
    layout,
  } = props;

  const { width, height } = layout || { width: 300, height: 370 };

  //const aspectRatio = `${width} / ${height}`;

  const formtImage = (img: string) => {
    const formatImg = img.replace("undefined", "auto");
    return formatImg;
  };

  return (
    <div id={id} class="w-full flex items-start gap-3">
      {/* Image Slider */}
      <div class="w-full relative order-1 sm:order-2">
        <Slider class="w-full carousel carousel-center gap-6">
          {images.map((img, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full h-full yy"
            >
              <img
                class="max-w-[1000px] native h-auto w-full"
                src={img.url!}
                alt={img.alternateName}
                width={width}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Slider.Item>
          ))}
        </Slider>

        <Slider.PrevButton
          class="no-animation absolute left-2 top-1/2 btn btn-circle bg-transparent border-none shadow-none disabled:hidden"
          disabled
        >
          <Icon size={20} id="ChevronLeft" strokeWidth={3} />
        </Slider.PrevButton>

        <Slider.NextButton
          class="no-animation absolute right-2 top-1/2 btn btn-circle bg-transparent border-none shadow-none disabled:hidden"
          disabled={images.length < 2}
        >
          <Icon size={24} id="ChevronRight" strokeWidth={3} />
        </Slider.NextButton>

        <div class="absolute top-2 right-2 bg-base-100 rounded-full">
          <ProductImageZoom
            images={images}
            width={700}
            height={Math.trunc(700 * height / width)}
          />
        </div>
      </div>

      {/* Dots */}
      <ul class="max-md:hidden carousel carousel-center gap-3 px-4 sm:px-0 sm:flex-col order-2 sm:order-1">
        {images.map((img, index) => (
          <li class="carousel-item min-w-[80px]flex items-center justify-center border border-solid border-[#E0DEDA]">
            <Slider.Dot index={index}>
              <Image
                class="w-[80px] h-auto"
                width={88}
                height={88}
                src={img.url!}
                alt={img.alternateName}
              />
            </Slider.Dot>
          </li>
        ))}
      </ul>

      <Slider.JS rootId={id} />
    </div>
  );
}
