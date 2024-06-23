import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import Image from "apps/website/components/Image.tsx";
import { SendEventOnClick } from "../../components/Analytics.tsx";
import { clx } from "../../sdk/clx.ts";
import { relative } from "../../sdk/url.ts";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;

  /** @description index of the product card in the list */
  index?: number;
}

const WIDTH = 200;
const HEIGHT = 279;

function ProductCardRolex({
  product,
  preload,
  itemListName,
  index,
}: Props) {
  const { url, productID, image: images, name } = product;
  const id = `product-card-${productID}`;
  const [front, back] = images ?? [];
  const relativeUrl = relative(url);
  const aspectRatio = `${WIDTH} / ${HEIGHT}`; 

  /*const titleCase = (str: string) => {
    return str.toLowerCase().split(/([- ])/).map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }*/

  //const formatName = titleCase(name ?? '');

  const info = product.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Caixa do Modelo"
  )?.value;

  return (
    <a
      id={id}
      data-deco="view-product"
      href={relativeUrl}
      aria-label="view product" class="block w-full"
      style={{ 'background-color': '#f4efea' }}
    >
      {/* Add click event to dataLayer */}
      <SendEventOnClick
        id={id}
        event={{
          name: "select_item" as const,
          params: {
            item_list_name: itemListName,
            items: [
              mapProductToAnalyticsItem({
                product,
                index,
              }),
            ],
          },
        }}
      />

      <figure
        class="relative overflow-hidden md:w-[62%] md:ml-[19%]"
        style={{ aspectRatio }}
      >
        {/* Product Images */}
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={WIDTH}
          height={HEIGHT}
          style={{ aspectRatio, 'background-color': '#f4efea' }}
          class={clx(
            "bg-base-100",
            "object-cover",
            "rounded w-full",
            "col-span-full row-span-full",
          )}
          sizes="(max-width: 640px) 50vw, 20vw"
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          decoding="async"
        />
        <Image
          src={back?.url ?? front.url!}
          alt={back?.alternateName ?? front.alternateName}
          width={WIDTH}
          height={HEIGHT}
          style={{ aspectRatio, 'background-color': '#f4efea' }}
          class={clx(
            "bg-base-100",
            "object-cover",
            "rounded w-full",
            "col-span-full row-span-full",
            "transition-opacity opacity-0 lg:group-hover:opacity-100",
          )}
          sizes="(max-width: 640px) 50vw, 20vw"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div class="gap-4 pb-2 px-2 md:pb-7 md:px-7">
        <p class="f-rolex text-[14px] md:text-[16px] leading-[1.2] text-[#452c1e]">Rolex</p>
        <h3 class="f-rolex text-[18px] md:text-[24px] leading-[1.2] font-boldd text-[#452c1e] mb-2 ml-[-2px]">{name}</h3>
        <p class="min-h-[40px] f-rolex text-[14px] md:text-[16px] leading-[1.2] text-[#212121]">{info}</p>
      </div>
    </a>
  );
}

export default ProductCardRolex;
