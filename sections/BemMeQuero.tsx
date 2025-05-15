import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    /** @description Imagem Centralizada */
    imagemCentral?: ImageWidget;
    /** @description Imagem Centralizada Mobile */
    imagemCentralMobile?: ImageWidget;
    /** @description Imagem Bem Me Quer */
    imagemBemMeQuer?: ImageWidget;
    /** @description Imagem Esquerda */
    imagemEsquerda?: ImageWidget;
    /** @description Grid de 2 Imagens*/
    gridImagensOne?: ImageWidget[];
    /** @description Grid de 2 Imagens*/
    gridImagensTwo?: ImageWidget[];
    /** @description Link página da coleção*/
    linkCollectionPage?: string;
}

export default function ToqueDeAmor(
    {
        imagemCentral,
        imagemCentralMobile,
        imagemBemMeQuer,
        imagemEsquerda,
        gridImagensOne,
        gridImagensTwo,
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

            {imagemCentral && (
                <div class="justify-center w-[1320px] mx-auto hidden md:flex">
                    <a href={linkCollectionPage ? linkCollectionPage : ""}>
                        <img
                            src={imagemCentral}
                            class="max-w-full h-auto block"
                            alt="Imagem Central"
                            loading="lazy"
                        />
                    </a>
                </div>
            )}

            {imagemCentralMobile && (
                <div class="flex justify-center mx-auto md:hidden">
                    <a href={linkCollectionPage ? linkCollectionPage : ""}>
                        <img
                            src={imagemCentralMobile}
                            class="w-screen h-auto"
                            alt="Imagem Central"
                            loading="lazy"
                        />
                    </a>
                </div>
            )}

            {imagemBemMeQuer && (
                <div class="flex justify-center mx-auto">
                    <img
                        src={imagemBemMeQuer}
                        class="max-sm:w-[800px] max-sm:max-w-max"
                        alt="Bem Me Quer"
                        loading="lazy"
                    />
                </div>
            )}

            <p
                class="
                    md:text-2xl font-light text-[#545454] md:tracking-[0.165rem] 
                    md:leading-[41px] md:w-[1212px] text-center mx-auto md:mt-5 md:mb-8
                    text-[11px] leading-[16px] tracking-[0.0756rem] w-[400px] mb-8
                    "
                style={{ fontFamily: "Montserrat, sans-serif" }}
            >
                Inspirada na brincadeira com pétalas, "Bem Me Quero", ressignifica o
                amor romântico em uma celebração do amor-próprio. Mais do que joias,
                elas simbolizam carinho, cuidado e reconexão consigo.
            </p>

            <div class="flex items-center justify-evenly w-full py-4 md:w-[1320px] mx-auto flex-col md:flex-row gap-8 md-gap-16 md:gap-0">
                <img
                    src={imagemEsquerda}
                    alt="Bem Me Quer"
                    class="md:w-[567px] md:h-[714px] w-[266px] h-[335px]"
                />

                <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    class="
                    text-[#545454] font-light md:text-2xl md:leading-[41px] 
                    md:tracking-[0.165rem] text-center md:w-[516px] w-[358px] text-[11px] 
                    leading-[16px] tracking-[0.0756rem]"
                >
                    Um gesto sutil que simboliza carinho, cuidado e reconexão consigo
                    mesma. Cada joia carrega um significado: o brilho de quem se acolhe, a
                    leveza de quem se escolhe e a força de quem se quer bem. Bem Me Quero
                    é sobre se amar primeiro, sem pressa, sem culpa — apenas com verdade.
                </p>
            </div>

            <div class="
            bg-[#f4f3f0] my-0 md:w-full mt-8 md:mt-16 mx-auto md:py-[72px]
            py-5 mb-8
            ">
                <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    class="
                        md:text-2xl text-[#545454] md:leading-[41px] md:tracking-[0.165rem] 
                        mx-auto text-center md:w-[1165px] font-light w-[351px] text-[10px] 
                        leading-[16px] tracking-[0.069rem]
                    "
                >
                    É um caminho de descoberta, de se olhar com mais carinho e de se
                    querer bem. Um lembrete delicado de que o brilho mais bonito vem de
                    dentro.
                </p>
            </div>

            {gridImagensOne && gridImagensOne.length > 0 && (
                <a href="https://www.dryzun.com.br/brinco-em-ouro-amarelo-e-branco-e-diamantes--bem-me-quer/p">
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
                <a href="https://www.dryzun.com.br/anel-ouro-amarelo-e-branco-e-diamantes--bem-me-quer/p">
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

            <h2 class="text-[#666461] font-light md:text-[55px] md:leading-[41px] 
                md:tracking-[0.928rem] md:mt-16 md:mb-20 text-center hidden md:block">
                BEM ME QUERO
            </h2>

            {imagemBemMeQuer && (
                <div class="flex justify-center mx-auto">
                    <img
                        src={imagemBemMeQuer}
                        class="max-sm:w-[800px] max-sm:max-w-max md:hidden"
                        alt="Bem Me Quer"
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
}
