/**
 * @titleBy alt
 */

export interface Props {
  /** @title Citação */
  citation?: string;

  /** @title Autor */
  author?: string;

  /** @title Cor de fundo */
  hexa?: "fff" | "f9f7f4" | "f4efea";

  /** @title Espaçamento do bloco */
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

const DEFAULT_PROPS = {
  screen: "XL",
  hexa: "#fff",
  paddingTop: false,
  paddingBottom: false,
};

function Text(props: Props) {
  const { citation, author, hexa, paddingTop, paddingBottom } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div
      style={{ backgroundColor: `#${hexa}` }}
      class={`rolex-container ${paddingTop && "pt-[60px] md:pt-[90px]"} ${
        paddingBottom && "pb-[60px] md:pb-[90px]"
      }`}
    >
      {citation && author && (
        <div class={`md:w-[600px] mx-auto`}>
          <p class="f-rolex-g block text-[50px] leading-[1.1] font-[bold] text-[#212121]">
            {citation}
          </p>
          <p class="f-rolex block text-xl leading-[1.2] font-light text-[#212121] mt-2 ml-1">
            {author}
          </p>
        </div>
      )}
    </div>
  );
}

export default Text;
