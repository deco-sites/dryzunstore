import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "../../islands/Header/Buttons.tsx";
import CartButtonLinx from "../../islands/Header/Cart/linx.tsx";
import CartButtonNuvemshop from "../../islands/Header/Cart/nuvemshop.tsx";
import CartButtonShopify from "../../islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "../../islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "../../islands/Header/Cart/vtex.tsx";
import CartButtonWake from "../../islands/Header/Cart/wake.tsx";
import Searchbar from "../../islands/Header/Searchbar.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
//import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { Buttons, Logo } from "../../components/header/Header.tsx";
import SeloRolex from "../../islands/SeloRolex.tsx";
import SeloTudor from "../../islands/SeloTudor.tsx";
import UserLogged from "../../islands/UserLogged.tsx";
import { navbarHeight } from "./constants.ts";
import NavItem from "./NavItem.tsx";

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

// const MENU_STATICS = {
//     url: "/fim-de-ano",
//     name: "Natal",
// };

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
      <div>
        <div
          style={{ height: navbarHeight }}
          class="lg:hidden grid grid-cols-3 justify-between items-center md:border-b md:border-base-200 w-full px-6 pb-6 gap-2"
        >
          <MenuButton />
          {logo && (
            <a
              href="/"
              class="logo_header flex-grow inline-flex items-center justify-center"
              style={{ minHeight: navbarHeight }}
              aria-label="Dryzun logo"
            >
              <div class="hidden">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
              </div>

              <svg
                width={186}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 286.66 61.13"
              >
                <g id="Camada_2" data-name="Camada 2">
                  <g id="Layer_1" data-name="Layer 1">
                    <path
                      fill="#070000"
                      d="M5.67,48.3c0,7.59,0,9.84-5.67,9.84v1.63H18.57C33,59.77,40.15,46,40.15,29.61c0-9.66-2.53-19.14-8-24.64C27.43.27,20.92,0,15.44,0H0V1.63c5.67,0,5.67,2.25,5.67,9.84ZM11.34,4.52a15.38,15.38,0,0,1,6-1.27c10.49,0,16,11.83,16,26.63,0,14.45-5.48,26.64-15.79,26.64a19,19,0,0,1-6.27-1.17Z"
                    >
                    </path>
                    <path
                      fill="#070000"
                      d="M92.24,59.77V58.14c-5.49-.63-7.66-5-10.61-11.19L73.85,30.7c5.24-1.63,9.89-6.51,9.89-15.17C83.74,10.29,81.63,0,69.87,0H52.57V1.63c5.67,0,5.67,2.25,5.67,9.84V48.3c0,7.59,0,9.84-5.67,9.84v1.63h17V58.14c-5.67,0-5.67-2.25-5.67-9.84V31.87H68l13.57,27.9ZM63.9,4.06a23,23,0,0,1,4.95-.81C73.73,3.25,77,8.67,77,15.89,77,25.91,71,29,65.23,29H63.9Z"
                    >
                    </path>
                    <path
                      fill="#070000"
                      d="M116.24,30.51,107.38,10a13.08,13.08,0,0,1-1.33-4.42c0-3.34,2.29-4,4.64-4V0H93.63V1.63C95.68,1.63,98,3.7,99.42,7l12.36,28.17V48.3c0,7.59,0,9.84-5.67,9.84v1.63h17V58.14c-5.67,0-5.67-2.25-5.67-9.84V34.4l10.14-23.93c2-4.87,4.27-8.84,8.13-8.84V0H121.78V1.63c2.23,0,4,1,4,4.33,0,2.07-1.45,5.33-2.17,7Z"
                    >
                    </path>
                    <path
                      fill="#070000"
                      d="M153.74,56.16,180,0H150.48l-.84,15h1.14c.91-9.74,2.59-11.37,8.86-11.37h12L146.08,58.14v1.63h32.49L180.44,44h-1.08c-2.11,8.58-3.44,12.19-9.11,12.19Z"
                    >
                    </path>
                    <path
                      fill="#070000"
                      d="M197.5,38.37c0,11.83,2.89,22.76,15.67,22.76,12.54,0,15.37-12.19,15.37-23V11.47c0-7.59,0-9.84,5.67-9.84V0H220.29V1.63c5.66,0,5.66,2.25,5.66,9.84v22.2c0,4.88,0,11.93-1.93,16.26-2.29,5.06-6.63,7.31-10.55,7.31s-7.95-2.71-9.34-8.67c-.72-3.16-1-9.75-1-13.27V11.47c0-7.59,0-9.84,5.67-9.84V0h-17V1.63c5.67,0,5.67,2.25,5.67,9.84Z"
                    >
                    </path>
                    <path
                      fill="#070000"
                      d="M253.62,12.73h.13l26.16,48H281V11.47c0-7.59,0-9.84,5.67-9.84V0H272.73V1.63c5.67,0,5.67,2.25,5.67,9.84V44.69h-.12L254,0H243.14V1.63c4,0,5.72,2.16,7.89,6.22V48.3c0,7.59,0,9.84-5.67,9.84v1.63h13.93V58.14c-5.67,0-5.67-2.25-5.67-9.84Z"
                    >
                    </path>
                  </g>
                </g>
              </svg>
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
        <div class="md:hidden pt-0 p-4">
          <Searchbar searchbar={searchbar} />
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
            class="items_menu flex items-center mr-8 text-[#747474] text-[13px] not-italic font-medium leading-[normal]"
            href="/institucional/nossas-lojas"
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
                fill="currentColor"
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
            class="logo_header block w-max mx-auto my-0"
          >
            <Image
              class="hidden"
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 167}
              height={logo.height || 36}
            />
            <svg
              width={186}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 286.66 61.13"
            >
              <g id="Camada_2" data-name="Camada 2">
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    fill="#070000"
                    d="M5.67,48.3c0,7.59,0,9.84-5.67,9.84v1.63H18.57C33,59.77,40.15,46,40.15,29.61c0-9.66-2.53-19.14-8-24.64C27.43.27,20.92,0,15.44,0H0V1.63c5.67,0,5.67,2.25,5.67,9.84ZM11.34,4.52a15.38,15.38,0,0,1,6-1.27c10.49,0,16,11.83,16,26.63,0,14.45-5.48,26.64-15.79,26.64a19,19,0,0,1-6.27-1.17Z"
                  >
                  </path>
                  <path
                    fill="#070000"
                    d="M92.24,59.77V58.14c-5.49-.63-7.66-5-10.61-11.19L73.85,30.7c5.24-1.63,9.89-6.51,9.89-15.17C83.74,10.29,81.63,0,69.87,0H52.57V1.63c5.67,0,5.67,2.25,5.67,9.84V48.3c0,7.59,0,9.84-5.67,9.84v1.63h17V58.14c-5.67,0-5.67-2.25-5.67-9.84V31.87H68l13.57,27.9ZM63.9,4.06a23,23,0,0,1,4.95-.81C73.73,3.25,77,8.67,77,15.89,77,25.91,71,29,65.23,29H63.9Z"
                  >
                  </path>
                  <path
                    fill="#070000"
                    d="M116.24,30.51,107.38,10a13.08,13.08,0,0,1-1.33-4.42c0-3.34,2.29-4,4.64-4V0H93.63V1.63C95.68,1.63,98,3.7,99.42,7l12.36,28.17V48.3c0,7.59,0,9.84-5.67,9.84v1.63h17V58.14c-5.67,0-5.67-2.25-5.67-9.84V34.4l10.14-23.93c2-4.87,4.27-8.84,8.13-8.84V0H121.78V1.63c2.23,0,4,1,4,4.33,0,2.07-1.45,5.33-2.17,7Z"
                  >
                  </path>
                  <path
                    fill="#070000"
                    d="M153.74,56.16,180,0H150.48l-.84,15h1.14c.91-9.74,2.59-11.37,8.86-11.37h12L146.08,58.14v1.63h32.49L180.44,44h-1.08c-2.11,8.58-3.44,12.19-9.11,12.19Z"
                  >
                  </path>
                  <path
                    fill="#070000"
                    d="M197.5,38.37c0,11.83,2.89,22.76,15.67,22.76,12.54,0,15.37-12.19,15.37-23V11.47c0-7.59,0-9.84,5.67-9.84V0H220.29V1.63c5.66,0,5.66,2.25,5.66,9.84v22.2c0,4.88,0,11.93-1.93,16.26-2.29,5.06-6.63,7.31-10.55,7.31s-7.95-2.71-9.34-8.67c-.72-3.16-1-9.75-1-13.27V11.47c0-7.59,0-9.84,5.67-9.84V0h-17V1.63c5.67,0,5.67,2.25,5.67,9.84Z"
                  >
                  </path>
                  <path
                    fill="#070000"
                    d="M253.62,12.73h.13l26.16,48H281V11.47c0-7.59,0-9.84,5.67-9.84V0H272.73V1.63c5.67,0,5.67,2.25,5.67,9.84V44.69h-.12L254,0H243.14V1.63c4,0,5.72,2.16,7.89,6.22V48.3c0,7.59,0,9.84-5.67,9.84v1.63h13.93V58.14c-5.67,0-5.67-2.25-5.67-9.84Z"
                  >
                  </path>
                </g>
              </g>
            </svg>
          </a>
        )}

        <div class="md:min-w-[355px] flex-none w-max flex items-center justify-end gap-2 col-span-1">
          <SeloRolex />
          <SeloTudor />

          <div>
            <UserLogged />
          </div>

          {!buttons?.hideWishlistButton && (
            <a
              class="items_menu flex items-center text-xs font-thin text-[#1A1A1A]"
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
            <div class="items_menu flex items-center text-xs font-thin #1A1A1A">
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
