//import type { Props as MenuProps } from "../../components/header/Menu.tsx";
import Cart from "../../components/minicart/Cart.tsx";
import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Button from "../../components/ui/Button.tsx";
import Drawer from "../../components/ui/Drawer.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { useUI } from "../../sdk/useUI.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";
import SeloRolex from "../../islands/SeloRolex.tsx";

const Menu = lazy(() => import("../../components/header/Menu.tsx"));
const Searchbar = lazy(() => import("../../components/search/Searchbar.tsx"));

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

export interface Props {
  menu: ItemsI[];
  searchbar?: SearchbarProps;
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
  platform: ReturnType<typeof usePlatform>;
}

const Aside = (
  { title, onClose, children }: {
    title: string;
    onClose?: () => void;
    children: ComponentChildren;
  },
) => (
  <div
    class={`header-2b bg-base-100 grid grid-rows-[auto_1fr] h-full divide-y ${
      title == "Menu" && "w-[80vw] max-w-[100vw]"
    }`}
  >
    <div class="flex justify-between items-center">
      <div class="w-full px-4 py-3">
        {title == "Menu"
          ? (
            <>
              <div class="w-full flex items-center justify-between mb-5">
                <SeloRolex />
                <a
                  href="/nossas-lojas"
                  class="flex items-center text-[13px] not-italic font-medium leading-[normal] text-[#747474]"
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
                      d="M13.75 8.14407C13.75 4.70657 10.9375 1.89407 7.5 1.89407C4.02344 1.89407 1.25 4.70657 1.25 8.14407C1.25 8.76907 1.44531 9.58939 1.875 10.6441C2.30469 11.6597 2.89062 12.7534 3.59375 13.8472C4.92188 15.9956 6.48438 18.0659 7.5 19.3159C8.47656 18.0659 10.0391 15.9956 11.4062 13.8472C12.0703 12.7534 12.6562 11.6597 13.0859 10.6441C13.5156 9.58939 13.75 8.76907 13.75 8.14407ZM15 8.14407C15 11.5816 10.4297 17.6363 8.39844 20.1753C7.92969 20.7613 7.03125 20.7613 6.5625 20.1753C4.57031 17.6363 0 11.5816 0 8.14407C0 4.00345 3.35938 0.644073 7.5 0.644073C11.6406 0.644073 15 4.00345 15 8.14407ZM5.625 8.14407C5.625 8.8472 5.97656 9.43314 6.5625 9.7847C7.10938 10.1363 7.85156 10.1363 8.4375 9.7847C8.98438 9.43314 9.375 8.8472 9.375 8.14407C9.375 7.48001 8.98438 6.89407 8.4375 6.54251C7.85156 6.19095 7.10938 6.19095 6.5625 6.54251C5.97656 6.89407 5.625 7.48001 5.625 8.14407ZM7.5 11.2691C6.36719 11.2691 5.35156 10.6831 4.76562 9.70657C4.21875 8.76907 4.21875 7.55814 4.76562 6.58157C5.35156 5.64407 6.36719 5.01907 7.5 5.01907C8.59375 5.01907 9.60938 5.64407 10.1953 6.58157C10.7422 7.55814 10.7422 8.76907 10.1953 9.70657C9.60938 10.6831 8.59375 11.2691 7.5 11.2691Z"
                      fill="#808080"
                    />
                  </svg>

                  Nossas Lojas
                </a>
              </div>
              <div class="w-full flex justify-between rounded px-4 py-3 bg-[#E8EDF5]">
                <a
                  href="/login"
                  class="flex items-center text-[13px] not-italic font-medium leading-[normal] text-[#597CB2]"
                >
                  <Icon id="Profile" class="mr-2" size={24} strokeWidth={2} />
                  Minha Conta
                </a>
                <a class="flex items-center text-[#597CB2]">
                  <Icon class="ml-2" id="Return" size={24} strokeWidth={2} />
                </a>
              </div>
            </>
          )
          : <span class="font-medium text-2xl">{title}</span>}
      </div>
      {onClose && (
        <Button
          aria-label="X"
          class={`${
            title == "Menu" && "hidden"
          } items-center justify-center bg-white`}
          onClick={onClose}
        >
          <Icon id="XMark" size={24} strokeWidth={2} />
        </Button>
      )}
    </div>
    <Suspense
      fallback={
        <div class="w-screen flex items-center justify-center">
          <span class="loading loading-ring" />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
);

function Drawers({ menu, searchbar, children, platform }: Props) {
  const { displayCart, displayMenu, displaySearchDrawer } = useUI();

  return (
    <>
      <Drawer // left drawer
        open={displayMenu.value || displaySearchDrawer.value}
        onClose={() => {
          displayMenu.value = false;
          displaySearchDrawer.value = false;
        }}
        aside={
          <Aside
            onClose={() => {
              displayMenu.value = false;
              displaySearchDrawer.value = false;
            }}
            title={displayMenu.value ? "Menu" : "Buscar"}
          >
            {displayMenu.value && <Menu items={menu} />}
            {searchbar && displaySearchDrawer.value && (
              <div class="w-screen">
                <Searchbar {...searchbar} />
              </div>
            )}
          </Aside>
        }
      >
        {children}
      </Drawer>
      <Drawer // right drawer
        class="drawer-end"
        open={displayCart.value !== false}
        onClose={() => displayCart.value = false}
        aside={
          <Aside
            title="Minha sacola"
            onClose={() => displayCart.value = false}
          >
            <Cart platform={platform} />
          </Aside>
        }
      >
        {children}
      </Drawer>
    </>
  );
}

export default Drawers;
