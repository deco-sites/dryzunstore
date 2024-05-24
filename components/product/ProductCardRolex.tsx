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
  const background = `#f4efea`;

  const info = product.isVariantOf?.additionalProperty?.find((item: any) =>
    item.name === "Caixa do Modelo"
  )?.value;

  return (
    <a
      id={id}
      data-deco="view-product"
      href={relativeUrl}
      aria-label="view product" class="block w-[48%] md:w-[32%]"
      style={{ background }}
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
        class="relative overflow-hidden"
        style={{ aspectRatio }}
      >
        {/* Product Images */}
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={WIDTH}
          height={HEIGHT}
          style={{ aspectRatio, background }}
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
          style={{ aspectRatio, background }}
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

      <div class="ga-4 p-2 md:p-7">
        <p class="f-rolex text-[14px] md:text-[16px] leading-[1.2] text-[#452c1e]">Rolex</p>
        <h3 class="f-rolex text-[18px] md:text-[24px] leading-[1.2] font-boldd text-[#452c1e] mb-2 ml-[-2px]">{name}</h3>
        <p class="f-rolex text-[14px] md:text-[16px] leading-[1.2] text-[#212121]">{info}</p>
      </div>
    </a>
  );
}

export default ProductCardRolex;
