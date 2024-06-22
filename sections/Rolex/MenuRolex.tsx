
import Image from "apps/website/components/Image.tsx";

export default function MenuRolex() {
    return (
        <div class="w-full bg-gradiente">
            <div class="rolex-container h-[110px] flex justify-between items-center relative z-[11]">
                <a class="relative z-[49]" href="/rolex/descubra">
                    <Image
                        loading="lazy"
                        src="https://dryzun.vteximg.com.br/arquivos/rolex-retailer-plaque-120x60_pt-br.jpg"
                        alt="logo Rolex"
                        width={120}
                        height={60}
                    />
                </a>
                <ul class="hidden 2xl:flex gap-[2.5vw]">
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/descubra">A Rolex</a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/relogios-rolex">Relógios Rolex</a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/novos-modelos">Novos modelos 2024</a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/a-arte-da-relojoaria">
                            A arte da relojoaria
                        </a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/manutencao">Manutenção</a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/o-mundo-rolex">O mundo Rolex</a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/dryzun">Rolex na Dryzun</a>
                    </li>
                    <li>
                        <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/contato">Contato</a>
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

                    <a class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex/contato">Contato</a>

                </details>
            </div>
        </div>
    );
}
