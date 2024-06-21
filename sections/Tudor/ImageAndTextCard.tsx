import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title SubTitulo
   */
  subtitle?: string;
  /**
   * @title Titulo
   */
  title?: string;
  /**
   * @title Texto
   */
  text?: string;
  /**
   * @title Imagem
   */
  image?: ImageWidget;

  /**
   * @title Inverter
   */
  inverter?: boolean;

  /**
   * @title Margin top
   */
  top?: boolean;

  /**
   * @title Margin bottom
   */
  bottom?: boolean;
}

const DEFAULT_PROPS = {
  inverter: false,
  top: false,
  bottom: false,
};

function ImageAndTextCard(props: Props) {
  const { subtitle, title, text, image, inverter, top, bottom } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div
      class={`w-full max-w-[1170px] mx-auto ${
        top ? "mt-[60px] md:mt-[90px]" : "mt-0"
      } ${
        bottom ? "mb-[60px] md:mb-[90px]" : "mt-0"
      } px-0 max-md:px-5 flex flex-wrap items-center ${
        inverter ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        class={`w-full md:w-[50%] ${
          inverter ? "md:pl-[80px]" : "md:pr-[80px]"
        }`}
      >
        {subtitle && (
          <p
            class={`text-[#dc1916] text-[15px] font-black uppercase tracking-[-1px] text-center ${
              inverter ? "md:text-left" : "md:text-right"
            }`}
          >
            {subtitle}
          </p>
        )}
        {title && (
          <h3
            class={`text-black text-[40px] font-black uppercase tracking-[-2px] text-center max-md:px-5 max-md:leading-10 max-md:mb-5 ${
              inverter ? "md:text-left" : "md:text-right"
            }`}
          >
            {title}
          </h3>
        )}
        {text && (
          <p
            class={`text-sm leading-6 tracking-[0] text-center ${
              inverter ? "md:text-left" : "md:text-right"
            }`}
          >
            {text}
          </p>
        )}
      </div>
      <div class="w-full md:w-[50%] max-md:mt-7">
        {image && (
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default ImageAndTextCard;
