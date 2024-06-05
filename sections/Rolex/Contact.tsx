import { Picture, Source } from "apps/website/components/Picture.tsx";
import Clock from "../../islands/Clock.tsx"
import Icon from "../../components/ui/Icon.tsx";


function Contact() {
    return (
        <>
            <div class="w-full">
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/4a55ff88-fbeb-4bd5-bbcd-a5db70d31089" width={780}
                        height={520} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/74a18c75-732c-4aee-9cad-d2ba387fbbee" width={2880}
                        height={750} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/74a18c75-732c-4aee-9cad-d2ba387fbbee"
                        alt="rolex watches" />
                </Picture>
            </div>

            <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
                <div class="rolex-container flex justify-between items-center max-md:flex-col">
                    <div class="w-full md:w-[45%]">
                        <h1 class="headline50 text-[#452c1e]">
                        Entre em contato com a Dryzun, seu distribuidor oficial Rolex
                        </h1>
                    </div>
                    <div class="w-full md:w-[50%]">
                        <p class="body20-ligth text-[#212121]">
                        <strong>Com perícia, know-how técnico e equipamentos especiais, nós garantimos a autenticidade de cada peça do seu relógio Rolex.</strong> Teremos o prazer de esclarecer as suas dúvidas e ajudá-lo a fazer uma escolha que durará a vida toda. Por favor, informe seus dados e indique o meio de contato de sua preferência. Nós lhe responderemos o mais rapidamente possível.
                        </p>
                        <a class="secondary-cta justify-start" href="/rolex/contato/formulario">
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

            <section class="rolex-container-2 max-md:flex-col-reverse flex items-center bg-rolex-3 py-[60px] md:py-[90px]">
                <div class="w-full md:w-[50%]">
                <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.8645606174746!2d-46.65918762749966!3d-23.542243194350554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583bbe6ec0d3%3A0x4ff825db7c6e673a!2sDryzun%20%E2%80%93%20Distribuidor%20Oficial%20Rolex%C2%AE!5e0!3m2!1spt-BR!2sbr!4v1717616487593!5m2!1spt-BR!2sbr" width="800" height="688" style="border:0;" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="w-full h-auto max-md:mb-5 md:h-[688px] bg-white flex flex-col justify-center md:w-[50%] p-6 md:pl-[80px] gap-4">
                    <p class="legend16 text-[#452c1e]">Distribuidor oficial Rolex</p>
                    <p class="headline30 text-[#452c1e]">SHOPPING PATIO HIGIENÓPOLIS</p>
                    <p class="fixed16-ligth text-[#212121]">Avenida Higienópolis 618 Arco 446/447</p>
                    <p class="fixed16-ligth text-[#212121]">São Paulo | São Paulo</p>
                    <p class="fixed16-ligth text-[#212121]">Brasil</p>
                    <div class="fixed16">
                        <Clock />
                    </div>
                    <a target="_blank" class="flex items-center py-1 fixed14 text-[12px] font-[bold] text-[#452c1e]" href="tel:1138234100">
                        <img class="mr-2" width={20} src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b918e292-1021-40f2-ab46-b688342d0508" alt="icon" />
                        (11) 3823 4100
                    </a>
                    <a target="_blank" class="flex items-center py-1 fixed14 text-[12px] font-[bold] text-[#452c1e]" href="https://api.whatsapp.com/send?phone=5511992986118">
                        <img class="mr-2" width={20} src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b686900c-f905-49dc-beb5-07641f6b57b6" alt="icon" />
                        WhatsApp
                    </a>
                    <a target="_blank" class="flex items-center py-1 fixed14 text-[12px] font-[bold] text-[#452c1e]" href="https://www.google.com.br/maps/place/Dryzun+%E2%80%93+Distribuidor+Oficial+Rolex%C2%AE/@-23.5418018,-46.6604362,17z/data=!3m2!4b1!5s0x94ce583b88281a8f:0xb01df47ddddce501!4m5!3m4!1s0x94ce583bbe6ec0d3:0x4ff825db7c6e673a!8m2!3d-23.5418067!4d-46.6582475?shorturl=1">
                        <img class="mr-2" width={20} src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/cb03b802-89d9-4714-a60c-7b902ab46e61" alt="icon" />
                        Itinerário
                    </a>
                    <a class="flex items-center py-1 fixed14 text-[12px] font-[bold] text-[#452c1e]" href="/rolex/contato/formulario">
                        <img class="mr-2" width={20} src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/378afd24-2500-4452-a0de-e9de4e7ede9c" alt="icon" />
                        Enviar mensagem para loja
                    </a>
                </div>
            </section>

            <section class="w-full">
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/7296866d-e236-4ed1-b809-d3314e31db12" width={740}
                        height={840} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/e8169a58-9e3b-48c2-a1c3-29d4740b1b1a" width={2880}
                        height={1700} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/e8169a58-9e3b-48c2-a1c3-29d4740b1b1a"
                        alt="rolex watches" />
                </Picture>
            </section>

            <section class="bg-rolex-3 pt-[60px] md:pt-[90px]">
                <a href="/rolex/contato/formulario" class="block rolex-container">
                    <h3 class="headline36 text-[#452c1e] text-left mb-5">Contato</h3>
                    <Picture preload={false}>
                        <Source
                            media="(max-width: 767px)"
                            fetchPriority={"auto"}
                            src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-appointment-push-a7404009-portrait.jpg?v=123"
                            width={430}
                            height={590}
                        />
                        <Source
                            media="(min-width: 768px)"
                            fetchPriority={"auto"}
                            src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-appointment-push-a7404009.jpg"
                            width={2400}
                            height={800}
                        />
                        <img
                            class="object-cover w-full h-full"
                            loading={"lazy"}
                            src="https://dryzun.vteximg.com.br/arquivos/discover-rolex-appointment-push-a7404009.jpg"
                            alt="rolex watches"
                        />
                    </Picture>
                </a>
            </section>
            <section class="bg-rolex-3 pt-4 pb-[60px] md:pb-[90px]">
                <a href="/rolex/contato/formulario" class="block rolex-container">
                    <h3 class="headline36 text-[#452c1e] text-left">
                    Enviar uma mensagem
                    </h3>
                    <span class="secondary-cta justify-start">
                        contato{" "}
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
