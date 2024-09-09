import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy title
 */
interface Props {
  /**
   * @description Imagem principal Desktop
   */
  image?: ImageWidget;
  /**
   * @description Imagem principal Mobile
   */
  imageMobile?: ImageWidget;
  /**
   * @description Imagem do contato
   */
  imageContact?: ImageWidget;
  /**
   * @description Titulo
   */
  title?: string;
  /**
   * @description Descrição
   */
  text?: string;
  /**
   * @description Telefone (ex:00 0000-0000)
   */
  tel?: string;

  /**
   * @description link gerado para whatsapp
   */
  whatsapp?: string;
}

function FaleConosco(
  { title, text, tel, image, imageMobile, imageContact, whatsapp }: Props,
) {
  function formatPhoneNumber(str: string) {
    const cleanedNumber = str.replace(/[\s-]/g, "");
    const formattedNumber = "tel:+55" + cleanedNumber;
    return formattedNumber;
  }

  return (
    <section class="w-full mt-10">
      <div class="relative flex items-center">
        <img
          loading="lazy"
          class="hidden md:block w-full h-auto"
          width={1920}
          height={500}
          src={image}
          alt={title}
        />
        <img
          loading="lazy"
          class="md:hidden w-full h-auto"
          width={720}
          height={360}
          src={imageMobile}
          alt={title}
        />
        <div class="absolute left-0 md:left-10 max-md:bottom-0 max-w-[631px] bg-[#ffffffc4] p-[15px]">
          <h1 class="mb-2 md:mb-4 max-md:text-center text-[23px] md:text-[35px] font-medium leading-[1.1] text-[#333]">
            {title}
          </h1>
          <p class="font-medium max-md:text-center text-[15px] md:text-[19px] leading-[19px] md:leading-6 text-[#333]">
            {text}
          </p>
        </div>
      </div>

      <div class="w-full my-5 py-10 md:py-0 px-4 flex items-center justify-between max-md:flex-col">
        <div class="w-full md:w-[50%] flex items-center justify-center">
          <div>
            <h2 class="mb-5 text-[21px] md:text-3xl text-center font-medium leading-[1.1] text-[#333]">
              Entre em contato
            </h2>
            <a
              class="flex items-center py-4 text-[17px] leading-[23px] block text-[#333] no-underline"
              href={tel ? formatPhoneNumber(tel) : "+559999999999"}
            >
              <img
                class="mr-3"
                width={30}
                height={30}
                src="https://dryzun.vteximg.com.br/arquivos/atendimento-telefone.png?v=638138047783670000"
                alt="Telefone"
              />
              Ligue para {tel}
            </a>
            <a
              class="flex items-center py-4 text-[17px] leading-[23px] block text-[#333] no-underline"
              href="#concierge"
            >
              <img
                class="mr-3"
                width={30}
                height={30}
                src="https://dryzun.vteximg.com.br/arquivos/atendimento-concierge.png?v=638138121668500000"
                alt="Concierger"
              />
              Fale com o Concierge
            </a>
            <a
              class="flex items-center py-4 text-[17px] leading-[23px] block text-[#333] no-underline"
              target="_blank"
              href={whatsapp}
            >
              <img
                class="mr-3"
                width={30}
                height={30}
                src="https://dryzun.vteximg.com.br/arquivos/atendimento-whatsapp.png?v=638138047785100000"
                alt="Whatsapp"
              />
              Whatsapp
            </a>
          </div>
        </div>
        <div class="w-full md:w-[50%] flex items-center justify-center">
          <img
            loading="lazy"
            class="block w-full md:max-w-[50%] md:w-auto h-auto"
            width={100}
            height={100}
            src={imageContact}
            alt={title}
          />
        </div>
      </div>

      <div class="w-full px-4 flex flex-col items-center py-10 md:py-20 bg-[#efefef]">
        <h1 class="mb-4 text-[21px] md:text-3xl text-center text-[#333]">
          Visite nossas lojas
        </h1>
        <p class="max-w-[900px] mx-auto text-[17px] leading-6 text-center text-[#333]">
          As joias Dryzun possuem com conceito e design exclusivos. Ao longo de
          sua trajetória de mais de cinco décadas, sempre criou joias que a
          acompanhe todos os momentos da vida da mulher e do homem. Assim, a
          cada coleção peças cheias de simbologia, lúdicas e com movimento
          surgem e marcam uma geração. Venha nos visitar em nossas lojas,
          estamos presentes Shopping Iguatemi SP, Shopping Higienópolis,
          Shopping Morumbi e Shopping Ibirapuera.
        </p>
        <a
          id="concierge"
          class="after:content-['>'] after:block after:ml-2 hover:underline flex items-center mt-4 font-semibold text-[17px] leading-[23px] block text-[#333] no-underline"
          title="Ligue para 11 5099-4100"
          href="/institucional/nossas-lojas"
        >
          Encontre a loja mais próxima
        </a>
      </div>

      <div class="w-full px-4 flex flex-col items-center py-20">
        <h2 class="text-[21px] md:text-3xl font-medium leading-[1.1] text-[#333] mb-4">
          Mensagem para o concierge
        </h2>
        <a
          target="_blank"
          class="border bg-white hover:underline text-black block w-fit cursor-pointer mt-[11px] mb-0 mx-auto px-[30px] py-[15px] border-solid border-black"
          href={whatsapp}
        >
          Enviar Mensagem
        </a>
      </div>
    </section>
  );
}

export default FaleConosco;
