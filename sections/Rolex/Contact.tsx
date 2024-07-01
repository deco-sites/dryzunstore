import { Picture, Source } from "apps/website/components/Picture.tsx";
import Clock from "../../islands/Clock.tsx"
import Icon from "../../components/ui/Icon.tsx";


function Contact() {
    return (
        <>
            <div class="hidden w-full">
                <Picture preload={true}>
                    <Source media="(max-width: 767px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/4a55ff88-fbeb-4bd5-bbcd-a5db70d31089" width={780}
                        height={520} />
                    <Source media="(min-width: 768px)" fetchPriority="auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/74a18c75-732c-4aee-9cad-d2ba387fbbee" width={2880}
                        height={750} />
                    <img class="object-cover w-full h-full" loading="lazy" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/74a18c75-732c-4aee-9cad-d2ba387fbbee"
                        alt="rolex watches" />
                </Picture>
            </div>

            <section class="hidden bg-rolex-3 pt-[60px] md:pt-[90px]">
                <div class="rolex-container flex justify-between items-start max-md:flex-col">
                    <div class="w-full md:w-[45%]">
                        <h1 class="headline50 text-[#452c1e]">
                            Entre em contato com a Dryzun, seu distribuidor oficial Rolex
                        </h1>
                    </div>
                    <div class="w-full md:w-[50%] md:pr-[13%]">
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

            <section class="max-md:flex-col-reverse flex items-center bg-rolex-3">
                <div class="w-full md:w-[65%]">
                    <iframe class="w-full md:h-[700px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.8645606174746!2d-46.65918762749966!3d-23.542243194350554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583bbe6ec0d3%3A0x4ff825db7c6e673a!2sDryzun%20%E2%80%93%20Distribuidor%20Oficial%20Rolex%C2%AE!5e0!3m2!1spt-BR!2sbr!4v1717616487593!5m2!1spt-BR!2sbr" width="800" height="688" style="border:0;" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="w-full md:w-[35%] h-auto max-md:mb-5 md:h-[688px] bg-white flex flex-col justify-center p-6 md:pl-[80px] gap-2">
                    <p class="legend16 text-[#452c1e]">Distribuidor oficial Rolex</p>
                    <h3 class="mb-4 headline30 text-[#452c1e]">Dryzun Jóias e Relógios</h3>
                    <p class="fixed16-ligth text-[#212121]">Shopping Patio Higienópolis</p>
                    <p class="fixed16-ligth text-[#212121]">Avenida Higienópolis 618 Arco 446/447</p>
                    <p class="fixed16-ligth text-[#212121]">01238-000</p>
                    <p class="fixed16-ligth text-[#212121]">São Paulo</p>
                    <p class="fixed16-ligth text-[#212121]">São Paulo</p>
                    <p class="fixed16-ligth text-[#212121]">Brasil</p>
                    <div class="fixed16 mt-4">
                        <Clock />
                    </div>
                    <a target="_blank" class="flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]" href="tel:1138234100">
                        <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
                            <svg width="40px" height="40px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="phone-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                                    <path d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path>
                                </g>
                            </svg>
                        </div>
                        +55 11 3823 4100
                    </a>
                    <a class="flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]" href="/rolex/contato/formulario">
                        <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
                            <svg width="40px" height="40px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">

                                <g id="mail-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                                    <g id="icons/plus" transform="translate(13, 14)" fill="currentColor" fill-rule="nonzero">
                                        <g id="mail">
                                            <path d="M0,0 L10,0 L10,0.0666666667 L5.06666667,3.86666667 L0,0 Z M5.06666667,5.33333333 L0,1.53333333 L0,8 L10,8 L10,1.6 L5.06666667,5.33333333 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        Enviar uma mensagem
                    </a>
                    <a target="_blank" class="flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]" href="https://www.google.com.br/maps/place/Dryzun+%E2%80%93+Distribuidor+Oficial+Rolex%C2%AE/@-23.5418018,-46.6604362,17z/data=!3m2!4b1!5s0x94ce583b88281a8f:0xb01df47ddddce501!4m5!3m4!1s0x94ce583bbe6ec0d3:0x4ff825db7c6e673a!8m2!3d-23.5418067!4d-46.6582475?shorturl=1">
                        <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
                            <svg width="40px" height="40px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="get-direction-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                                    <g id="icons/plus" transform="translate(13, 13)" fill="currentColor" fill-rule="nonzero">
                                        <g id="location" transform="translate(0, -0)">
                                            <polygon id="Path" points="0 5.84666667 10 0 4.90666667 10 3.58666667 6.60666667"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        Itinerário
                    </a>
                    <a target="_blank" class="flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]" href="https://api.whatsapp.com/send?phone=5511992986118">
                        <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
                            <svg width="40px" height="40px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="whatsapp-default" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18"></circle>
                                    <g id="whatsapp" transform="translate(13, 13)" fill="currentColor" fill-rule="nonzero">
                                        <path d="M7.55395683,6.11510791 C7.55395683,6.25899281 7.55395683,6.4028777 7.48201439,6.47482014 C7.26618705,6.83453237 6.90647482,7.05035971 6.54676259,7.12230216 C6.18705036,7.1942446 5.89928058,7.12230216 5.53956835,6.97841727 C5.25179856,6.83453237 4.96402878,6.69064748 4.67625899,6.54676259 C4.17266187,6.18705036 3.66906475,5.75539568 3.30935252,5.25179856 C3.23741007,5.10791367 3.09352518,4.96402878 3.02158273,4.74820144 C2.87769784,4.5323741 2.8057554,4.24460432 2.73381295,4.02877698 C2.6618705,3.95683453 2.6618705,3.81294964 2.6618705,3.74100719 C2.6618705,3.38129496 2.8057554,3.02158273 3.09352518,2.8057554 C3.23741007,2.6618705 3.52517986,2.58992806 3.74100719,2.6618705 C3.95683453,2.8057554 4.02877698,3.09352518 4.10071942,3.30935252 C4.17266187,3.45323741 4.24460432,3.66906475 4.24460432,3.88489209 C4.24460432,4.02877698 4.10071942,4.24460432 3.95683453,4.31654676 C3.88489209,4.46043165 3.88489209,4.5323741 3.95683453,4.60431655 C4.31654676,5.25179856 4.89208633,5.75539568 5.53956835,5.97122302 C5.68345324,6.04316547 5.75539568,6.04316547 5.75539568,5.97122302 C5.89928058,5.82733813 6.04316547,5.53956835 6.18705036,5.4676259 C6.47482014,5.32374101 6.69064748,5.4676259 6.97841727,5.61151079 C7.1942446,5.75539568 7.48201439,5.89928058 7.55395683,6.11510791 Z M10,4.96402878 C10,7.69784173 7.76978417,9.92805755 5.03597122,9.92805755 C4.24460432,9.92805755 3.38129496,9.71223022 2.6618705,9.35251799 L0,10 L0.71942446,7.3381295 C0.287769784,6.61870504 0.071942446,5.75539568 0.071942446,4.96402878 C0.071942446,2.23021583 2.30215827,0 5.03597122,0 C7.76978417,0 10,2.23021583 10,4.96402878 Z M9.0647482,4.89208633 C9.0647482,2.6618705 7.26618705,0.863309353 5.03597122,0.863309353 C2.8057554,0.863309353 1.00719424,2.6618705 1.00719424,4.89208633 C1.00719424,5.61151079 1.22302158,6.33093525 1.58273381,6.97841727 L1.65467626,7.12230216 L1.22302158,8.63309353 L2.8057554,8.27338129 L2.94964029,8.34532374 C3.66906475,8.70503597 4.31654676,8.92086331 5.03597122,8.92086331 C7.26618705,8.92086331 9.0647482,7.12230216 9.0647482,4.89208633 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        WhatsApp
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
                    <div class="overflow-hidden">
                        <Picture preload={false}>
                            <Source
                                media="(max-width: 767px)"
                                fetchPriority={"auto"}
                                src="https://dryzunstore.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F9049%2F2e31e735-5795-49b5-8da0-a1c44ebd8445&fit=cover&width=430&height=590"
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
                                class="object-cover w-full h-full hover:scale-110 transition-[.3s]"
                                loading={"lazy"}
                                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/ced309b9-4fc2-4b06-8083-782d220f1203"
                                alt="fale com Dryzun – distribuidor oficial de relógios Rolex"
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
