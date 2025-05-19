import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    /** @description Banner Principal Desk */
    bannerPrincipalDesk?: ImageWidget;
    /** @description Banner Principal Mobile */
    bannerPrincipalMobile?: ImageWidget;
    /** @description Banner Better Tgh Desk */
    bannerBetterDesk?: ImageWidget;
    /** @description Banner Better Tgh Mobile */
    bannerBetterMobile?: ImageWidget;
    /** @description Texto Esquerda */
    textoEsquerda?: string;
    /** @description Imagem Direita */
    imagemDireita?: ImageWidget;
    /** @description Texto Meio */
    textoMeio?: string;
    /** @description Grid de 2 Imagens*/
    gridImagensOne?: ImageWidget[];
    /** @description Link primeiro produto do grid*/
    linkPrimeiroProduto?: string
    /** @description Grid de 2 Imagens*/
    gridImagensTwo?: ImageWidget[];
    /** @description Link segundo produto do grid*/
    linkSegundoProduto?: string
    /** @description Link página da coleção*/
    linkCollectionPage?: string;
}

export default function BetterTgh(
    {
        bannerPrincipalDesk,
        bannerPrincipalMobile,
        bannerBetterDesk,
        bannerBetterMobile,
        textoEsquerda,
        imagemDireita,
        textoMeio,
        gridImagensOne,
        linkPrimeiroProduto,
        gridImagensTwo,
        linkSegundoProduto,
        linkCollectionPage,
    }: Props,
) {
    return (
        <div class="py-8">
            <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            `}
            </style>

            {bannerPrincipalDesk && (
                <div class="justify-center max-w-[1366px] w-full mx-auto hidden md:flex">
                    <a href={linkCollectionPage ? linkCollectionPage : ""}>
                        <img
                            src={bannerPrincipalDesk ? bannerPrincipalDesk : ""}
                            class="max-w-full h-auto"
                            alt="Imagem Central"
                            loading="lazy"
                        />
                    </a>
                </div>
            )}

            {bannerPrincipalMobile && (
                <div class="flex justify-center mx-auto md:hidden">
                    <a href={linkCollectionPage ? linkCollectionPage : ""}>
                        <img
                            src={bannerPrincipalMobile ? bannerPrincipalMobile : ""}
                            class="w-screen h-auto"
                            alt="Imagem Central"
                            loading="lazy"
                        />
                    </a>
                </div>
            )}

            {bannerBetterDesk && (
                <div class="flex justify-center mx-auto">
                    <img
                        src={bannerBetterDesk ? bannerBetterDesk : ""}
                        class="max-w-[1366px] w-full"
                        alt="Bem Me Quer"
                        loading="lazy"
                    />
                </div>
            )}

            {bannerBetterMobile && (
                <div class="flex justify-center mx-auto">
                    <img
                        src={bannerBetterMobile ? bannerBetterMobile : ""}
                        alt="Bem Me Quer"
                        loading="lazy"
                    />
                </div>
            )}

            <div class="flex justify-center items-center gap-[100px]">
                <p class="text-[32px] text-[#C50C45] leading-[49%] tracking-[7%] max-w-[578px]">
                    {textoEsquerda ? textoEsquerda : "Quando dois caminhos se cruzam e tudo faz sentido. Better Together celebra a harmonia dos encontros, das presenças que preenchem e do amor que se revela nos detalhes. Joias que traduzem a beleza de viver ao lado de quem torna cada momento mais especial."}
                </p>

                <img
                    src={imagemDireita ? imagemDireita : ""}
                    class="max-w-[567px] h-auto"
                />
            </div>

            <p class="mt-8 bg-[#F4F3F0] w-full py-24 text-center text-[#C50C45] tracking-[11%] 
            text-3xl">
                {textoMeio ? textoMeio : "Better Together — porque algumas conexões fazem tudo brilhar mais."}
            </p>

            {gridImagensOne && gridImagensOne.length > 0 && (
                <a href={linkPrimeiroProduto ? linkPrimeiroProduto : ""}>
                    <div class="gap-0 mb-0 w-fit mx-auto flex flex-col md:flex-row">
                        {gridImagensOne.slice(0, 2).map((imagem, index) => (
                            <img
                                key={index}
                                src={imagem}
                                class="h-auto md:w-[635px]"
                                alt={`Imagem ${index + 1}`}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </a>
            )}

            {gridImagensTwo && gridImagensTwo.length > 0 && (
                <a href={linkSegundoProduto ? linkSegundoProduto : ""}>
                    <div class="gap-0 mb-0 md:mb-28 mt-0 w-fit mx-auto flex flex-col-reverse md:flex-row">
                        {gridImagensTwo.slice(0, 2).map((imagem, index) => (
                            <img
                                key={index}
                                src={imagem}
                                class="md:h-auto md:w-[635px]"
                                alt={`Imagem ${index + 1}`}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </a>
            )}
        </div>
    );
}
