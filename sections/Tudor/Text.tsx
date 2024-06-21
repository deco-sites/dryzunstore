import { HTMLWidget as HTML } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */

export interface Props {
  /** @title SubTitulo */
  subtitle?: string;

  /** @title Titulo */
  title?: string;

  /** @title Texto em 2 colunas */
  isColumns?: boolean;

  /** @title Não é H1 */
  NotisH1?: boolean;

  /** @title Texto */
  text?: HTML;

  /** @title Largura do bloco */
  screen?: "XL" | "L" | "M" | "S";

  /** @title Cor de fundo */
  hexa?: "fff" | "f5f5f5";

  /** @title Cor do Texto */
  color?: "000" | "8c8c8c";

  /** @title Espaçamento do bloco */
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

const DEFAULT_PROPS = {
  title: "",
  text: "",
  screen: "XL",
  hexa: "#fff",
  paddingTop: false,
  paddingBottom: false,
  NotisH1: true,
};

function Text(props: Props) {
  const {
    subtitle,
    title,
    isColumns,
    NotisH1,
    text,
    screen,
    hexa,
    color,
    paddingTop,
    paddingBottom,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      style={{ backgroundColor: `#${hexa}` }}
      class={`rolex-container-mob ${
        isColumns && "flex justify-between max-md:flex-col"
      } ${paddingTop && "pt-[60px] md:pt-[90px]"} ${
        paddingBottom && "pb-[60px] md:pb-[90px]"
      } 
        ${screen == "XL" && "w-full"} ${screen == "L" && "rolex-container"} ${
        screen == "M" && "rolex-container-2"
      }`}
    >
      <div class={`${isColumns && "w-full md:w-[40%]"}`}>
        {subtitle && <p class="f-rolex tudorSubTitle text-center">{subtitle}
        </p>}
        {NotisH1
          ? (
            <h2
              class={`${
                screen == "S" && "md:w-[800px] mx-auto"
              } f-rolex tudorTitle text-center mb-2`}
            >
              {title}
            </h2>
          )
          : (
            <h1
              class={`${
                screen == "S" && "md:w-[800px] mx-auto"
              } f-rolex tudorTitle text-center mb-2`}
            >
              {title}
            </h1>
          )}
      </div>
      <div
        class={`${isColumns && "w-full md:w-[50%]"} ${
          screen == "S" && "md:w-[700px] mx-auto"
        } f-rolex tudorText`}
      >
        <p
          style={{ color: `#${color}` }}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
          class={`${screen == "S" && "md:w-[800px] mx-auto"} f-rolex tudorText`}
        >
        </p>
      </div>
    </div>
  );
}

export default Text;
