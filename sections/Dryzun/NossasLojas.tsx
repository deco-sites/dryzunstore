import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy name
 */
interface StoresI {
  /**
   * @description Imagem
   */
  image?: ImageWidget;
  /**
   * @description Nome
   */
  name?: string;
  /**
   * @description Endereço
   */
  address?: string;
  /**
   * @description Telefone
   */
  tel?: string;

  /**
   * @description link gerado para E-mail
   */
  email?: string;

  /**
   * @description link gerado para Google Maps
   */
  googleMaps?: string;

  /**
   * @description link gerado para Waze
   */
  waze?: string;

  /**
   * @description iframe do Mapa
   */
  iframe?: string;
}

interface Props {
  stores?: StoresI[];
}

function NossasLojas({ stores }: Props) {
  function formatPhoneNumber(str: string) {
    const cleanedNumber = str.replace(/[\s()-]/g, "");
    const formattedNumber = "tel:+55" + cleanedNumber;
    return formattedNumber;
  }

  return (
    <section class="w-full my-20 max-md:px-4 container-2">
      <h1 class="mb-7 text-4xl text-center font-medium leading-[1.1] text-[#333]">
        Nossas Lojas
      </h1>
      <ul class="w-full flex flex-col gap-5">
        {stores &&
          stores?.map((store: StoresI) => (
            <li class="flex justify-between flex-wrap mb-10">
              <div class="w-full flex flex-col gap-4 md:w-[45%]">
                <img
                  loading="lazy"
                  class="block w-full h-auto"
                  width={100}
                  height={100}
                  src={store.image}
                  alt={store.name}
                />
                <h2 class="text-3xl font-bold leading-[1.1] text-[#333]">
                  {store.name}
                </h2>
                <p class="text-[17px] font-normal leading-[1.1] text-[#333]">
                  {store.address}
                </p>
                <a
                  class="block text-[17px] font-normal leading-[1.1] text-[#333]"
                  href={store.tel ? formatPhoneNumber(store.tel) : ""}
                >
                  (11) 3811-4100
                </a>
                <a
                  class="block text-[17px] font-normal leading-[1.1] text-[#333]"
                  href={`mailto:${store.email}`}
                >
                  {store.email}
                </a>
                <div class="flex items-center gap-4 mb-7">
                  <a href={store.googleMaps}>
                    <img
                      class="w-[40px]"
                      src="https://www.dryzun.com.br/arquivos/google-maps-logo-tdz.png?v=638138799286570000"
                      alt="Google Maps"
                    />
                  </a>
                  <a href={store.waze}>
                    <img
                      class="w-[40px]"
                      src="https://www.dryzun.com.br/arquivos/waze-tdz.png?v=638138799287030000"
                      alt="Waze"
                    />
                  </a>
                </div>
              </div>
              <div class="w-full md:w-[48%]">
                <iframe
                  class="w-full"
                  src={store.iframe}
                  width="600"
                  height="450"
                  style="border:0;"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default NossasLojas;
