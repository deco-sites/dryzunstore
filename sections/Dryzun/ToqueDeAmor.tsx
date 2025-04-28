import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    /** @description Imagem Centralizada */
    imagemCentral?: ImageWidget;
    /** @description Texto com Montserrat */
    textoMontserrat?: string;
    /** @description Imagem à Esquerda */
    imagemEsquerda?: ImageWidget;
    /** @description Texto à Direita */
    textoDireita?: string;
    /** @description Texto Centralizado */
    textoCentralizado?: string;
    /** @description Grid de 4 Imagens (2x2) */
    gridImagens?: ImageWidget[];
    /** @description Imagem Final Centralizada */
    imagemFinal?: ImageWidget;
}

export default function ToqueDeAmor(
    {
        imagemCentral,
        textoMontserrat,
        imagemEsquerda,
        textoDireita,
        textoCentralizado,
        gridImagens,
        imagemFinal,
    }: Props,
) {
    return (
        <div class="container-2 py-8">
            {/* Imagem Central */}
            {imagemCentral && (
                <div class="flex justify-center mb-5">
                    <img
                        src={imagemCentral}
                        class="max-w-full h-auto"
                        alt="Imagem Central"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Texto Montserrat */}
            {textoMontserrat && (
                <p class="font-montserrat text-center mb-5">{textoMontserrat}</p>
            )}

            {/* Seção Esquerda/Direita */}
            {(imagemEsquerda || textoDireita) && (
                <div class="flex flex-col md:flex-row gap-4 mb-5">
                    {imagemEsquerda && (
                        <div class="flex-1">
                            <img
                                src={imagemEsquerda}
                                class="w-full h-auto"
                                alt="Imagem Esquerda"
                                loading="lazy"
                            />
                        </div>
                    )}
                    {textoDireita && (
                        <div class="flex-1 font-montserrat">
                            {textoDireita}
                        </div>
                    )}
                </div>
            )}

            {/* Texto Centralizado */}
            {textoCentralizado && (
                <p class="font-montserrat text-center mb-5">{textoCentralizado}</p>
            )}

            {/* Grid 2x2 */}
            {gridImagens && gridImagens.length > 0 && (
                <div class="grid grid-cols-2 gap-4 mb-5">
                    {gridImagens.slice(0, 4).map((imagem, index) => (
                        <img
                            key={index}
                            src={imagem}
                            class="w-full h-auto"
                            alt={`Imagem ${index + 1}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            )}

            {/* Imagem Final */}
            {imagemFinal && (
                <div class="flex justify-center mb-5">
                    <img
                        src={imagemFinal}
                        class="max-w-full h-auto"
                        alt="Imagem Final"
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
}