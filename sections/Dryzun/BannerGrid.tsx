import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  primeiraImagem?: ImageWidget;
  primeiroTitulo?: string;
  primeiroLink?: string;

  segundaImagem?: ImageWidget;
  segundoTitulo?: string;
  segundoLink?: string;

  terceiraImagem?: ImageWidget;
  terceiroTitulo?: string;
  terceiroLink?: string;
}

export default function BannerGrid({
  primeiraImagem,
  primeiroTitulo,
  primeiroLink,
  segundaImagem,
  segundoTitulo,
  segundoLink,
  terceiraImagem,
  terceiroTitulo,
  terceiroLink,
}: Props) {
  return (
    <div class="container-2 pt-6 md:pt-10 pb-8 flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-[50%]">
        <a class="flex flex-col items-center gap-4" href={primeiroLink}>        
          <img class={`w-full h-auto`} width={650} height={450} loading="lazy" src={primeiraImagem ?? ""} alt={primeiroTitulo} />
          <h3 class="text-center text-2xl not-italic font-normal leading-[normal] text-[#333]">
            {primeiroTitulo}
          </h3>
          <span class="underline text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
            confira
          </span>
        </a>
      </div>
      <div class="w-full md:w-[25%]">
        <a class="flex flex-col items-center gap-4" href={segundoLink}>
        <img class={`w-full h-auto`} width={650} height={450} loading="lazy" src={segundaImagem ?? ""} alt={segundoTitulo} />
          <h3 class="text-center text-2xl not-italic font-normal leading-[normal] text-[#333]">
            {segundoTitulo}
          </h3>
          <span class="underline text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
            confira
          </span>
        </a>
      </div>
      <div class="w-full md:w-[25%]">
        <a
          class="flex flex-col items-center gap-4 max-md:mt-4"
          href={terceiroLink}
        >
          <img class={`w-full h-auto`} width={650} height={450} loading="lazy" src={terceiraImagem ?? ""} alt={terceiroTitulo} />
          <h3 class="text-center text-2xl not-italic font-normal leading-[normal] text-[#333]">
            {terceiroTitulo}
          </h3>
          <span class="underline text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
            confira
          </span>
        </a>
      </div>
    </div>
  );
}
