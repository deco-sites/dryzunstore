import { Picture, Source } from "apps/website/components/Picture.tsx";
import Clock from "../../islands/Clock.tsx";
import Icon from "../../components/ui/Icon.tsx";

function Contact() {
  return (
    <>
      <div class="w-full">
        <Picture preload={true}>
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/88633717-24f5-47b7-82b7-505b0e5bdb29"
            width={780}
            height={520}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/37242ad6-6a20-415a-84bf-37d6f0043a6f"
            width={2880}
            height={750}
          />
          <img
            class="object-cover w-full h-full"
            loading="lazy"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/37242ad6-6a20-415a-84bf-37d6f0043a6f"
            alt="fale com a Dryzun em São Paulo – distribuidor oficial de relógios Rolex"
          />
        </Picture>
      </div>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container flex justify-between items-start max-md:flex-col">
          <div class="w-full md:w-[45%]">
            <h1 class="headline50 text-[#452c1e]">
              Fale com a Dryzun em São Paulo, seu distribuidor oficial Rolex
            </h1>
          </div>
          <div class="w-full md:w-[50%] md:pr-[13%]">
            <p class="body20-ligth text-[#212121]">
              <strong>
                Com perícia, know-how técnico e equipamentos especiais, nós
                garantimos a autenticidade de cada peça do seu relógio Rolex.
              </strong>{" "}
              Teremos o prazer de esclarecer as suas dúvidas e ajudá-lo a fazer
              uma escolha que durará a vida toda. Por favor, informe seus dados
              e indique o meio de contato de sua preferência. Nós lhe
              responderemos o mais rapidamente possível.
            </p>
            <a
              class="secondary-cta justify-start"
              href="/rolex/contato/formulario"
            >
              Enviar uma mensagem{" "}
              <Icon
                class=""
                size={22}
                id="ChevronRight"
                strokeWidth={3}
              />
            </a>
          </div>
        </div>
      </section>

      <section class="rolex-container max-md:flex-col-reverse flex items-center bg-rolex-3 py-[60px] md:py-[90px]">
        <div class="w-full md:w-[65%] md:h-[688px] overflow-hidden">
          <img
            class="hidden md:block w-full"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/1622248b-69cd-406b-aaec-76f9e70368b7"
            alt="fale com a Dryzun em São Paulo – distribuidor oficial de relógios Rolex"
          />

          <img
            class="md:hidden w-full"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/d1c275a6-96ea-4d25-9dce-cf03830426a3"
            alt="fale com a Dryzun em São Paulo – distribuidor oficial de relógios Rolex"
          />
        </div>
        <div class="w-full md:w-[35%] h-auto max-md:mb-5 md:h-[688px] bg-white flex flex-col justify-center p-6 md:pl-[80px] gap-2">
          <p class="legend16 text-[#452c1e]">Distribuidor oficial Rolex</p>
          <h3 class="mb-4 headline30 text-[#452c1e]">
            Dryzun
          </h3>
          <p class="fixed16-ligth text-[#212121]">
            Shopping Patio Higienópolis
          </p>
          <p class="fixed16-ligth text-[#212121]">
            Avenida Higienópolis 618 Arco 446/447
          </p>
          <p class="fixed16-ligth text-[#212121]">01238-000</p>
          <p class="fixed16-ligth text-[#212121]">São Paulo</p>
          <p class="fixed16-ligth text-[#212121]">São Paulo</p>
          <p class="fixed16-ligth text-[#212121]">Brasil</p>
          <div class="fixed16 mt-4">
            <Clock />
          </div>
        </div>
      </section>

      <section class="w-full">
        <Picture preload={true}>
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/418002ba-5c03-4bd9-82ec-dab79ddba227"
            width={740}
            height={840}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/9f863bbe-bed9-437c-a208-82f9c4d5d2f2"
            width={2880}
            height={1700}
          />
          <img
            class="object-cover w-full h-full"
            loading="lazy"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/9f863bbe-bed9-437c-a208-82f9c4d5d2f2"
            alt="fale com a Dryzun em São Paulo - distribuidor oficial de relógios Rolex"
          />
        </Picture>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <a href="/rolex/contato/formulario" class="block rolex-container">
          <h3 class="headline36 text-[#452c1e] text-left mb-5">Contato</h3>
          <div class="overflow-hidden">
            <Picture preload={false}>
              <Source
                media="(max-width: 767px)"
                fetchPriority={"auto"}
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/e1960e68-91e2-4adf-9498-3d74ada84c6e"
                width={430}
                height={590}
              />
              <Source
                media="(min-width: 768px)"
                fetchPriority={"auto"}
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/ced309b9-4fc2-4b06-8083-782d220f1203"
                width={2400}
                height={800}
              />
              <img
                class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                loading={"lazy"}
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/ced309b9-4fc2-4b06-8083-782d220f1203"
                alt="fale com a Dryzun em São Paulo – distribuidor oficial de relógios Rolex"
              />
            </Picture>
          </div>
        </a>
      </section>
      <section class="bg-rolex-3 pt-4 pb-[60px] md:pb-[90px]">
        <a href="/rolex/contato/formulario" class="block rolex-container">
          <h3 class="headline36 text-[#452c1e] text-left">
            Mensagem
          </h3>
          <span class="secondary-cta justify-start">
            Enviar uma mensagem{" "}
            <Icon
              class=""
              size={22}
              id="ChevronRight"
              strokeWidth={3}
            />
          </span>
        </a>
      </section>
    </>
  );
}

export default Contact;
