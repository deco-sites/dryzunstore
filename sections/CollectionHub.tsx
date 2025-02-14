import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "../components/ui/Icon.tsx";

function CollectionHub() {
  return (
    <>
      <div class="w-full">
        <Picture preload={true}>
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-m126333-0010_1606jva_006-portrait.jpg"
            width={780}
            height={520}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-hub-cover-m126333-0010_1606jva_006.jpg"
            width={2880}
            height={750}
          />
          <img
            class="object-cover w-full h-full"
            loading="lazy"
            src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-hub-cover-m126333-0010_1606jva_006.jpg"
            alt="relógios rolex em São Paulo – Dryzun"
          />
        </Picture>
      </div>
      <section class="rolex-container gap-8 flex max-md:flex-col justify-between items-start pt-[60px] md:pt-[90px] bg-rolex-3">
        <h1 class="w-full md:w-[45%] headline50 text-[#452c1e]">
          Relógios Rolex na Dryzun em São Paulo
        </h1>
        <div class="w-full md:w-[48%] md:pr-[8%]">
          <p class="body20-ligth text-[#212121]">
            <strong>
              Os relógios apresentados abaixo fazem parte do catálogo oficial da
              Rolex e não correspondem necessariamente ao estoque disponível.
            </strong>
          </p>
          <p>
            Se desejar informações sobre um relógio em particular, entre em
            contato conosco.
          </p>
        </div>
      </section>
      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <a href="/rolex/novos-modelos" class="block rolex-container">
          <h2 class="headline36 text-[#452c1e] text-left mb-5">
            Novos modelos 2024
          </h2>

          <div class="overflow-hidden">
            <Picture preload={false}>
              <Source
                media="(max-width: 767px)"
                fetchPriority="auto"
                src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-gmt-master-ii-the-harmony-of-contrasts-hub-main-push-portrait.jpg"
                width={780}
                height={1040}
              />
              <Source
                media="(min-width: 768px)"
                fetchPriority="auto"
                src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-2024-gmt-master-ii-the-harmony-of-contrasts-hub-main-push.jpg"
                width={2880}
                height={750}
              />
              <img
                class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                loading="lazy"
                src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-2024-gmt-master-ii-the-harmony-of-contrasts-hub-main-push.jpg"
                alt="relógios rolex em São Paulo – Dryzun"
              />
            </Picture>
          </div>
        </a>
      </section>

      <section class="bg-rolex-3 pt-4">
        <div class="rolex-container">
          <p class="fixed16 text-[#452c1e] text-left mb-2">
            Novos modelos 2024
          </p>
          <h2 class="headline36 text-[#452c1e] text-left">
            A harmonia dos contrastes
          </h2>
          <a class="secondary-cta justify-start" href="/rolex/novos-modelos">
            Saiba mais
            <Icon
              class=""
              size={22}
              id="ChevronRight"
              strokeWidth={3}
            />
          </a>
        </div>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container">
          <h2 class="headline36 text-[#452c1e] text-left mb-5">
            Relógios Clássicos
          </h2>
          <div class="flex flex-wrap justify-start gap-[60px_5px] md:gap-[40px_5px]">
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/day-date">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-day-date-m228235-0055_2402jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-day-date.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-day-date.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Day-Date</h4>
            </a>
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/datejust">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-datejust-m126234-0051_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-datejust.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-datejust.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Datejust</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/lady-datejust"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-lady-datejust-m279138RBR-0015_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-lady-datejust.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-lady-datejust.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Lady-Datejust</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/sky-dweller"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-sky-dweller-m336935-0008_2312jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-sky-dweller.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivosrolex-watches-sky-dweller.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Sky-Dweller</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/oyster-perpetual"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-oyster-perpetual-m124300-0001_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-oyster-perpetual.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-oyster-perpetual.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Oyster Perpetual</h4>
            </a>
          </div>
        </div>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <div class="rolex-container">
          <h2 class="headline36 text-[#452c1e] text-left mb-5">
            Relógios Profissionais
          </h2>
          <div class="flex flex-wrap justify-start gap-[60px_5px] md:gap-[40px_5px]">
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/air-king">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-air-king-m126900-0001_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-air-king.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-air-king.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Air-King</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/gmt-master-ii"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-gmt-master-II-m126710GRNR-0003_2312jva_001_RVB-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-gmt-master-II.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-gmt-master-II.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">GMT-Master II</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/sea-dweller"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-sea-dweller-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-sea-dweller.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-sea-dweller.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Sea-Dweller</h4>
            </a>
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/submariner">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-submariner-m126603-0001_2210jva_0011-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-submariner.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-submariner.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Submariner</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/cosmograph-daytona"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-cosmograph-daytona-m126506-0001_2301jva_002-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-cosmograph-daytona.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-cosmograph-daytona.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Cosmograph Daytona</h4>
            </a>
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/yacht-master"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-yacht-master-m226658-0002_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-yacht-master.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-yacht-master.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Yacht-Master</h4>
            </a>
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/explorer">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-explorer-m124273-0001_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-explorer.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-explorer.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Explorer</h4>
            </a>
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/deepsea">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-ddeepsea-m136668lb-0001_2312jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-deepsea.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-deepsea.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">Deepsea</h4>
            </a>
          </div>
        </div>
      </section>

      <section class="bg-rolex-3 pt-[60px] md:pt-[90px] pb-[60px] md:pb-[90px]">
        <div class="rolex-container">
          <h2 class="headline36 text-[#452c1e] text-left mb-5">
            Perpetual
          </h2>
          <div class="flex flex-wrap justify-start gap-[60px_5px] md:gap-[40px_5px]">
            <a
              class="w-[49%] h-full block md:w-[33%]"
              href="/rolex/perpetual-1908"
            >
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-new-watches-2024-1908-m52508-0006_2301jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-1908.jpg"
                    width={810}
                    height={540}
                  />
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://dryzun.vteximg.com.br/arquivos/rolex-watches-1908.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              <h4 class="body24 text-[#452c1e]">1908</h4>
            </a>
          </div>
        </div>
      </section>

      {
        /* <Exploring />
      <Footer /> */
      }
    </>
  );
}

export default CollectionHub;
