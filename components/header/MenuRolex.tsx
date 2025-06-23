import Image from "apps/website/components/Image.tsx";

export default function MenuRolex() {
  return (
    <div class="w-full bg-gradiente">
      <div class="rolex-container h-[110px] flex justify-between items-center relative z-[11]">
        <a class="relative z-[49]" href="/rolex/discover">
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
            <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="/rolex">
              A Rolex
            </a>
          </li>
          <li>
            <a
              class="fixed16 text-[#fff] hover:text-[#61bd93]"
              href="/rolex/watches"
            >
              Relógios Rolex
            </a>
          </li>
          <li>
            <a
              class="fixed16 text-[#fff] hover:text-[#61bd93]"
              href="/rolex/novos-modelos"
            >
              Novos modelos 2025
            </a>
          </li>
          <li>
            <a
              class="fixed16 text-[#fff] hover:text-[#61bd93]"
              href="/rolex/watchmaking"
            >
              A arte da relojoaria
            </a>
          </li>
          <li>
            <a
              class="fixed16 text-[#fff] hover:text-[#61bd93]"
              href="/rolex/servicing"
            >
              Manutenção
            </a>
          </li>
          <li>
            <a
              class="fixed16 text-[#fff] hover:text-[#61bd93]"
              href="/rolex/world-of-rolex"
            >
              O mundo Rolex
            </a>
          </li>
          <li>
            <a class="fixed16 text-[#fff] hover:text-[#61bd93]" href="#">
              Rolex na Dryzun
            </a>
          </li>
          <li>
            <a
              class="fixed16 text-[#fff] hover:text-[#61bd93]"
              href="/rolex/contato-sao-paulo"
            >
              Contato
            </a>
          </li>
        </ul>

        <details class="w-full rolex-container before:absolute before:top-[-4px] before:right-[7%] before:content-['▼'] open:before:content-['▲'] hidden max-2xl:flex flex-col absolute z-[9] right-0 px-[7%] pb-[35px] top-[45px] bg-[#fff] bg-gradiente text-[#fff]">
          <summary class="w-full text-right fixed16 text-[#fff] cursor-pointer pr-[18px]">
            Menu
          </summary>
          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93] mt-[60px]"
            href="#"
          >
            A Rolex
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            Relógios Rolex
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            Novos modelos 2025
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            A arte da relojoaria
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            Manutenção
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            O mundo Rolex
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            Rolex na Dryzun
          </a>

          <a
            class="block py-[20px] fixed16 text-[#fff] hover:text-[#61bd93]"
            href="#"
          >
            Contato
          </a>
        </details>
      </div>
    </div>
  );
}
