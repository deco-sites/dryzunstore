import Icon from "../../components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

export default function BackToTopRolex({ content }: { content?: string }) {
  return (
    <>
      <section class="bg-gradiente">
        <div class="rolex-container h-[120px] md:h-[160px] flex items-center justify-center">
          <Image
            class="max-md:w-[32px]"
            loading="lazy"
            src="https://dryzun.vteximg.com.br/arquivos/crown-gold.svg?v=321"
            alt="logo Rolex footer"
            width={40}
            height={40}
          />
        </div>
      </section>
      <section class="bg-gradiente">
        <a
          href="#top"
          class="rolex-container h-[60px] md:h-[80px] flex flex-col items-center justify-center text-[#fff] border-t-[#ffffff38] border-t border-solid"
        >
          <Icon
            size={24}
            id="ChevronUp"
            strokeWidth={3}
          />
          <span class="legend16 text-[#fff]">Voltar ao topo</span>
        </a>
      </section>
    </>
  );
}
