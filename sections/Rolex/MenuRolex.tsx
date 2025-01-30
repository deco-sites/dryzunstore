import { useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";

const pathname = globalThis?.window?.location?.pathname;
const hash = pathname?.split("/rolex/")[1] ?? "";

const script = (pageType: string) => {
  const scriptDigitalDataLayer = document.createElement("script");
  scriptDigitalDataLayer.type = "text/javascript";
  scriptDigitalDataLayer.text = `
      var digitalDataLayer = {
          environment: {
              environmentVersion: "V7",
              coBrandedVersion: "Bespoke",
          },
          page: {
              pageType: "${pageType}",
          },        
      };
  `;
  document.head.appendChild(scriptDigitalDataLayer);

  // Adiciona o segundo script externo (Adobe DTM)
  const scriptAdobeDTM = document.createElement("script");
  scriptAdobeDTM.async = true;
  scriptAdobeDTM.src =
    "https://dryzun.vteximg.com.br/arquivos/adobe-launch.js";
  document.head.appendChild(scriptAdobeDTM);
};

export interface Props {
  /**
   * @description Nome da página
   */
  pageType?: string;
}

export default function MenuRolex({ pageType }: Props) {
  const [open, setOpen] = useState(false);

  // console.log("pageType", pageType);

  return (
    <div class="w-full bg-gradiente">
      <div class="2bbb rolex-container h-[110px] flex justify-between items-center relative z-[11]">
        <a class="relative z-[49]" href="/rolex/descubra">
          <Image
            loading="lazy"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c516f136-3fb7-46cd-b574-a6db3a867887"
            alt="logo Rolex"
            width={120}
            height={60}
          />
        </a>
        <ul class="hidden xxl:flex gap-[1.4vw] xxxl:gap-[2.5vw]">
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("descubra") ? "text-[#61bd93]" : "text-[#fff]"
              }`}
              href="/rolex/descubra"
            >
              A Rolex
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("relogios-rolex")
                  ? "text-[#61bd93]"
                  : "text-[#fff]"
              }`}
              href="/rolex/relogios-rolex"
            >
              Relógios Rolex
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("novos-modelos")
                  ? "text-[#61bd93]"
                  : "text-[#fff]"
              }`}
              href="/rolex/novos-modelos"
            >
              Novos modelos 2024
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("a-arte-da-relojoaria")
                  ? "text-[#61bd93]"
                  : "text-[#fff]"
              }`}
              href="/rolex/a-arte-da-relojoaria"
            >
              A arte da relojoaria
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("manutencao") ? "text-[#61bd93]" : "text-[#fff]"
              }`}
              href="/rolex/manutencao"
            >
              Manutenção
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("o-mundo-rolex")
                  ? "text-[#61bd93]"
                  : "text-[#fff]"
              }`}
              href="/rolex/o-mundo-rolex"
            >
              O mundo Rolex
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("dryzun") ? "text-[#61bd93]" : "text-[#fff]"
              }`}
              href="/rolex/dryzun"
            >
              Rolex na Dryzun
            </a>
          </li>
          <li>
            <a
              class={`fixed16 hover:text-[#61bd93] ${
                hash.includes("contato") || hash.includes("contato/formulario")
                  ? "text-[#61bd93]"
                  : "text-[#fff]"
              }`}
              href="/rolex/contato-sao-paulo"
            >
              Contato
            </a>
          </li>
        </ul>

        <div class="w-full rolex-container hidden max-xxl:flex flex-col absolute z-[9] right-0 px-[7%] pb-[35px] top-[0] bg-[#fff] bg-gradiente text-[#fff]">
          <div class="relative top-[45px] flex justify-end items-center w-full pr-[18px]">
            <span
              onClick={() => setOpen(!open)}
              class="transition-[.3s] duration-[.3s] flex items-center text-right fixed16 text-[#fff] hover:text-[#61bd93] cursor-pointer"
            >
              Menu
              <svg
                class={`ml-2 transition-rotate-[.3s] duration-rotate-[.3s] ${
                  open ? "rotate-[180deg]" : "rotate-[0deg]"
                }`}
                width={13}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 15 15"
                style="enable-background:new 0 0 15 15;"
                xml:space="preserve"
              >
                <path
                  id="icons_x2F_play"
                  fill="currentColor"
                  d="M7.5,11.6L0,3.4h15L7.5,11.6z"
                />
              </svg>
            </span>
          </div>
          <div
            class={`w-full transition-[.6s] duration-[.6s] ${
              !open
                ? "max-h-0 overflow-hidden opacity-0"
                : "pt-[50px] max-h-[1000px] opacity-100"
            }`}
          >
            <div
              class={`transition-[1s] duration-[1s] ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] mt-[60px] ${
                  hash.includes("descubra") ? "text-[#61bd93]" : "text-[#fff]"
                }`}
                href="/rolex/descubra"
              >
                A Rolex
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("relogios-rolex")
                    ? "text-[#61bd93]"
                    : "text-[#fff]"
                }`}
                href="/rolex/relogios-rolex"
              >
                Relógios Rolex
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("novos-modelos")
                    ? "text-[#61bd93]"
                    : "text-[#fff]"
                }`}
                href="/rolex/novos-modelos"
              >
                Novos modelos 2024
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("a-arte-da-relojoaria")
                    ? "text-[#61bd93]"
                    : "text-[#fff]"
                }`}
                href="/rolex/a-arte-da-relojoaria"
              >
                A arte da relojoaria
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("manutencao") ? "text-[#61bd93]" : "text-[#fff]"
                }`}
                href="/rolex/manutencao"
              >
                Manutenção
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("o-mundo-rolex")
                    ? "text-[#61bd93]"
                    : "text-[#fff]"
                }`}
                href="/rolex/o-mundo-rolex"
              >
                O mundo Rolex
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("dryzun") ? "text-[#61bd93]" : "text-[#fff]"
                }`}
                href="/rolex/dryzun"
              >
                Rolex na Dryzun
              </a>

              <a
                class={`block py-[20px] fixed16-menu hover:text-[#61bd93] ${
                  hash.includes("contato") ? "text-[#61bd93]" : "text-[#fff]"
                }`}
                href="/rolex/contato-sao-paulo"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${script})("${pageType}");` }}
      />
    </div>
  );
}
