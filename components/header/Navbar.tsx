import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "../../islands/Header/Buttons.tsx";
import CartButtonLinx from "../../islands/Header/Cart/linx.tsx";
import CartButtonShopify from "../../islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "../../islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "../../islands/Header/Cart/vtex.tsx";
import CartButtonWake from "../../islands/Header/Cart/wake.tsx";
import CartButtonNuvemshop from "../../islands/Header/Cart/nuvemshop.tsx";
import Searchbar from "../../islands/Header/Searchbar.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
//import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import SeloRolex from "../../islands/SeloRolex.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo } from "../../components/header/Header.tsx";

/** @titleBy name */
export interface ItemsI {
  name?: string;
  url?: string;
  newTab?: boolean;
  /** @description Botão ver todos */
  btnAll?: boolean;
  border?: boolean;
  children?: ItemsI[];
}

// Make it sure to render it on the server only. DO NOT render it on an island
function Navbar(
  { items, searchbar, logo, buttons, device }: {
    items: ItemsI[];
    searchbar?: SearchbarProps;
    logo?: Logo;
    buttons?: Buttons;
    device: "mobile" | "desktop" | "tablet";
    isrolex?: boolean | undefined;
  },
) {
  const platform = usePlatform();

  // Mobile header
  if (device === "mobile") {
    return (
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden grid grid-cols-3 justify-between items-center border-b border-base-200 w-full px-6 pb-6 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}

        <div class="flex justify-end gap-1">
          <SearchButton />
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
          {platform === "wake" && <CartButtonWake />}
          {platform === "linx" && <CartButtonLinx />}
          {platform === "shopify" && <CartButtonShopify />}
          {platform === "nuvemshop" && <CartButtonNuvemshop />}
        </div>
      </div>
    );
  }

  // Desktop header
  return (
    <div class="sticky top-0 hidden md:flex flex-col justify-center items-center shadow-[0px_2px_7px_0px_rgba(0,0,0,0.08)] w-full container-2">
      <div class="w-full h-[60px] flex items-center justify-between mt-[20px]">
        <div class="w-max flex-none flex items-center justify-start col-span-1">
          <a
            class="flex items-center mr-8 text-[#747474] text-[13px] not-italic font-medium leading-[normal]"
            href="/nossas-lojas"
          >
            <svg
              class="mr-2"
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 8.04248C13.75 4.60498 10.9375 1.79248 7.5 1.79248C4.02344 1.79248 1.25 4.60498 1.25 8.04248C1.25 8.66748 1.44531 9.48779 1.875 10.5425C2.30469 11.5581 2.89062 12.6519 3.59375 13.7456C4.92188 15.894 6.48438 17.9644 7.5 19.2144C8.47656 17.9644 10.0391 15.894 11.4062 13.7456C12.0703 12.6519 12.6562 11.5581 13.0859 10.5425C13.5156 9.48779 13.75 8.66748 13.75 8.04248ZM15 8.04248C15 11.48 10.4297 17.5347 8.39844 20.0737C7.92969 20.6597 7.03125 20.6597 6.5625 20.0737C4.57031 17.5347 0 11.48 0 8.04248C0 3.90186 3.35938 0.54248 7.5 0.54248C11.6406 0.54248 15 3.90186 15 8.04248ZM5.625 8.04248C5.625 8.74561 5.97656 9.33154 6.5625 9.68311C7.10938 10.0347 7.85156 10.0347 8.4375 9.68311C8.98438 9.33154 9.375 8.74561 9.375 8.04248C9.375 7.37842 8.98438 6.79248 8.4375 6.44092C7.85156 6.08936 7.10938 6.08936 6.5625 6.44092C5.97656 6.79248 5.625 7.37842 5.625 8.04248ZM7.5 11.1675C6.36719 11.1675 5.35156 10.5815 4.76562 9.60498C4.21875 8.66748 4.21875 7.45654 4.76562 6.47998C5.35156 5.54248 6.36719 4.91748 7.5 4.91748C8.59375 4.91748 9.60938 5.54248 10.1953 6.47998C10.7422 7.45654 10.7422 8.66748 10.1953 9.60498C9.60938 10.5815 8.59375 11.1675 7.5 11.1675Z"
                fill="#808080"
              />
            </svg>

            Nossas Lojas
          </a>
          <Searchbar searchbar={searchbar} />
        </div>

        {logo && (
          <a
            href="/"
            aria-label="Dryzun logo"
            class="block w-max mx-auto my-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 167}
              height={logo.height || 36}
            />
          </a>
        )}

        <div class="md:min-w-[355px] flex-none w-max flex items-center justify-end gap-2 col-span-1">
          <SeloRolex />

          {!buttons?.hideAccountButton && (
            <a
              class="flex items-center text-xs font-thin text-[#1A1A1A]"
              href="/account"
              aria-label="Account"
            >
              <div class="flex btn border-0 shadow-none btn-sm bg-transparent hover:bg-transparent px-0 gap-1">
                <Icon id="Profile" size={20} strokeWidth={0.4} />
              </div>
            </a>
          )}
          {!buttons?.hideWishlistButton && (
            <a
              class="flex items-center text-xs font-thin text-[#1A1A1A]"
              href="/wishlist"
              aria-label="Wishlist"
            >
              <button
                class="flex btn btn-circle btn-sm btn-ghost px-0 gap-1"
                aria-label="Wishlist"
              >
                <Icon id="Heart" size={24} strokeWidth={0.4} />
              </button>
              WISHLIST
            </a>
          )}
          {!buttons?.hideCartButton && (
            <div class="flex items-center text-xs font-thin #1A1A1A">
              {platform === "vtex" && <CartButtonVTEX />}
              {platform === "vnda" && <CartButtonVDNA />}
              {platform === "wake" && <CartButtonWake />}
              {platform === "linx" && <CartButtonLinx />}
              {platform === "shopify" && <CartButtonShopify />}
              {platform === "nuvemshop" && <CartButtonNuvemshop />}
            </div>
          )}
        </div>
      </div>

      <div class="w-full">
        <ul class="md:relative w-full md:w-max md:mx-auto flex justify-center items-center gap-8">
          {items.map((item) => <NavItem item={item} />)}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
