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
            {imagemCentral && (
                <div class="flex justify-center">
                    <img
                        src={imagemCentral}
                        class="max-w-full h-auto"
                        alt="Imagem Central"
                        loading="lazy"
                    />
                </div>
            )}

            {textoMontserrat && (
                <p class="text-center my-16 text-[#aa8a47] text-5xl">{textoMontserrat}</p>
            )}

            {textoDigital && (
                <p class="text-2xl text-center text-[#545454] mb-16 mx-auto mt-0 w-[564px] h-[500px] bg-no-repeat bg-contain bg-center flex items-center bg-[url(https://dryzun.vtexassets.com/assets/vtex.file-manager-graphql/images/c3f1f913-a335-4fa5-b2b1-b5552edb0615___0914a307bb87b8e13f0c8efba8ee703e.svg)]">
                    {textoDigital}
                </p>
            )}

            {textoMeio && (
                <div class="bg-[##f4f3f0] my-0 w-[1320px] mt-16 mx-auto">
                    <p class="text-center text-[#545454] text-lg py-16 w-[640px]">{textoMeio}</p>
                </div>
            )}

            {/* VIDEO */}

            <p class="text-[#39293d] my-0 mx-auto text-center text-lg">
                Pingente  em ouro amarelo  Personalizado com a digital do seu filho
            </p>

            <p class="text-[#39293d] my-6 mx-auto text-center text-lg">
                (medindo 12mm sem corrente)
            </p>

            <p class="text-[#39293d] my-0 mx-auto text-center text-lg">
                Produzido sob encomenda, com prazo de 10 dias para entrega.
            </p>

            {textoMontserrat && (
                <p class="text-center my-16 text-[#aa8a47] text-5xl">{textoMontserrat}</p>
            )}

            {gridImagens && gridImagens.length > 0 && (
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
            )}
        </div>
    );
}