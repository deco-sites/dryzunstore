import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    /** @description Imagem Centralizada */
    imagemCentral?: ImageWidget;
    /** @description Texto com Montserrat */
    textoMontserrat?: string;
    /** @description Texto digital */
    textoDigital?: string;
    /** @description Texto meio */
    textoMeio?: string;
    /** @description Grid de 4 Imagens (2x2) */
    gridImagens?: ImageWidget[];
}

export default function ToqueDeAmor(
    {
        imagemCentral,
        textoMontserrat,
        textoDigital,
        textoMeio,
        gridImagens,
    }: Props,
) {
    return (
        <div class="container-2 py-8">
            <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            `}
            </style>

            {imagemCentral && (
                <div class="flex justify-center w-[1320px] mx-auto">
                    <a href="https://www.dryzun.com.br/s?q=toque+de+amor">
                        <img
                            src={imagemCentral}
                            class="max-w-full h-auto"
                            alt="Imagem Central"
                            loading="lazy"
                        />
                    </a>
                </div>
            )}

            {textoMontserrat && (
                <p class="text-center my-16 text-[#aa8a47] text-5xl font-bold tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>{textoMontserrat}</p>
            )}

            {textoDigital && (
                <p style={{ fontFamily: "Montserrat, sans-serif" }} class="text-2xl text-center text-[#545454] mb-16 mx-auto mt-0 w-[564px] h-[500px] bg-no-repeat bg-contain bg-center flex items-center bg-[url(https://dryzun.vtexassets.com/assets/vtex.file-manager-graphql/images/c3f1f913-a335-4fa5-b2b1-b5552edb0615___0914a307bb87b8e13f0c8efba8ee703e.svg)]">
                    {textoDigital}
                </p>
            )}

            {textoMeio && (
                <div class="bg-[#f4f3f0] my-0 w-[1320px] mt-16 mx-auto">
                    <p style={{ fontFamily: "Montserrat, sans-serif" }} class="text-center text-[#545454] text-lg py-8 w-[640px] mx-auto my-16 font-light">{textoMeio}</p>
                </div>
            )}

            <div class="w-min my-16 mx-auto">
                <iframe
                    width="471"
                    height="838"
                    src="https://www.youtube.com/embed/xzOyH_wF6dk"
                    title="Toque de Amor"
                    frameborder="0"
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>

            <p style={{ fontFamily: "Montserrat, sans-serif" }} class="text-[#39293d] my-0 mx-auto text-center text-lg font-extralight">
                Pingente  em ouro amarelo  Personalizado com a digital do seu filho
            </p>

            <p style={{ fontFamily: "Montserrat, sans-serif" }} class="text-[#39293d] my-6 mx-auto text-center text-lg font-extralight">
                (medindo 12mm sem corrente)
            </p>

            <p style={{ fontFamily: "Montserrat, sans-serif" }} class="text-[#39293d] my-0 mx-auto text-center text-lg font-extralight">
                Produzido sob encomenda, com prazo de 10 dias para entrega.
            </p>

            {textoMontserrat && (
                <p style={{ fontFamily: "Montserrat, sans-serif" }} class="text-center my-16 text-[#aa8a47] text-5xl font-bold tracking-wide">{textoMontserrat}</p>
            )}

            {gridImagens && gridImagens.length > 0 && (
                <a href="https://www.dryzun.com.br/pingente-em-ouro-amarelo-toque-de-amor/p">
                    <div class="grid grid-cols-2 gap-0 mb-28 w-fit mx-auto">
                        {gridImagens.slice(0, 4).map((imagem, index) => (
                            <img
                                key={index}
                                src={imagem}
                                class="h-auto"
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