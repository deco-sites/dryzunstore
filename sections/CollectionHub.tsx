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
      <section class="rolex-container gap-8 flex max-md:flex-col justify-between items-start pt-[60px] md:pt-[90px] bg-rolex-3 items-center">
        <h1 class="w-full md:w-[45%] headline50 text-[#452c1e]">
          Relógios Rolex na Dryzun <br /> em São Paulo
        </h1>

        <div class="w-full md:w-[48%] md:pr-[8%]">
          <p class="body20-ligth text-[#212121] mb-2.5">
            <strong>
              Os relógios apresentados abaixo fazem parte do catálogo oficial da Rolex e não correspondem necessariamente ao estoque disponível.
            </strong>
          </p>

          <p>
            Se desejar informações sobre um relógio em particular, entre em contato conosco.
          </p>
        </div>
      </section>
      <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
        <a href="/rolex/novos-modelos" class="block rolex-container">
          <h2 class="headline36 text-[#452c1e] text-left mb-5">
            Novos modelos 2025
          </h2>

          <div class="overflow-hidden">
            <Picture preload={false}>
              <Source
                media="(max-width: 767px)"
                fetchPriority="auto"
                src="https://assets.decocache.com/dryzunstore/a9da9603-44cc-4849-9c71-ed43cf195bbc/rolex-watches-watches-new-watches-2025-the-land-dweller_m127334-0001_2501fj_003-portrait.jpg"
                width={780}
                height={1040}
              />

              <Source
                media="(min-width: 768px)"
                fetchPriority="auto"
                src="https://assets.decocache.com/dryzunstore/917e8a13-d30a-4917-8450-b84189e75814/rolex-watches-new-watches-2025-the-land-dweller_m127334-0001_2501fj_003-landscape.jpg"
                width={2880}
                height={750}
              />

              <img
                class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                loading="lazy"
                src="https://assets.decocache.com/dryzunstore/917e8a13-d30a-4917-8450-b84189e75814/rolex-watches-new-watches-2025-the-land-dweller_m127334-0001_2501fj_003-landscape.jpg"
                alt="relógios rolex em São Paulo – Dryzun"
              />
            </Picture>
          </div>
        </a>
      </section>

      <section class="bg-rolex-3 pt-4">
        <div class="rolex-container">
          <p class="fixed16 text-[#452c1e] text-left mb-2">
            Novos modelos 2025
          </p>
          
          <h2 class="headline36 text-[#452c1e] text-left">
            Abrindo novos horizontes
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
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/land-dweller">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/6c2d0c27-60c7-4ee2-aaad-6ec8692b7fa9/rolex-watches-land-dweller-m127334-0001_2503-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/afb92fec-04fa-42f1-b519-80a22b64058a/rolex-watches-land-dweller.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/afb92fec-04fa-42f1-b519-80a22b64058a/rolex-watches-land-dweller.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Land-Dweller
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/day-date">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/4cd011b1-427f-4865-9205-cba3eb925a98/rolex-watches-day-date-m228235-0055_2402jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/c63d537a-d27f-42f2-97a8-7912014249ff/rolex-watches-day-date.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/c63d537a-d27f-42f2-97a8-7912014249ff/rolex-watches-day-date.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Day-Date
              </h4>
            </a>
            
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/sky-dweller">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/70139a3b-1f97-4157-beb0-ef44abec824c/rolex-watches-sky-dweller-m336935-0008_2312jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/572d9d29-c145-443d-b832-9cb10be51f70/rolex-watches-sky-dweller.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/572d9d29-c145-443d-b832-9cb10be51f70/rolex-watches-sky-dweller.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              
              <h4 class="body24 text-[#452c1e]">
                Sky-Dweller
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/lady-datejust">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/da7bf087-92d1-4fc4-9900-40fc8cd6b53e/rolex-watches-lady-datejust-m279138rbr-0015_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/02ba071d-6b52-4821-a651-c244bfc4790d/rolex-watches-lady-datejust.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/02ba071d-6b52-4821-a651-c244bfc4790d/rolex-watches-lady-datejust.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
             
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              
              <h4 class="body24 text-[#452c1e]">
                Lady-Datejust
              </h4>
            </a>
            
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/datejust">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/08f60a95-9db5-4d5b-b032-076ebde9f538/rolex-watches-datejust-m126234-0051_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/e47b737a-327b-46dd-9338-0b1427884a23/rolex-watches-datejust.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/e47b737a-327b-46dd-9338-0b1427884a23/rolex-watches-datejust.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Datejust
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/oyster-perpetual">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/524d6bf5-f578-4b2e-b26a-ed1ffcc06105/rolex-watches-oyster-perpetual-m134300-0006_2503-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/161c0716-7aef-4268-a45d-b1f4f4f9a307/rolex-watches-oyster-perpetual.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/161c0716-7aef-4268-a45d-b1f4f4f9a307/rolex-watches-oyster-perpetual.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Oyster Perpetual
              </h4>
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
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/cosmograph-daytona">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/344527ab-8812-4d44-aca7-599fea97e3a2/rolex-watches-cosmograph-daytona-m126508-0008_2503-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/9930d747-7aa2-49f4-aede-4e8ba66e2526/rolex-watches-cosmograph-daytona.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/9930d747-7aa2-49f4-aede-4e8ba66e2526/rolex-watches-cosmograph-daytona.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>
              
              <h4 class="body24 text-[#452c1e]">
                Cosmograph Daytona
              </h4>
            </a>
            
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/submariner">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/05767b5e-7c1a-49f3-abc3-0d52c03ebbd0/rolex-watches-submariner-m126603-0001_2210jva_0011-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/2cf03132-f1e0-497d-838e-87b8ed3c4855/rolex-watches-submariner.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/2cf03132-f1e0-497d-838e-87b8ed3c4855/rolex-watches-submariner.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Submariner
              </h4>
            </a>
            
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/sea-dweller">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/a4bbf989-bb97-4b49-853d-efa96baa43f7/rolex-watches-sea-dweller-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/4d8a75b7-8323-4728-a4f9-aa69c2d9deba/rolex-watches-sea-dweller.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/4d8a75b7-8323-4728-a4f9-aa69c2d9deba/rolex-watches-sea-dweller.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Sea-Dweller
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/deepsea">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/a1ee99d4-4b66-44b9-8df0-d6030171ea15/rolex-watches-deepsea-m136668lb-0001_2312jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/aa79b88b-f023-444f-8339-0321e8b2ec99/rolex-watches-deepsea.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/aa79b88b-f023-444f-8339-0321e8b2ec99/rolex-watches-deepsea.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Deepsea
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/gmt-master-ii">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/e863d7b8-fd0f-42e4-b9eb-c98592b51c4f/rolex-watches-gmt-master-ii-m126710grnr-0003_2312jva_001_rvb-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/484927fd-3427-453c-8f78-16454718a26b/rolex-watches-gmt-master-II.jpg"
                    width={810}
                    height={540}
                  />
              
                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/484927fd-3427-453c-8f78-16454718a26b/rolex-watches-gmt-master-II.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>
              
              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                GMT-Master II
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/yacht-master">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/d051986b-2403-4f05-b6da-3610c8f9384f/rolex-watches-yacht-master-m226658-0002_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/38ede758-84a3-43e9-a28d-fc84d54de793/rolex-watches-yacht-master.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/38ede758-84a3-43e9-a28d-fc84d54de793/rolex-watches-yacht-master.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Yacht-Master
              </h4>
            </a>
            
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/explorer">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/ca9e304c-12d9-44b1-8105-27337123058f/rolex-watches-explorer-m226570-0001_2210jva_001_r-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/966dfd8a-aa1b-40bb-9330-3aaa4b4ebeea/rolex-watches-explorer.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/966dfd8a-aa1b-40bb-9330-3aaa4b4ebeea/rolex-watches-explorer.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Explorer
              </h4>
            </a>

            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/air-king">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/984dd3b1-e9c5-4b25-bf53-ff4bffd2b893/rolex-watches-air-king-m126900-0001_2210jva_001-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/faea804b-b76b-4926-bb60-beedfce87816/rolex-watches-air-king.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/faea804b-b76b-4926-bb60-beedfce87816/rolex-watches-air-king.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                Air-King
              </h4>
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
            <a class="w-[49%] h-full block md:w-[33%]" href="/rolex/perpetual-1908">
              <div class="overflow-hidden">
                <Picture preload={false}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/54387553-62ed-4a4a-a0d5-5be97fe82184/rolex-watches-1908-m52508-0008_2503-portrait.jpg"
                    width={780}
                    height={1040}
                  />

                  <Source
                    media="(min-width: 768px)"
                    fetchPriority="auto"
                    src="https://assets.decocache.com/dryzunstore/fe123f07-d9e1-40ae-8e2b-fa32a3958405/rolex-watches-1908.jpg"
                    width={810}
                    height={540}
                  />

                  <img
                    class="object-cover w-full h-full hover:scale-110 duration-[850ms]"
                    loading="lazy"
                    src="https://assets.decocache.com/dryzunstore/fe123f07-d9e1-40ae-8e2b-fa32a3958405/rolex-watches-1908.jpg"
                    alt="relógios rolex em São Paulo – Dryzun"
                  />
                </Picture>
              </div>

              <p class="legend16 text-[#452c1e] mt-3">
                Rolex
              </p>

              <h4 class="body24 text-[#452c1e]">
                1908
              </h4>
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
