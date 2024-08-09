import type { SectionProps } from "deco/types.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy matcher
 */
export interface Texto {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;

  /** @description texto de apoio */
  /** @format rich-text */
  texto?: HTMLWidget;

}

const DEFAULT_PROPS = {
  textos: [
    {
      texto: "Woman",
      matcher: "/*",
    },
  ],
};

function CategoryText(props: SectionProps<ReturnType<typeof loader>>) {
  const { texto } = props;

  if (!texto) {
    return null;
  }


  return (
    <div class="flex justify-center mb-10 px-5">
      <div class="max-w-[1170px] flex flex-col gap-3 leading-none text-[#333]" dangerouslySetInnerHTML={{ __html: texto.texto }}></div>
    </div>
  );
}

export interface Props {
  textos?: Texto[];
}

export const loader = (props: Props, req: Request) => {
  const { textos } = { ...DEFAULT_PROPS, ...props };

  const texto = textos.find(({ matcher }) =>
    new URLPattern({ pathname: matcher }).test(req.url)
  );

  return { texto };
};

export default CategoryText;
