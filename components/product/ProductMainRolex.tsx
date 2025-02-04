// deno-lint-ignore-file no-explicit-any
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { useId } from "../../sdk/useId.ts";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useUI } from "../../sdk/useUI.ts";

import { Head } from "$fresh/runtime.ts";

export interface Props {
  page: ProductDetailsPage | null;
}

const script = (name: string, mer: string) => {
  const scriptDigitalDataLayer = document.createElement("script");
  scriptDigitalDataLayer.type = "text/javascript";
  scriptDigitalDataLayer.text = `
      var digitalDataLayer = {
          environment: {
              environmentVersion: "V7",
              coBrandedVersion: "Bespoke",
          },
          page: {
              pageType: "model pag",
              pageFamilyName: "${name}",
          },
          products: {
              productRMC: "${mer}"
          },
      };
  `;
  document.head.appendChild(scriptDigitalDataLayer);

  // Adiciona o segundo script externo (Adobe DTM)
  const scriptAdobeDTM = document.createElement("script");
  scriptAdobeDTM.async = true;
  scriptAdobeDTM.src =
    "https://assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js";
  document.head.appendChild(scriptAdobeDTM);
};

function ProductMainRolex({ page }: Props) {
  const id = useId();
  const { displaySeloRolex } = useUI();
  displaySeloRolex.value = true;

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const { product } = page;
  const {
    offers,
    name = "",
    image = [],
  } = product;

  const { listPrice, price } = useOffer(offers);

  const width = 725;
  const height = 725;

  const mer = product.additionalProperty?.find((item: any) =>
    item.name === "RefId"
  )?.value;

  const materia = product.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Material"
  )?.value;

  const refId = product.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Reference (Referência)"
  )?.value;

  const urlOtimized = (image[0]?.url!.split(`${refId}`)[0] + `-725-auto`)
    .replace("/-725", "-725");

  const aspectRatio = `${width} / ${height}`;

  /** infos */
  const model = product.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Spec_ModelCase (Caixa do Modelo)"
  )?.value;

  const textWhats =
    `https://api.whatsapp.com/send?phone=5511992986118&text=Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20${name}%20-%20(${refId})`;

  const handleClick = (eventName: string) => {
    if (typeof globalThis !== 'undefined') {
      const satellite = (globalThis as any)._satellite;

      if (satellite?.track) {
        satellite.track(eventName); 
      }
    }
  };

  return (
    <section
      id={id}
      class="bg-white relative rolex-container flex max-md:flex-col-reverse justify-center items-center"
    >
      <Head>
        <meta
          name="keywords"
          content={`Rolex ${name}, ${name}, relógios Rolex ${name}, Rolex ${name} à venda`}
        />
        
        <script src="https://dryzun.vteximg.com.br/arquivos/adobe-launch.js"></script>
      </Head>
      
      <div class="max-md:w-full md:absolute left-[7%] md:left-[8%] grid gap-3 max-md:mt-5">
        <p class="body24 text-[#452C1E]">Rolex</p>
        <h1 class="headline50 text-[#452C1E] md:ml-[-1px] max-w-full">
          {name}
        </h1>
        <p class="body20-ligth text-[#212121]">{model}</p>
        <div class="flex items-center body20-ligth text-[#212121] mt-[-2px]">
          {formatPrice(price, offers?.priceCurrency)}
          <div class="ml-3 group relative border p-0.5 rounded-[50%] border-solid border-[#212121] cursor-pointer before:content-[''] before:absolute before:mt-[-6px] before:border-b-[7px] before:hidden hover:before:block before:border-b-[#fff] before:border-x-[10px] before:border-x-[rgba(0,0,0,0)] before:border-solid before:left-[-2px] before:top-[28px]">
            <svg
              height="11"
              width="11"
              viewBox="0 0 11 11"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m6.08 8.59.85.36-.17.34c-.03.08-.11.21-.19.38-.1.19-.24.39-.41.59-.18.2-.4.37-.66.51-.27.15-.6.23-.97.23-.41 0-.74-.09-1-.27-.21-.14-.45-.44-.45-1 0-.21.04-.44.11-.68.06-.21.13-.42.19-.6l1.41-4.05h-1.33l.26-.93h3.2l-1.97 5.72c-.05.15-.1.3-.15.46-.03.13-.05.24-.05.35 0 .05.01.07.02.09.01 0 .02.01.05.01.08 0 .18-.04.28-.11.13-.1.26-.21.37-.34.12-.13.22-.26.3-.4.08-.15.13-.26.17-.34zm1.32-8.28c-.21-.2-.47-.31-.77-.31s-.56.11-.76.31-.31.48-.31.78.11.56.31.77.47.31.76.31.56-.11.77-.31c.2-.21.31-.48.31-.77 0-.3-.11-.57-.31-.78z">
              </path>
            </svg>
            <div class="invisible group-hover:visible absolute left-[-125px] md:left-[-50px] top-0 pt-7">
              <p class="relative rounded-lg flex w-[300px] md:w-[453px] justify-center items-center gap-2.5 p-5 bg-white fixed14-ligth text-black leading-[22.4px]">
                Todos os preços representam os preços de venda ao público
                recomendados pela Rolex, com ICMS incluso. Os preços podem ser
                modificados a qualquer momento, sem aviso prévio.
              </p>
            </div>
          </div>
        </div>

        <div className="justify-center md:justify-start gap-[30px] md:max-w-[380px] flex flex-wrap calls my-6">
          <a
            onClick={() => handleClick('contactCall')}
            href="tel:+551138234100"
            class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]"
          >
            <svg
              class="md:mr-3"
              width="36px"
              height="36px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="phone-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <path
                  d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z"
                  id="Path"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                </path>
              </g>
            </svg>
            +55 11 3823 4100
          </a>
          
          <a
            onClick={() => handleClick('whatsappContact')}
            target="_blank"
            href={textWhats}
            class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]"
          > 
            <svg
              width="40px"
              height="40px"
              class="md:mr-3"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="whatsapp-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <g
                  id="whatsapp"
                  transform="translate(13, 13)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <path
                    d="M7.55395683,6.11510791 C7.55395683,6.25899281 7.55395683,6.4028777 7.48201439,6.47482014 C7.26618705,6.83453237 6.90647482,7.05035971 6.54676259,7.12230216 C6.18705036,7.1942446 5.89928058,7.12230216 5.53956835,6.97841727 C5.25179856,6.83453237 4.96402878,6.69064748 4.67625899,6.54676259 C4.17266187,6.18705036 3.66906475,5.75539568 3.30935252,5.25179856 C3.23741007,5.10791367 3.09352518,4.96402878 3.02158273,4.74820144 C2.87769784,4.5323741 2.8057554,4.24460432 2.73381295,4.02877698 C2.6618705,3.95683453 2.6618705,3.81294964 2.6618705,3.74100719 C2.6618705,3.38129496 2.8057554,3.02158273 3.09352518,2.8057554 C3.23741007,2.6618705 3.52517986,2.58992806 3.74100719,2.6618705 C3.95683453,2.8057554 4.02877698,3.09352518 4.10071942,3.30935252 C4.17266187,3.45323741 4.24460432,3.66906475 4.24460432,3.88489209 C4.24460432,4.02877698 4.10071942,4.24460432 3.95683453,4.31654676 C3.88489209,4.46043165 3.88489209,4.5323741 3.95683453,4.60431655 C4.31654676,5.25179856 4.89208633,5.75539568 5.53956835,5.97122302 C5.68345324,6.04316547 5.75539568,6.04316547 5.75539568,5.97122302 C5.89928058,5.82733813 6.04316547,5.53956835 6.18705036,5.4676259 C6.47482014,5.32374101 6.69064748,5.4676259 6.97841727,5.61151079 C7.1942446,5.75539568 7.48201439,5.89928058 7.55395683,6.11510791 Z M10,4.96402878 C10,7.69784173 7.76978417,9.92805755 5.03597122,9.92805755 C4.24460432,9.92805755 3.38129496,9.71223022 2.6618705,9.35251799 L0,10 L0.71942446,7.3381295 C0.287769784,6.61870504 0.071942446,5.75539568 0.071942446,4.96402878 C0.071942446,2.23021583 2.30215827,0 5.03597122,0 C7.76978417,0 10,2.23021583 10,4.96402878 Z M9.0647482,4.89208633 C9.0647482,2.6618705 7.26618705,0.863309353 5.03597122,0.863309353 C2.8057554,0.863309353 1.00719424,2.6618705 1.00719424,4.89208633 C1.00719424,5.61151079 1.22302158,6.33093525 1.58273381,6.97841727 L1.65467626,7.12230216 L1.22302158,8.63309353 L2.8057554,8.27338129 L2.94964029,8.34532374 C3.66906475,8.70503597 4.31654676,8.92086331 5.03597122,8.92086331 C7.26618705,8.92086331 9.0647482,7.12230216 9.0647482,4.89208633 Z"
                    id="Shape"
                  >
                  </path>
                </g>
              </g>
            </svg>
            Chat
          </a>
          
          <a
            href="#contact_pdp"
            class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]"
          >
            <svg
              class="md:mr-3"
              width="36px"
              height="36px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="mail-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <g
                  id="icons/plus"
                  transform="translate(13, 14)"
                  fill="#452C1E"
                  fill-rule="nonzero"
                >
                  <g id="mail">
                    <path
                      d="M0,0 L10,0 L10,0.0666666667 L5.06666667,3.86666667 L0,0 Z M5.06666667,5.33333333 L0,1.53333333 L0,8 L10,8 L10,1.6 L5.06666667,5.33333333 Z"
                      id="Shape"
                    >
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            Mensagem
          </a>
          
          
          <a
            onClick={() => handleClick('findStore')}
            target="_blank"
            href="https://www.google.com.br/maps/place/Dryzun+%E2%80%93+Distribuidor+Oficial+Rolex%C2%AE/@-23.5418018,-46.6604362,17z/data=!3m2!4b1!5s0x94ce583b88281a8f:0xb01df47ddddce501!4m5!3m4!1s0x94ce583bbe6ec0d3:0x4ff825db7c6e673a!8m2!3d-23.5418067!4d-46.6582475?shorturl=1"
            class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]"
          >
            <svg
              width="40px"
              height="40px"
              class="md:mr-3"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="get-direction-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <g
                  id="icons/plus"
                  transform="translate(13, 13)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <g id="location" transform="translate(0, -0)">
                    <polygon
                      id="Path"
                      points="0 5.84666667 10 0 4.90666667 10 3.58666667 6.60666667"
                    >
                    </polygon>
                  </g>
                </g>
              </g>
            </svg>
            Encontre
          </a>
        </div>

        <a
          class="flex items-center px-0 py-[15px] rounded-none border-t border-solid border-[#e5e7eb] text-[#452C1E] hover:text-[#127749] text-sm font-bold"
          href="#disponibilidade_modelo"
        >
          Disponibilidade do modelo

          <div class="ml-3 group relative border p-0.5 rounded-[50%] border-solid border-[#212121] cursor-pointer before:content-[''] before:absolute before:mt-[-6px] before:border-b-[7px] before:hidden hover:before:block before:border-b-[#fff] before:border-x-[10px] before:border-x-[rgba(0,0,0,0)] before:border-solid before:left-[-2px] before:top-[28px]">
            <svg
              height="11"
              width="11"
              viewBox="0 0 11 11"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m6.08 8.59.85.36-.17.34c-.03.08-.11.21-.19.38-.1.19-.24.39-.41.59-.18.2-.4.37-.66.51-.27.15-.6.23-.97.23-.41 0-.74-.09-1-.27-.21-.14-.45-.44-.45-1 0-.21.04-.44.11-.68.06-.21.13-.42.19-.6l1.41-4.05h-1.33l.26-.93h3.2l-1.97 5.72c-.05.15-.1.3-.15.46-.03.13-.05.24-.05.35 0 .05.01.07.02.09.01 0 .02.01.05.01.08 0 .18-.04.28-.11.13-.1.26-.21.37-.34.12-.13.22-.26.3-.4.08-.15.13-.26.17-.34zm1.32-8.28c-.21-.2-.47-.31-.77-.31s-.56.11-.76.31-.31.48-.31.78.11.56.31.77.47.31.76.31.56-.11.77-.31c.2-.21.31-.48.31-.77 0-.3-.11-.57-.31-.78z">
              </path>
            </svg>
          </div>
        </a>
      </div>
      <div class="m-auto">
        <img
          alt={`rolex ${name} em ${materia}, ${mer}* - Dryzun`}
          style={{ aspectRatio }}
          src={urlOtimized}
          width={width}
          height={height}
          loading={"eager"}
          {...{ fetchPriority: "high" } as any}
        />
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${script})("${name}","${mer}");` }}
      />
    </section>
  );
}

export default ProductMainRolex;
