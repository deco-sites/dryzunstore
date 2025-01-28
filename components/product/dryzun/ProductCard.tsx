import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import Image from "apps/website/components/Image.tsx";
import type { Platform } from "../../../apps/site.ts";
import { SendEventOnClick } from "../../../components/Analytics.tsx";
import Avatar from "../../../components/ui/Avatar.tsx";
import {
  default as WishlistButtonVtex,
  default as WishlistButtonWake,
} from "../../../islands/WishlistButton/vtex.tsx";
import { clx } from "../../../sdk/clx.ts";
import { formatPrice } from "../../../sdk/format.ts";
import { relative } from "../../../sdk/url.ts";
import { useOffer } from "../../../sdk/useOffer.ts";
import { useVariantPossibilities } from "../../../sdk/useVariantPossiblities.ts";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;

  /** @description index of the product card in the list */
  index?: number;

  platform?: Platform;
}

const WIDTH = 380;
const HEIGHT = 380;

function ProductCard({
  product,
  preload,
  itemListName,
  platform,
  index,
}: Props) {
  const {
    url,
    productID,
    name,
    brand,
    image: images,
    offers,
    isVariantOf,
    additionalProperty
  } = product;

  const id = `product-card-${productID}`;
  const hasVariant = isVariantOf?.hasVariant ?? [];
  const productGroupID = isVariantOf?.productGroupID;
  const { listPrice, price } = useOffer(offers);
  const possibilities = useVariantPossibilities(hasVariant, product);
  const variants = Object.entries(Object.values(possibilities)[0] ?? {});
  const relativeUrl = relative(url);
  const aspectRatio = `${WIDTH} / ${HEIGHT}`;
  const [front, back] = images ?? [];
  const brander = brand?.name == "Tudor" || brand?.name == "Rolex";

  const removeParam = (str: string) => {
    if (!str) return;
    return str.split("?skuId")[0];
  };

  const findImageHover = images?.find((image: any) => {
    return image.name === "modelo";
  });

  const HOVER_IMAGE = findImageHover ?? back;

  const collection = additionalProperty?.find((collection: any) => 
    collection.name === "cluster" && collection.value.includes("[prefix-tag]"));

  const getTextAfterHashSymbol = (collection: string | undefined)  => {
    if (!collection) {
      return collection
    }
  
    const hashPosition = collection.indexOf("#");
    return hashPosition !== -1 ? collection.substring(hashPosition + 1).trim() : "";
  }

  return (
    <div
      id={id}
      data-deco="view-product"
      class="dryzun-2b card card-compact group w-full lg:p-4"
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
                price,
                listPrice,
                index,
              }),
            ],
          },
        }}
      />

      <div class="flex bg-white pb-4 flex-col gap-2">
        <figure
          class="relative overflow-hidden"
          style={{ aspectRatio }}
        >
          {/* Wishlist button */}
          <div
            class={clx(
              "absolute top-0 left-0",
              "z-[8] w-full",
              "flex items-center justify-end",
            )}
          >
            {/* Discount % */}
            <div
              class={`bg-black text-sm px-3 text-white ${
                (listPrice! != price!) && !brander ? "block" : "hidden"
              }`}
            >
              <span class="font-bold">
                {listPrice && price
                  ? `${Math.round(((listPrice - price) / listPrice) * 100)}% `
                  : ""}
              </span>
              OFF
            </div>
            <div class="hidden lg:group-hover:hidden">
              {platform === "vtex" && (
                <WishlistButtonVtex
                  productGroupID={productGroupID}
                  productID={productID}
                />
              )}
              {platform === "wake" && (
                <WishlistButtonWake
                  productGroupID={productGroupID}
                  productID={productID}
                />
              )}
            </div>
          </div>

          {/* Product Images */}
          <a
            href={removeParam(relativeUrl)}
            aria-label="view product"
            class={clx(
              "absolute top-0 left-0",
              "grid grid-cols-1 grid-rows-1",
              "w-full",
            )}
          >
            <Image
              src={itemListName === "Suggeestions"
                ? front.url!.replace("25-25", "250-250")
                : front.url!}
              alt={front.alternateName}
              width={WIDTH}
              height={HEIGHT}
              style={{ aspectRatio }}
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
              src={HOVER_IMAGE?.url ?? front.url!.replace("25-25", "250-250")}
              alt={HOVER_IMAGE?.alternateName ?? front.alternateName}
              width={WIDTH}
              height={HEIGHT}
              style={{ aspectRatio }}
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
          </a>
        </figure>

        {/* SKU Selector */}
        <ul class="hidden items-center justify-center gap-2">
          {variants
            .map(([value, link]) => [value, relative(link)] as const)
            .map(([value, link]) => (
              <li>
                <a href={link}>
                  <Avatar
                    content={value}
                    variant={link === relativeUrl
                      ? "active"
                      : link
                      ? "default"
                      : "disabled"}
                  />
                </a>
              </li>
            ))}
        </ul>

        {/* Name/Description */}
        <div class="flex flex-col">
          { collection && (
            <a href={`/${collection?.propertyID}?map=productClusterIds`} class="font-medium text-sm text-center mb-2.5"> 
              Dryzun - {getTextAfterHashSymbol(collection?.value)} 
            </a>
          )}
          
          <h2
            class="ellipsis min-h-[50px] text-wrap text-[#333] text-center text-ellipsis whitespace-nowrap text-sm not-italic font-normal leading-[120%] tracking-[0.42px]"
            dangerouslySetInnerHTML={{ __html: name ?? "" }}
          />
        </div>

        {/* Price from/to */}
        <div class="haon flex flex-col items-center justify-center text-sm not-italic font-normal leading-[normal] tracking-[0.42px] text-[#666461]">
          {(price !== listPrice) && !brander && (
            <span class="line-through text-xs">
              {formatPrice(listPrice, offers?.priceCurrency)}
            </span>
          )}
          <span>
            {formatPrice(price, offers?.priceCurrency)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
