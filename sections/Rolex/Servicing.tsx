import { Picture, Source } from "apps/website/components/Picture.tsx";
//import Icon from "../../components/ui/Icon.tsx";

import Exploring from "./Exploring.tsx";
import Nav from "../../sections/Rolex/MenuRolex.tsx";
import Footer from "../../sections/Rolex/BackToTopRolex.tsx";

function Servicing() {

    return (
        <>
            <Nav />
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
                <div class="w-full md:w-[500px] mx-auto max-md:px-[7%]">
                    <h2 class="headline50 text-[#452c1e]">Let ann</h2>
                    <p class="body20-ligth text-[#212121]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente minus eum voluptates magnam nesciunt asperiores esse debitis laborum corrupti cumque velit cum nam deleniti illo doloremque rem quibusdam autem?</p>
                </div>
            </section>

            <section class="bg-rolex-2 py-[60px] md:py-[90px]">
                <div class="w-full md:w-[500px] mx-auto pb-[60px] md:pb-[90px] max-md:px-[7%]">
                    <h2 class="headline50 text-[#452c1e]">Servicing</h2>
                    <p class="body20-ligth text-[#212121]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente minus eum voluptates magnam nesciunt asperiores esse debitis laborum corrupti cumque velit cum nam deleniti illo doloremque rem quibusdam autem?</p>
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
                <div class="w-full md:w-[500px] max-md:px-[7%] mx-auto pb-[60px] md:pb-[90px]">
                    <h2 class="headline50 text-[#452c1e]">Your author....</h2>
                    <p class="body20-ligth text-[#212121]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente minus eum voluptates magnam nesciunt asperiores esse debitis laborum corrupti cumque velit cum nam deleniti illo doloremque rem quibusdam autem?</p>
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
                <div class="w-full md:w-[500px] max-md:px-[7%] mx-auto pb-[60px] md:pb-[90px]">
                    <h2 class="headline50 text-[#452c1e]">The Rolex</h2>
                    <p class="body20-ligth text-[#212121]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente minus eum voluptates magnam nesciunt asperiores esse debitis laborum corrupti cumque velit cum nam deleniti illo doloremque rem quibusdam autem?</p>
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
                <div class="w-full md:w-[500px] max-md:px-[7%] mx-auto pb-[60px] md:pb-[90px]">
                    <h2 class="headline50 text-[#452c1e]">The two...</h2>
                    <p class="body20-ligth text-[#212121]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente minus eum voluptates magnam nesciunt asperiores esse debitis laborum corrupti cumque velit cum nam deleniti illo doloremque rem quibusdam autem?</p>
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