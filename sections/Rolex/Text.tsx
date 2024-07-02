import { useId } from "preact/hooks";
import type { HTMLWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */

export interface Props {
    /** @title SubTitulo */
    /** @format rich-text */
    subtitle?: string;

    /** @title Titulo */
    /** @format rich-text */
    title?: string;

    /** @title Texto em 2 colunas */
    isColumns?: boolean;

    /** @title Não é H1 */
    NotisH1?: boolean;

    /** @title Texto */
    /** @format rich-text */
    text?: HTMLWidget;

    /** @title Largura do bloco */
    screen?: "XL" | "L" | "M" | 'S';

    /** @title Cor de fundo */
    hexa?: "fff" | "f9f7f4" | "f4efea";

    /** @title Espaçamento do bloco */
    paddingTop?: boolean;
    paddingBottom?: boolean;
}

const DEFAULT_PROPS = {
    title: "",
    text: "",
    screen: 'XL',
    hexa: '#fff',
    paddingTop: false,
    paddingBottom: false,
    NotisH1: true,
};

function Text(props: Props) {
    const { subtitle, title, isColumns, NotisH1, text, screen, hexa, paddingTop, paddingBottom } = { ...DEFAULT_PROPS, ...props };

    const id = useId();

    return (
        <div id={id} style={{ backgroundColor: `#${hexa}` }}
            class={`rolex-container-mob ${isColumns && 'flex justify-between max-md:flex-col'} ${paddingTop && 'pt-[60px] md:pt-[90px]'} ${paddingBottom && 'pb-[60px] md:pb-[90px]'} 
        ${screen == 'XL' && 'w-full'} ${screen == 'L' && 'rolex-container'} ${screen == 'M' && 'rolex-container-2'}`}>
            <div class={`${isColumns && 'w-full md:w-[45%]'}`}>
                {subtitle && <div class="f-rolex text-xl leading-[1.2] font-light text-[#452c1e]"><p dangerouslySetInnerHTML={{ __html: subtitle }} class="f-rolex text-xl leading-[1.2] font-light text-[#452c1e]">{subtitle}</p></div>}
                {NotisH1 ?
                    <h2 dangerouslySetInnerHTML={{ __html: title }} class={`${screen == 'S' && 'md:w-[570px] xxl:w-[800px] mx-auto'} f-rolex text-[30px] md:text-[36px] leading-[1.1] font-boldd text-[#452c1e] mb-2`}>{title}</h2>
                    : <h1 dangerouslySetInnerHTML={{ __html: title }} class={`${screen == 'S' && 'md:w-[570px] xxl:w-[800px] mx-auto'} f-rolex text-[30px] md:text-[36px] leading-[1.1] font-boldd text-[#452c1e] mb-2`}>{title}</h1>
                }
            </div>
            <div class={`newfont ${isColumns && 'w-full md:w-[50%] md:pr-[8%]'} ${screen == 'S' && 'md:w-[570px] xxl:w-[800px] mx-auto'} f-rolex font-p`}>
                <p dangerouslySetInnerHTML={{ __html: text }} class={`${screen == 'S' && 'md:w-[570px] xxl:w-[800px] mx-auto'} font-p`}>{text}</p>
            </div>
        </div>
    )
}

export default Text;