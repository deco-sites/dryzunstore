/**
 * @titleBy alt
 */

export interface Props {
    url: string;
    /** @html */
    screen?: "XL" | "L" | "M" | 'S';
    hexa?: "fff" | "f9f7f4" | "f4efea";
    paddingTop?: boolean;
    paddingBottom?: boolean;
}

const DEFAULT_PROPS = {
    url: "https://www.youtube.com/embed/tG63s30B_z8?si=qWkMCf797Q95QUjl",
    screen: 'XL',
    hexa: '#fff',
    paddingTop: false,
    paddingBottom: false,
};

function Video(props: Props) {
    const { url, screen, hexa, paddingTop, paddingBottom } = { ...DEFAULT_PROPS, ...props };

    return (
        <div style={{ backgroundColor: `#${hexa}` }}
            class={`${paddingTop && 'pt-[60px] md:pt-[90px]'} ${paddingBottom && 'pb-[60px] md:pb-[90px]'} 
        ${screen == 'XL' && 'w-full'} ${screen == 'L' && 'rolex-container'} ${screen == 'M' && 'rolex-container-2'}`}>
           <iframe class="w-full h-auto aspect-video" width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default Video;