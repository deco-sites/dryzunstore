/**
 * @titleBy alt
 */

export interface Props {
  /** @title Citação */
  /** @format rich-text */
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
      {citation && (
        <div class={`md:w-[800px] mx-auto`}>
          <div
            class="f-rolex-g block text-[30px] md:text-[32px] leading-[1.6] font-[bold] text-[#212121]"
            dangerouslySetInnerHTML={{ __html: citation }}
          >
          </div>
          {author &&
            (
              <p class="f-rolex block text-xl leading-[1.2] font-light text-[#212121] mt-2 ml-1">
                {author}
              </p>
            )}
        </div>
      )}
    </div>
  );
}

export default Text;
