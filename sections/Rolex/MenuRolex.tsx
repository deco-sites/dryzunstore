
import Image from "apps/website/components/Image.tsx";

const pathname = window.location.pathname;
const hash = pathname?.split('/rolex/')[1] ?? '';

export default function MenuRolex() {
    return (
        <div class="w-full bg-gradiente">
            <div class="rolex-container h-[110px] flex justify-between items-center relative z-[11]">
                <a class="relative z-[49]" href="/rolex/descubra">
                    <Image
                        loading="lazy"
                        src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c516f136-3fb7-46cd-b574-a6db3a867887"
                        alt="logo Rolex"
                        width={120}
                        height={60}
                    />
                </a>
                <ul class="hidden 2xl:flex gap-[2.5vw]">
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('descubra') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/descubra">A Rolex</a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('relogios-rolex') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/relogios-rolex">Relógios Rolex</a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('novos-modelos') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/novos-modelos">Novos modelos 2024</a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('a-arte-da-relojoaria') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/a-arte-da-relojoaria">
                            A arte da relojoaria
                        </a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('manutencao') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/manutencao">Manutenção</a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('o-mundo-rolex') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/o-mundo-rolex">O mundo Rolex</a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('dryzun') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/dryzun">Rolex na Dryzun</a>
                    </li>
                    <li>
                        <a class={`fixed16 hover:text-[#61bd93] ${hash.includes('contato') || hash.includes('contato/formulario') ? 'text-[#61bd93]' : 'text-[#fff]'}`} href="/rolex/contato-sao-paulo">Contato</a>
                    </li>
                </ul>

                <details class="w-full rolex-container before:absolute before:top-[-4px] before:right-[7%] before:content-['▼'] open:before:content-['▲'] hidden max-2xl:flex flex-col absolute z-[9] right-0 px-[7%] pb-[35px] top-[45px] bg-[#fff] bg-gradiente text-[#fff]">
                    <summary class="w-full text-right fixed16 text-[#fff] cursor-pointer pr-[18px]">Menu</summary>
                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93] mt-[60px]" href="/rolex/descubra">A Rolex</a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/relogios-rolex">Relógios Rolex</a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/novos-modelos">Novos modelos 2024</a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/a-arte-da-relojoaria">
                        A arte da relojoaria
                    </a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/manutencao">Manutenção</a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/o-mundo-rolex">O mundo Rolex</a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/dryzun">Rolex na Dryzun</a>

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/contato-sao-paulo">Contato</a>

                </details>
            </div>
        </div>
    );
}
