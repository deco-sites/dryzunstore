
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { useId } from "../../sdk/useId.ts";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useUI } from "../../sdk/useUI.ts";

import Canonical from "../../islands/Canonical.tsx"

import { Head } from "$fresh/runtime.ts";

export interface Props {
    page: ProductDetailsPage | null;
}

function ProductMainRolex({ page }: Props) {
    const id = useId();
    const { displaySeloRolex } = useUI();
    displaySeloRolex.value = true;

    if (page === null) {
        throw new Error("Missing Product Details Page Info");
    }

    const { product } = page;
    const {
        offers,
        name = "",
        image = [],
    } = product;

    const { price } = useOffer(offers);

    const width = 725;
    const height = 725;

    const mer = product.additionalProperty?.find((item: any) =>
        item.name === "RefId")?.value;

    const materia = product.isVariantOf?.additionalProperty?.find((item: any) =>
        item.name === "Material")?.value;

    const refId = product.isVariantOf?.additionalProperty?.find((item: any) =>
        item.name === "Reference (Referência)")?.value;

    const urlOtimized = (image[0]?.url!.split(`${refId}`)[0] + `-725-auto`).replace("/-725", "-725");

    const aspectRatio = `${width} / ${height}`;

    /** infos */
    const model = product.isVariantOf?.additionalProperty?.find((item: any) =>
        item.name === "Spec_ModelCase (Caixa do Modelo)")?.value;

    return (
        <section id={id}
            class="relative rolex-container flex max-md:flex-col-reverse justify-center items-center">
            <Head>
                <meta name="keywords" content={`Rolex ${name}, ${name}, relógios Rolex ${name}, Rolex ${name} à venda`} />
                <Canonical />
            </Head>
            <div class="md:absolute left-[7%] md:left-[8%] grid gap-3 max-md:mt-5">
                <p class="body24 text-[#452C1E]">Rolex</p>
                <h1 class="headline50 text-[#452C1E] ml-[-7px] max-w-full">{name}</h1>
                <p class="body20-ligth text-[#212121]">{model}</p>
                <div class="flex items-center body20-ligth text-[#212121] mt-[-2px]">
                    {formatPrice(price, offers?.priceCurrency)}
                    <div class="ml-3 group relative border p-0.5 rounded-[50%] border-solid border-[#212121] cursor-pointer before:content-[''] before:absolute before:mt-[-6px] before:border-b-[7px] before:hidden hover:before:block before:border-b-[#fff] before:border-x-[10px] before:border-x-[rgba(0,0,0,0)] before:border-solid before:left-[-2px] before:top-[28px]">
                        <svg height="11" width="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt=""><path d="m6.08 8.59.85.36-.17.34c-.03.08-.11.21-.19.38-.1.19-.24.39-.41.59-.18.2-.4.37-.66.51-.27.15-.6.23-.97.23-.41 0-.74-.09-1-.27-.21-.14-.45-.44-.45-1 0-.21.04-.44.11-.68.06-.21.13-.42.19-.6l1.41-4.05h-1.33l.26-.93h3.2l-1.97 5.72c-.05.15-.1.3-.15.46-.03.13-.05.24-.05.35 0 .05.01.07.02.09.01 0 .02.01.05.01.08 0 .18-.04.28-.11.13-.1.26-.21.37-.34.12-.13.22-.26.3-.4.08-.15.13-.26.17-.34zm1.32-8.28c-.21-.2-.47-.31-.77-.31s-.56.11-.76.31-.31.48-.31.78.11.56.31.77.47.31.76.31.56-.11.77-.31c.2-.21.31-.48.31-.77 0-.3-.11-.57-.31-.78z"></path></svg>
                        <div class="invisible group-hover:visible absolute left-[-125px] md:left-[-50px] top-0 pt-7">
                            <p class="relative rounded-lg flex w-[300px] md:w-[453px] justify-center items-center gap-2.5 p-5 bg-white fixed14-ligth text-black leading-[22.4px]">Todos os preços representam os preços de venda ao público recomendados pela Rolex, com ICMS incluso. Os preços podem ser modificados a qualquer momento, sem aviso prévio.</p>
                        </div>
                    </div>
                </div>
                <a class="secondary-cta" href="#disponibilidade_modelo">Disponibilidade do modelo</a>
            </div>
            <div class="m-auto">
                <img alt={`rolex ${name} em ${materia}, ${mer}* - Dryzun`} style={{ aspectRatio }}
                    src={urlOtimized} width={width}
                    height={height} loading={"eager"}  {...{ fetchPriority: "high" } as any} />
            </div>
        </section>
    );
}

export default ProductMainRolex;
