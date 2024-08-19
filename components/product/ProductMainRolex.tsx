import { ProductDetailsPage } from "apps/commerce/types.ts";
import { useId } from "../../sdk/useId.ts";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useUI } from "../../sdk/useUI.ts";

import { Head } from "$fresh/runtime.ts";

export interface Props {
  page: ProductDetailsPage | null;
}

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

  const textWhats = `https://api.whatsapp.com/send?phone=5511992986118&text=Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20${name}%20-%20(${refId})`

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
        {/*     <Canonical />*/}
      </Head>
      <div class="max-md:w-full md:absolute left-[7%] md:left-[8%] grid gap-3 max-md:mt-5">
        <p class="body24 text-[#452C1E]">Rolex</p>
        <h1 class="headline50 text-[#452C1E] md:ml-[-7px] max-w-full">{name}</h1>
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
          <a href="tel:+551138234100" class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]">
            <svg class="md:mr-3" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="phone-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                <path d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path>
              </g>
            </svg>
            +55 11 3823 4100
          </a>
          <a href={textWhats} class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]">
            <svg class="md:mr-3" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="phone-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                <path d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path>
              </g>
            </svg>
            Chat
          </a>
          <a href="#contact_pdp" class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]">
            <svg class="md:mr-3" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="mail-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                <g id="icons/plus" transform="translate(13, 14)" fill="#452C1E" fill-rule="nonzero">
                  <g id="mail">
                    <path d="M0,0 L10,0 L10,0.0666666667 L5.06666667,3.86666667 L0,0 Z M5.06666667,5.33333333 L0,1.53333333 L0,8 L10,8 L10,1.6 L5.06666667,5.33333333 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </svg>
            Mensagem
          </a>
          <a target="_blank" href="https://www.google.com.br/maps/place/Dryzun+%E2%80%93+Distribuidor+Oficial+Rolex%C2%AE/@-23.5418018,-46.6604362,17z/data=!3m2!4b1!5s0x94ce583b88281a8f:0xb01df47ddddce501!4m5!3m4!1s0x94ce583bbe6ec0d3:0x4ff825db7c6e673a!8m2!3d-23.5418067!4d-46.6582475?shorturl=1" class="md:min-w-[170px] max-md:text-[0] flex items-center text-xs font-bold text-[#452C1E] hover:text-[#127749]">
            <svg class="md:mr-3" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="phone-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                <path d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path>
              </g>
            </svg>
            Encontre
          </a>

        </div>

        <a class="flex items-center px-0 py-[15px] rounded-none border-t border-solid border-[#e5e7eb] text-[#452C1E] hover:text-[#127749] text-sm font-bold" href="#disponibilidade_modelo">
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
    </section>
  );
}

export default ProductMainRolex;
