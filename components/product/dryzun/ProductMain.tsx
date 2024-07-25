import { ProductDetailsPage } from "apps/commerce/types.ts";
import { useId } from "../../../sdk/useId.ts";
import { formatPrice } from "../../../sdk/format.ts";
import { useOffer } from "../../../sdk/useOffer.ts";
import { usePlatform } from "../../../sdk/usePlatform.tsx";

import Breadcrumb from "../../../components/ui/Breadcrumb.tsx";
import ImageGallerySlider from "../../../components/product/Gallery/ImageSlider.tsx";
import Buy from "./BuyButton.tsx";
import BuyCustom from "../../../islands/BuyButtoCustom.tsx";
import ShippingSimulation from "../../../islands/ShippingSimulation.tsx";
import Installments from "../../../islands/Installments.tsx";
import ProductSelector from "../ProductVariantSelector.tsx";

interface Props {
  page: ProductDetailsPage | null;
}

function ProductMain({ page }: Props) {
  const id = useId();
  const platform = usePlatform();

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const { product, breadcrumbList } = page;
  const {
    productID,
    offers,
    name = "",
    brand,
    description,
  } = product;

  const { listPrice, price } = useOffer(offers);

  //console.log("page:::::::::", page);

  const isTudor = brand?.name == "Tudor";
  const isDryzun = brand?.name == "Dryzun";

  const isCustom = name?.includes('personalizado');

  const RefId = product?.additionalProperty?.find((item: any) =>
    item.name === "RefId"
  )?.value;

  const modelo = product.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Modelo"
  )?.value;

  const moldura = product?.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Moldura"
  )?.value;

  const impermeabilidade = product?.isVariantOf?.additionalProperty?.find((
    item: any,
  ) => item.name === "Impermeabilidade à Água")?.value;

  const enrolamento = product?.isVariantOf?.additionalProperty?.find((
    item: any,
  ) => item.name === "Coroa de Enrolamento")?.value;

  const bracelete = product?.isVariantOf?.additionalProperty?.find((
    item: any,
  ) => item.name === "Bracelete")?.value;

  return (
    <section id={id} class="container-2">
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />

      <div class="flex items-start flex-wrap max-md:gap-4">
        <div class="w-full md:w-[60%] flex items-start gap-4">
          <ImageGallerySlider page={page} />
        </div>
        <div
          id="pdp-info"
          class="h-full md:pl-8 gap-2 flex flex-col items-start w-full md:w-[40%]"
        >
          <p class="text-sm not-italic font-normal leading-[normal] text-[#666461]">
            {brand?.name}
          </p>
          <h1 class="text-[22px] not-italic font-normal leading-[normal] text-[#333]">
            {name}
          </h1>
          <p class="text-xs not-italic font-normal leading-[normal] tracking-[0.6px] text-[#999793]">
            Ref {RefId}
          </p>
          {listPrice != price && !isTudor ?
            <div class="mt-2 mb-[-10px] text-[22px] not-italic font-normal leading-[normal] text-[#999793] text-sm line-through decoration-[#999793]">
              {formatPrice(listPrice, offers?.priceCurrency)}
            </div>
            :
            <></>}

          {!isCustom && (
            <>
              <div class="mt-2 text-[22px] not-italic font-normal leading-[normal] text-[#333]">
                {formatPrice(price, offers?.priceCurrency)}
              </div>
              <div class="text-[13px] not-italic font-normal leading-[normal] tracking-[0.65px] text-[#666461]">
                <Installments isTudor={isTudor} productID={productID} />

                {/* Sku Selector */}
                <div class="mt-4 sm:mt-6">
                  <ProductSelector product={product} />
                </div>

              </div>
            </>
          )}

          {isCustom && <BuyCustom product={product} />}

          {!isCustom && <div class="w-full flex flex-wrap justify-start items-center py-2">
            <span class="flex items-center mr-10 max-md:mb-4 text-[13px] not-italic font-semibold leading-[normal] text-[#597CB2]">
              <svg
                class="mr-1"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 1.54248C0.5 0.72998 1.15625 0.0424805 2 0.0737305H6.65625C7.1875 0.0737305 7.6875 0.26123 8.0625 0.63623L13.5625 6.13623C14.3438 6.91748 14.3438 8.19873 13.5625 8.97998L9.40625 13.1362C8.625 13.9175 7.34375 13.9175 6.5625 13.1362L1.0625 7.63623C0.6875 7.26123 0.5 6.76123 0.5 6.22998V1.54248ZM4 2.54248C3.4375 2.54248 3 3.01123 3 3.54248C3 4.10498 3.4375 4.54248 4 4.54248C4.53125 4.54248 5 4.10498 5 3.54248C5 3.01123 4.53125 2.54248 4 2.54248Z"
                  fill="#597CB2"
                />
              </svg>
              10%OFF pagando à vista
            </span>
            <span class="flex items-center text-[13px] not-italic font-semibold leading-[normal] text-[#597CB2]">
              <svg
                class="mr-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.51123C10.0625 2.57373 6.9375 2.57373 4.96875 4.47998L6.25 5.76123C6.46875 5.97998 6.53125 6.32373 6.40625 6.60498C6.3125 6.88623 6.03125 7.04248 5.71875 7.04248H2H1.71875C1.3125 7.04248 0.96875 6.72998 0.96875 6.29248V2.29248C0.96875 2.01123 1.15625 1.72998 1.4375 1.60498C1.71875 1.51123 2.03125 1.57373 2.25 1.76123L3.5625 3.07373C6.28125 0.38623 10.7188 0.38623 13.4375 3.10498C14.1875 3.85498 14.75 4.76123 15.0938 5.72998C15.25 6.22998 15 6.82373 14.4688 7.01123C13.9375 7.16748 13.375 6.91748 13.1875 6.38623C12.9688 5.69873 12.5625 5.07373 12 4.51123ZM15.9688 9.79248V10.0425V10.0737V13.7925C15.9688 14.105 15.8125 14.3862 15.5312 14.5112C15.25 14.605 14.9062 14.5425 14.6875 14.3237L13.4062 13.0425C10.6562 15.73 6.25 15.73 3.53125 13.0112C2.78125 12.23 2.21875 11.355 1.875 10.3862C1.6875 9.85498 1.96875 9.29248 2.5 9.10498C3 8.91748 3.5625 9.19873 3.75 9.72998C4 10.4175 4.40625 11.0425 4.9375 11.605C6.875 13.5425 10.0312 13.5425 11.9688 11.6362L10.6875 10.3237C10.4688 10.1362 10.4062 9.79248 10.5312 9.51123C10.6562 9.22998 10.9375 9.04248 11.2188 9.04248H14.9688H15H15.2188C15.6562 9.04248 15.9688 9.38623 15.9688 9.79248Z"
                  fill="#597CB2"
                />
              </svg>
              Ganhe 10% de Cashback
            </span>
          </div>
          }
          {!isCustom && <Buy page={page} />}

          <div class="mt-2">
            <p class="flex mb-5 items-center flex-wrap text-[13px] not-italic font-normal leading-[normal] text-[#333]">
              <a
                class="flex items-center max-md:mt-2 no-underline hover:text-[#81A1D4] transition-[0.3s]"
                href="https://api.whatsapp.com/send?phone=5511992093271"
                target="_blank"
              >
                <svg
                  class="mr-1 text-[#81A1D4]"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="#81A1D4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.375 2.10498C13.6875 3.41748 14.5 5.13623 14.5 7.01123C14.5 10.8237 11.3125 13.9487 7.46875 13.9487C6.3125 13.9487 5.1875 13.6362 4.15625 13.105L0.5 14.0425L1.46875 10.4487C0.875 9.41748 0.53125 8.22998 0.53125 6.97998C0.53125 3.16748 3.65625 0.0424805 7.46875 0.0424805C9.34375 0.0424805 11.0938 0.79248 12.375 2.10498ZM7.46875 12.7612C10.6562 12.7612 13.3125 10.1675 13.3125 7.01123C13.3125 5.44873 12.6562 4.01123 11.5625 2.91748C10.4688 1.82373 9.03125 1.22998 7.5 1.22998C4.3125 1.22998 1.71875 3.82373 1.71875 6.97998C1.71875 8.07373 2.03125 9.13623 2.59375 10.0737L2.75 10.2925L2.15625 12.4175L4.34375 11.8237L4.53125 11.9487C5.4375 12.48 6.4375 12.7612 7.46875 12.7612ZM10.6562 8.44873C10.8125 8.54248 10.9375 8.57373 10.9688 8.66748C11.0312 8.72998 11.0312 9.07373 10.875 9.47998C10.7188 9.88623 10.0312 10.2612 9.71875 10.2925C9.15625 10.3862 8.71875 10.355 7.625 9.85498C5.875 9.10498 4.75 7.35498 4.65625 7.26123C4.5625 7.13623 3.96875 6.32373 3.96875 5.44873C3.96875 4.60498 4.40625 4.19873 4.5625 4.01123C4.71875 3.82373 4.90625 3.79248 5.03125 3.79248C5.125 3.79248 5.25 3.79248 5.34375 3.79248C5.46875 3.79248 5.59375 3.76123 5.75 4.10498C5.875 4.44873 6.25 5.29248 6.28125 5.38623C6.3125 5.47998 6.34375 5.57373 6.28125 5.69873C5.96875 6.35498 5.59375 6.32373 5.78125 6.63623C6.46875 7.79248 7.125 8.19873 8.15625 8.69873C8.3125 8.79248 8.40625 8.76123 8.53125 8.66748C8.625 8.54248 8.96875 8.13623 9.0625 7.97998C9.1875 7.79248 9.3125 7.82373 9.46875 7.88623C9.625 7.94873 10.4688 8.35498 10.6562 8.44873Z"
                    fill="currentColor"
                  />
                </svg>
                Fale conosco
              </a>
            </p>

            <p class="flex items-center flex-wrap text-[13px] not-italic font-normal leading-[normal] text-[#333]">
              <img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/238e9399-54f4-4932-8af9-937bd516552d" alt="Lojas Dryzun" width="30" height="30" loading="lazy" class="w-auto max-h-[15px] mr-1" />Frete grátis - Entrega com seguro
            </p>

          </div>

          {platform === "vtex" && (
            <ShippingSimulation
              items={[
                {
                  id: Number(product.sku),
                  quantity: 1,
                  seller: "1",
                },
              ]}
            />
          )}

          <a href="/institucional/nossas-lojas" class="my-2 flex items-center max-md:mt-2 no-underline text-[13px] not-italic font-normal leading-[normal] text-[#333] hover:text-[#81A1D4] transition-[0.3s]">
            <img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/d21b13f0-e28a-4f68-bcde-fa359c7170cf" alt="Lojas Dryzun" width="30" height="30" loading="lazy" class="w-auto max-h-[15px] mr-1" />Localizar uma Boutique
          </a>

          <div class="w-full border-t-[#E0DEDA] border-t border-solid mt-2">
            <div class="w-full rounded-none collapse collapse-arrow border-b-[#E0DEDA] border-b border-solid">
              <input type="checkbox" name="my-accordion-2" />
              <h3 class="flex items-center collapse-title after:text-[#666461] pl-3 py-4 block text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
                Descrição
              </h3>
              <div class="collapse-content pl-3">
                <div class="text-sm not-italic font-normal leading-[150%] text-[#333]" dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </div>

            <div
              class={`w-full rounded-none border-b-[#E0DEDA] border-b border-solid ${isTudor ? "collapse collapse-arrow" : "hidden"
                }`}
            >
              <input type="checkbox" name="my-accordion-2" />
              <h3 class="flex items-center collapse-title after:text-[#666461] pl-3 py-4 block text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
                especificações
              </h3>
              <div class="collapse-content gap-[15px] flex flex-col pl-3 text-sm not-italic font-normal leading-[150%] text-[#333]">
                <p class="flex items-baseline text-sm not-italic font-normal leading-[150%]">
                  <b class="block max-md:max-w-[115px] min-w-[115px] md:min-w-[180px] mr-5">
                    Modelo:
                  </b>{" "}
                  {modelo}
                </p>
                <p class="flex items-baseline text-sm not-italic font-normal leading-[150%]">
                  <b class="block max-md:max-w-[115px] min-w-[115px] md:min-w-[180px] mr-5">
                    Moldura:
                  </b>{" "}
                  {moldura}
                </p>
                <p class="flex items-baseline text-sm not-italic font-normal leading-[150%]">
                  <b class="block max-md:max-w-[115px] min-w-[115px] md:min-w-[180px] mr-5">
                    Coroa de Enrolamento:
                  </b>{" "}
                  {enrolamento}
                </p>
                <p class="flex items-baseline text-sm not-italic font-normal leading-[150%]">
                  <b class="block max-md:max-w-[115px] min-w-[115px] md:min-w-[180px] mr-5">
                    Impermeabilidade à Água:
                  </b>{" "}
                  {impermeabilidade}
                </p>
                <p class="flex items-baseline text-sm not-italic font-normal leading-[150%]">
                  <b class="block max-md:max-w-[115px] min-w-[115px] md:min-w-[180px] mr-5">
                    Bracelete:
                  </b>{" "}
                  {bracelete}
                </p>
              </div>
            </div>

            {isDryzun && (
              <div class="w-full rounded-none collapse collapse-arrow">
                <input type="checkbox" name="my-accordion-2" />
                <h3 class="flex items-center collapse-title after:text-[#666461] pl-3 py-4 block text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
                  A experiência Dryzun
                </h3>
                <div class="collapse-content pl-3">
                  <p class="text-sm not-italic font-normal leading-[150%] text-[#333]">
                    A experiência Dryzun é um verdadeiro mergulho em um mundo de beleza e sofisticação. A marca, reconhecida por suas joias de alta qualidade e design diferenciado, traz em suas coleções peças únicas que encantam à primeira vista.
                  </p>
                  <img class="w-full h-auto" width={150} height={50} src="https://dryzun.vteximg.com.br/arquivos/ids/167091/embalagem.png?v=638417805545100000" alt="embalagem dryzun" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductMain;
