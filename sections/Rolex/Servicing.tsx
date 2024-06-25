import { Picture, Source } from "apps/website/components/Picture.tsx";
//import Icon from "../../components/ui/Icon.tsx";

import Exploring from "./Exploring.tsx";
import Footer from "../../sections/Rolex/BackToTopRolex.tsx";

function Servicing() {

    return (
        <>            
            <div class="w-full">
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                        height={520} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/rolex-servicing-cover_sav_1910dh_001-landscape.jpg?v=123" width={2880}
                        height={750} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/rolex-servicing-cover_sav_1910dh_001-landscape.jpg?v=123"
                        alt="rolex watches" />
                </Picture>
            </div>

            <section class="pt-[60px] md:pt-[90px] rolex-container gap-8 flex max-md:flex-col justify-between items-start bg-rolex-3">
                <h1 class="w-full md:w-[44%] headline50 text-[#452c1e]">Serviço de manutenção e conserto de relógios Rolex na Dryzun</h1>
                <p class="w-full md:w-[48%] body20-ligth text-[#212121] md:pr-[8%]">
                    Os relógios Rolex são projetados e concebidos para durar. Desde a concepção de um Rolex até o momento em que o relógio sai das oficinas, cada etapa de desenvolvimento e fabricação obedece a uma única exigência fundamental: a qualidade. Assim, cada relógio estampado com a coroa pode cumprir plenamente suas funções sem limite de tempo e viver várias vidas, passando de geração em geração.
                </p>
            </section>

            <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
                <div class="rolex-container">
                    <Picture preload={false}>
                        <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                            height={780} />
                        <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/RO7C68~1.JPG" width={2000}
                            height={940} />
                        <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/RO7C68~1.JPG"
                            alt="rolex watches" />
                    </Picture>
                </div>
            </section>

            <section class="bg-rolex-3 py-[60px] md:py-[90px]">
                <div class="w-full md:w-[600px] mx-auto max-md:px-[7%]">
                    <h2 class="headline50 text-[#452c1e]">Deixe um especialista guiá-lo</h2>
                    <p class="mt-6 body20-ligth text-[#212121]">Como a manutenção é feita com intervalos de vários anos, fazemos questão de dar atenção redobrada ao seu relógio. A [Nome do distribuidor] é um centro de serviço autorizado Rolex e compromete-se a oferecer-lhe um serviço pós-venda de excelência. Graças à exigência e ao know-how de nossos relojoeiros, o seu relógio Rolex pode conservar, ao longo do tempo, tanto a sua excelente confiabilidade quanto seu brilho impecável.</p>
                </div>
            </section>

            <section class="bg-rolex-2 py-[60px] md:py-[90px]">
                <div class="w-full md:w-[600px] mx-auto pb-[60px] md:pb-[90px] max-md:px-[7%]">
                    <h2 class="headline50 text-[#452c1e]">A manutenção do seu Rolex na Dryzun</h2>
                    <p class="mt-6 body20-ligth text-[#212121]">A Dryzun tem orgulho em fazer parte da rede mundial de relojoeiros treinados pela Rolex, cuidadosamente selecionados graças ao seu rigoroso profissionalismo e know-how. Nós seguimos o procedimento de manutenção definido pela Rolex, desenvolvido para garantir que, ao deixar o ateliê da Rolex, o relógio ofereça as mesmas características funcionais e estéticas que apresentava no momento da compra.</p>
                </div>

                <div class="rolex-container-2">
                    <Picture preload={false}>
                        <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                            height={780} />
                        <Source media="(min-width: 768px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/5f71b7f2-98ec-442a-a721-b1c01e9f8dd0" width={2000}
                            height={1100} />
                        <img class="object-cover w-full h-full" loading="lazy" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/5f71b7f2-98ec-442a-a721-b1c01e9f8dd0"
                            alt="rolex watches" />
                    </Picture>
                </div>
            </section>

            <div class="w-full bg-rolex-3 py-[60px] md:py-[90px]">
                <div class="w-full md:w-[600px] max-md:px-[7%] mx-auto pb-[60px] md:pb-[90px]">
                    <img width={240} height={120} src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/5be3574c-cd51-419b-8f3d-981bac6201eb" alt="rolex autorizado" />
                    <h2 class="my-6 headline50 text-[#452c1e]">O seu centro de serviço autorizado</h2>
                    <p class="body20-ligth text-[#212121]">Na vanguarda da tecnologia, nossos centros possuem relojoeiros formados segundo critérios de excelência rigorosos e regularmente avaliados. Desde o ajuste do comprimento de uma pulseira à revisão completa de um relógio, todas as operações relativas à manutenção de um relógio Rolex podem ser confiadas ao distribuidor Dryzun.</p>
                </div>
                <div class="rolex-container-2">
                    <Picture preload={true}>
                        <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                            height={520} />
                        <Source media="(min-width: 768px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/f70fd28d-4e78-48d5-9ba8-96e2925aa736" width={2880}
                            height={1100} />
                        <img class="object-cover w-full h-full" loading="lazy" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/f70fd28d-4e78-48d5-9ba8-96e2925aa736"
                            alt="rolex watches" />
                    </Picture>
                </div>
            </div>

            <div class="w-full bg-rolex-3 pb-[60px] md:pb-[90px]">
                <div class="w-full md:w-[600px] max-md:px-[7%] mx-auto pb-[60px] md:pb-[90px]">
                    <h2 class="headline50 text-[#452c1e]">O procedimento da manutenção Rolex</h2>
                    <p class="my-6 body20-ligth text-[#212121]">O procedimento de manutenção definido pela Rolex foi desenvolvido para garantir que, ao deixar o ateliê, o relógio ofereça as mesmas características funcionais e estéticas que apresentava no momento da compra. Cada mecanismo passa por uma revisão completa e cada caixa e pulseira são meticulosamente polidas para restaurar o brilho. A precisão cronométrica e a impermeabilidade são rigorosamente testadas a fim de garantir o alto padrão de qualidade e confiabilidade que se espera de um relógio Rolex.
                    </p>
                    <a class="primary-cta bg-rolex-1 w-fit hover:bg-rolex-1" href="/rolex/procedimento-de-manutencao">Descubra mais</a>
                </div>
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                        height={520} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/rolex-servicing-2301_rolex_sav_retailers_175_controle-final_fermoir_v2-landscape.jpg?v=123" width={2880}
                        height={1100} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/rolex-servicing-2301_rolex_sav_retailers_175_controle-final_fermoir_v2-landscape.jpg?v=123"
                        alt="rolex watches" />
                </Picture>
            </div>

            <section class="bg-rolex-3 pb-[60px] md:pb-[90px]">
                <div class="w-full md:w-[600px] max-md:px-[7%] mx-auto pb-[60px] md:pb-[90px]">
                    <h2 class="headline50 text-[#452c1e]">A garantia de serviço de dois anos</h2>
                    <p class="mt-6 body20-ligth text-[#212121]">Após um serviço completo, o seu Rolex fica coberto por uma Garantia de Serviço de dois anos. Essa garantia exclui quaisquer danos ou deteriorações resultantes de acidentes ou de uma utilização inadequada do relógio. Qualquer intervenção efetuada por terceiros sem autorização da Rolex ou a utilização de quaisquer peças ou acessórios não fabricados pela Rolex tem como consequência a anulação da Garantia de Serviço.</p>
                </div>

                <div class="rolex-container-2">
                    <Picture preload={false}>
                        <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                            height={780} />
                        <Source media="(min-width: 768px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c65a694f-36ba-4029-ac3e-ec6b67663650" width={2000}
                            height={1100} />
                        <img class="object-cover w-full h-full" loading="lazy" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c65a694f-36ba-4029-ac3e-ec6b67663650"
                            alt="rolex watches" />
                    </Picture>
                </div>
            </section>

            <div class="w-full">
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/" width={780}
                        height={520} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/rolex-servicing-sav_1910dh_005-landscape.jpg?v=123" width={2880}
                        height={1100} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/rolex-servicing-sav_1910dh_005-landscape.jpg?v=123"
                        alt="rolex watches" />
                </Picture>
            </div>
            <Exploring />
            <Footer />
        </>
    )
}

export default Servicing;