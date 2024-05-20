import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */
export interface Banner {
    /** @description Imagem desktop */
    desktop: ImageWidget;
    /** @description Imagem mobile */
    mobile: ImageWidget;
    /** @description Alt text da imagem */
    alt: string;
    action?: {
        /** @description when user clicks on the image, go to this link */
        href: string;
        /** @description Texto do botão */
        label: string;
    };
}

export interface Props {
    images?: Banner[];
    screen?: "XL" | "L" | "M" | 'S';
    hexa?: "fff" | "f9f7f4" | "f4efea";
    paddingTop?: boolean;
    paddingBottom?: boolean;
}

const DEFAULT_PROPS = {
    images: [
        {
            alt: "/feminino",
            action: {
                label: "Explore collection",
                href: "/",
            },
            mobile:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/c007e481-b1c6-4122-9761-5c3e554512c1",
            desktop:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5",
        },
        {
            alt: "/feminino",
            action: {
                label: "Explore collection",
                href: "/",
            },
            mobile:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/c007e481-b1c6-4122-9761-5c3e554512c1",
            desktop:
                "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5",
        },
    ],
    screen: 'XL',
    hexa: '#fff',
    paddingTop: false,
    paddingBottom: false,
};

function Gallery(props: Props) {
    const { images, screen, hexa, paddingTop, paddingBottom } = { ...DEFAULT_PROPS, ...props };

    return (
        <div style={{ backgroundColor: `#${hexa}` }}
        class={`${paddingTop && 'pt-[60px] md:pt-[90px]'} ${paddingBottom && 'pb-[60px] md:pb-[90px]'} 
        ${screen == 'XL' && 'w-full'} ${screen == 'L' && 'rolex-container'} ${screen == 'M' && 'rolex-container-2'}`}>
            {images?.map((image, index) => (
                <div class={`${screen == 'S' && 'rolex-container-3'}`} key={index}>
                    <Picture preload={true}>
                        <Source media="(max-width: 767px)" fetchPriority="auto" src={image.mobile} width={780}
                            height={520} />
                        <Source media="(min-width: 768px)" fetchPriority="auto" src={image.desktop} width={2880}
                            height={750} />
                        <img class="object-cover w-full h-full" loading="lazy" src={image.desktop}
                            alt="rolex watches" />
                    </Picture>
                </div>
            ))}
        </div>
    )
}

export default Gallery;