import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "../../components/ui/Icon.tsx";

import Exploring from "./Exploring.tsx";
import Nav from "../../sections/Rolex/MenuRolex.tsx";
import Footer from "../../sections/Rolex/BackToTopRolex.tsx";

function WorldOfRolex() {

    return (
        <>
            <Nav />
            <div class="w-full">
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-cover-lemans19js_1338_r-portrait.jpg" width={780}
                        height={520} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-cover-lemans19js_1338_r-landscape.jpg" width={2880}
                        height={750} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-cover-lemans19js_1338_r-landscape.jpg"
                        alt="rolex watches" />
                </Picture>
            </div>

            <section class="pt-[60px] md:pt-[90px] rolex-container gap-8 flex max-md:flex-col justify-between items-center bg-rolex-3">
                <h1 class="w-full md:w-[40%] headline50 text-[#452c1e]">O mundo Rolex</h1>
                <p class="w-full md:w-[48%] body20-ligth text-[#212121]">
                    <b>Por quase um século, a Rolex desenvolveu parcerias com um variado e extraordinário leque de talentos de inúmeras disciplinas. </b>
                    A marca está associada à exploração, aos esportes de elite e às artes, bem como a diversos e eventos e organizações.
                </p>
            </section>

            <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
                <div class="rolex-container">
                    <Picture preload={false}>
                        <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-voyage-bg_02-portrait.jpg" width={780}
                            height={780} />
                        <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-voyage-bg_02-landscape.jpg" width={2400}
                            height={800} />
                        <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-voyage-bg_02-landscape.jpg"
                            alt="rolex watches" />
                    </Picture>
                </div>
            </section>

            <section class="bg-rolex-3 pt-4">
                <div class="rolex-container">
                    <p class="fixed16 text-[#452c1e] text-left mb-2">Publicado em 9 de Abril, 2024</p>
                    <h2 class="headline36 text-[#452c1e] text-left">
                        Publicado em 9 de Abril, 2024
                    </h2>
                    <p class="w-full md:w-[48%] body20-ligth text-[#212121]">
                        Hans Wilsdorf estava intimamente convencido da capacidade do ser humano para inovar e para buscar a excelência. Quase 120 após a criação da marca, o espírito de seu fundador está mais do que nunca presente, desde a fabricação dos relógios até os compromissos da Rolex pelo mundo.
                    </p>
                    <a class="secondary-cta justify-start" href="#">
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

            <section class="bg-rolex-3 py-[60px] md:py-[90px]">
                <div class="rolex-container">
                    <div class="flex flex-wrap justify-start gap-[60px_5px] md:gap-[100px_8px]">
                        <a class="w-full h-full block md:w-[49%]" href="">
                            <Picture preload={false}>
                                <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-sailGP-m126333-0022_2301es_001_xl-portrait.jpg" width={780}
                                    height={520} />
                                <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-sailGP-m126333-0022_2301es_001_xl-landscape.jpg" width={1200}
                                    height={800} />
                                <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-sailGP-m126333-0022_2301es_001_xl-landscape.jpg"
                                    alt="rolex watches" />
                            </Picture>
                            <p class="fixed16 text-[#452c1e] mt-3">
                                Publicado em 9 de Abril, 2024
                            </p>
                            <h4 class="headline36 text-[#452c1e]">SailGP</h4>
                            <p class="w-full body20-ligth text-[#212121]">
                                A Rolex é Presenting Partner mundial e Relógio Oficial exclusivo do campeonato SailGP, uma regata na qual os veleiros mais rápidos da categoria competem entre si. O torneio acontece em mares do mundo inteiro, com catamarãs de foil F50 tão velozes que parecem voar sobre as águas.
                            </p>
                            <span class="secondary-cta justify-start">
                                Saiba mais
                                <Icon
                                    class=""
                                    size={22}
                                    id="ChevronRight"
                                    strokeWidth={3}
                                />
                            </span>
                        </a>
                        <a class="w-full h-full block md:w-[49%]" href="">
                            <Picture preload={false}>
                                <Source media="(max-width: 767px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-RGSSJ-aach23an_6602_r-portrait.jpg" width={780}
                                    height={520} />
                                <Source media="(min-width: 768px)" fetchPriority="auto" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-RGSSJ-aach23an_6602_r-landscape.jpg" width={1200}
                                    height={800} />
                                <img class="object-cover w-full h-full" loading="lazy" src="https://dryzun.vteximg.com.br/arquivos/world-of-rolex-RGSSJ-aach23an_6602_r-landscape.jpg"
                                    alt="rolex watches" />
                            </Picture>
                            <p class="fixed16 text-[#452c1e] mt-3">
                                Publicado em 9 de Abril, 2024
                            </p>
                            <h4 class="headline36 text-[#452c1e]">Rolex Grand Slam of Show Jumping</h4>
                            <p class="w-full body20-ligth text-[#212121]">
                                Amplamente considerado o maior de todos os desafios do hipismo, o Rolex Grand Slam of Show Jumping premia o cavaleiro que vence três Grand Prix consecutivos nos quatro Majors: The Dutch Masters em ’s-Hertogenbosch, o CSIO Spruce Meadows ‘Masters’ em Calgary, o CHIO de Aachen e o CHI de Genebra.
                            </p>
                            <span class="secondary-cta justify-start">
                                Saiba mais
                                <Icon
                                    class=""
                                    size={22}
                                    id="ChevronRight"
                                    strokeWidth={3}
                                />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <Exploring />
            <Footer />
        </>
    )
}

export default WorldOfRolex;