//import { HTMLWidget as HTML } from "apps/admin/widgets.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

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
    title: "Titulo",
    text: "Texto",
    screen: 'XL',
    hexa: '#fff',
    paddingTop: false,
    paddingBottom: false,
    NotisH1: true,
};

function Text(props: Props) {
    const { subtitle, title, isColumns, NotisH1, text, screen, hexa, paddingTop, paddingBottom } = { ...DEFAULT_PROPS, ...props };

    return (
        <div style={{ backgroundColor: `#${hexa}` }}
            class={`rolex-container-mob ${isColumns && 'flex justify-between max-md:flex-col'} ${paddingTop && 'pt-[60px] md:pt-[90px]'} ${paddingBottom && 'pb-[60px] md:pb-[90px]'} 
        ${screen == 'XL' && 'w-full'} ${screen == 'L' && 'rolex-container'} ${screen == 'M' && 'rolex-container-2'}`}>
            <div class={`${isColumns && 'w-full md:w-[40%]'}`}>
                {subtitle && <p class="f-rolex text-xl leading-[1.2] font-light text-[#452c1e]">{subtitle}</p>}
                {NotisH1 ?
                    <h2 class={`${screen == 'S' && 'md:w-[600px] mx-auto'} f-rolex text-[30px] md:text-[50px] leading-[1.1] font-boldd text-[#452c1e] mb-2`}>{title}</h2>
                    : <h1 class={`${screen == 'S' && 'md:w-[600px] mx-auto'} f-rolex text-[30px] md:text-[50px] leading-[1.1] font-boldd text-[#452c1e] mb-2`}>{title}</h1>
                }
            </div>
            <div class={`${isColumns && 'w-full md:w-[50%]'} ${screen == 'S' && 'md:w-[600px] mx-auto'} f-rolex font-p`}>
                <p dangerouslySetInnerHTML={{
                    __html: text,
                }} class={`${screen == 'S' && 'md:w-[600px] mx-auto'} f-rolex font-p`}></p>
            </div>
        </div>
    )
}

export default Text;