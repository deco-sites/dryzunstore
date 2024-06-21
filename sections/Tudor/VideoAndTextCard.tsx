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
    * @title Embed do video -Youtube
    */
    video?: string;
  
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

function VideoAndTextCard(props: Props) {
    const { subtitle, title, text, video, top, bottom } = { ...DEFAULT_PROPS, ...props };

    return (
        <div class={`w-full mx-auto bg-black max-md:pt-[40px] ${top ? 'mt-[60px] md:mt-[90px]' : "mt-0"} ${bottom ? 'mb-[60px] md:mb-[90px]' : "mt-0"} px-0 max-md:px-5 flex flex-wrap items-center md:flex-row`}>
            <div class={`w-full md:w-[50%] md:pr-[80px] md:px-[10vw] md:py-[8vw]`}>
                {subtitle && <p class={`text-[#dc1916] text-[15px] font-black text-white uppercase tracking-[-1px] text-center md:text-left`}>{subtitle}</p>}
                {title && <h3 class={`text-black text-[40px] leading-[42px] font-black text-white uppercase tracking-[-2px] text-center max-md:px-5 max-md:leading-10 max-md:mb-5 md:text-left`}>{title}</h3>}
                {text && <p class={`text-sm leading-6 tracking-[0] text-center text-white md:text-left`}>{text}</p>}
            </div>
            <div class="w-full md:w-[50%] max-md:mt-7">
                {video && 
                <iframe class="aspect-[19_/_19]" width="100%" height="100%" src={video} allowFullScreen frameborder="0"></iframe>
                }
            </div>
        </div>
    )
}

export default VideoAndTextCard;