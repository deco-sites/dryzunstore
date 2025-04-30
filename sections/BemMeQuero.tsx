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
  /** @description Grid de 4 Imagens (2x2) */
  gridImagens?: ImageWidget[];
}

export default function ToqueDeAmor(
  {
    imagemCentral,
    imagemCentralMobile,
    imagemBemMeQuer,
    imagemEsquerda,
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
        <div class="justify-center w-[1320px] mx-auto hidden md:flex">
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

      {imagemCentralMobile && (
        <div class="flex justify-center mx-auto md:hidden">
          <a href="https://www.dryzun.com.br/s?q=toque+de+amor">
            <img
              src={imagemCentralMobile}
              class="max-w-full h-auto"
              alt="Imagem Central"
              loading="lazy"
            />
          </a>
        </div>
      )}

      {imagemBemMeQuer && (
        <div class="flex justify-center mx-auto md:hidden">
          <img
            src={imagemBemMeQuer}
            class=""
            alt="Bem Me Quer"
            loading="lazy"
          />
        </div>
      )}

      <p
        class="text-center mt-9 mb-6 text-[#545454] text-sm md:text-lg"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Inspirada na brincadeira com pétalas, “Bem Me Quero”, ressignifica o
        amor romântico em uma celebração do amor-próprio. Mais do que joias,
        elas simbolizam carinho, cuidado e reconexão consigo.
      </p>

      <div class="flex items-center justify-between w-full py-4 md:w-[1320px]">
        <img src={imagemEsquerda} alt="Bem Me Quer" />

        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          class="text-sm md:text-lg text-[#545454] text-center"
        >
          Um gesto sutil que simboliza carinho, cuidado e reconexão consigo
          mesma. Cada joia carrega um significado: o brilho de quem se acolhe, a
          leveza de quem se escolhe e a força de quem se quer bem. Bem Me Quero
          é sobre se amar primeiro, sem pressa, sem culpa — apenas com verdade.
        </p>
      </div>

      <div class="bg-[#f4f3f0] my-0 md:w-[1320px] mt-16 mx-auto w-full">
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          class="text-center text-[#545454] md:text-lg py-8 w-[320px] text-xs leading-[150%] md:leading-normal md:w-[640px] mx-auto my-16 font-light"
        >
          É um caminho de descoberta, de se olhar com mais carinho e de se
          querer bem. Um lembrete delicado de que o brilho mais bonito vem de
          dentro.
        </p>
      </div>

      {gridImagens && gridImagens.length > 0 && (
        <a href="https://www.dryzun.com.br/pingente-em-ouro-amarelo-toque-de-amor/p">
          <div class="grid md:grid-cols-2 gap-0 mb-28 w-fit mx-auto grid-cols-1">
            {gridImagens.slice(0, 4).map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                class={`h-auto ${index === 2 ? "hidden md:block" : ""}`}
                alt={`Imagem ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </a>
      )}

      {imagemBemMeQuer && (
        <div class="flex justify-center mx-auto md:hidden">
          <img
            src={imagemBemMeQuer}
            class=""
            alt="Bem Me Quer"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
