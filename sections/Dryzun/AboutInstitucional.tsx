import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy title
 */
interface Props {
  /**
   * @description Adicione uma Imagem
   */
  image?: ImageWidget;
  /**
   * @description Largura da imagem
   */
  width?: string;
  /**
   * @description Adicione um Titulo
   */
  title?: string;
  /**
   * @description É h1?
   */
  h1?: boolean;
  /**
   * @description Adicione uma Descrição
   */
  text?: string;
  /**
   * @description Inverter
   */
  reverse?: boolean;
  /**
   * @description Margem Top
   */
  marginTop?: boolean;
  /**
   * @description Margem Bottom
   */
  marginBottom?: boolean;
}

function AboutInstitucional(
  { title, text, h1, image, width, reverse, marginBottom, marginTop }: Props,
) {
  return (
    <section
      class={`${marginTop ? "mt-20" : ""} ${
        marginBottom ? "mb-10" : ""
      } max-md:px-4 container-2 block py-4`}
    >
      {title && (
        h1
          ? (
            <h1 class="mb-4 text-4xl font-medium leading-[1.1] text-[#333]">
              {title}
            </h1>
          )
          : (
            <h2 class="mb-4 text-3xl font-medium leading-[1.1] text-[#333]">
              {title}
            </h2>
          )
      )}
      <div
        class={`${
          reverse ? "flex-row-reverse" : ""
        } w-full gap-4 flex items-start max-md:flex-col`}
      >
        <img
          loading="lazy"
          class="block w-full md:max-w-[50%] md:w-auto h-auto"
          width={width}
          height={100}
          src={image}
          alt={title}
        />
        {text && <p class="text-[17px] leading-[22px] text-[#333]">{text}</p>}
      </div>
    </section>
  );
}

export default AboutInstitucional;
