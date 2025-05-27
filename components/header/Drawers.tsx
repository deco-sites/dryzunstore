//import type { Props as MenuProps } from "../../components/header/Menu.tsx";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";
import Cart from "../../components/minicart/Cart.tsx";
import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Button from "../../components/ui/Button.tsx";
import Drawer from "../../components/ui/Drawer.tsx";
import Icon from "../../components/ui/Icon.tsx";
import SeloRolex from "../../islands/SeloRolex.tsx";
import SeloTudor from "../../islands/SeloTudor.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import { useUI } from "../../sdk/useUI.ts";

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
        class={`header-2b bg-base-100 grid grid-rows-[auto_1fr] h-full divide-y ${title == "Menu" && "w-[80vw] max-w-[100vw]"
            }`}
    >
        <div class="flex justify-between items-center">
            <div class="w-full px-4 py-3">
                {title == "Menu"
                    ? (
                        <>
                            <div class="w-full flex items-center justify-between mb-5">
                                <SeloRolex />
                                <SeloTudor />
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
                                            fill="currentColor"
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
                                    <svg
                                        class="mr-2"
                                        width="18"
                                        height="21"
                                        viewBox="0 0 18 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.5 5.78815C12.5 4.46002 11.7578 3.24908 10.625 2.54596C9.45312 1.8819 8.00781 1.8819 6.875 2.54596C5.70312 3.24908 5 4.46002 5 5.78815C5 7.15533 5.70312 8.36627 6.875 9.0694C8.00781 9.73346 9.45312 9.73346 10.625 9.0694C11.7578 8.36627 12.5 7.15533 12.5 5.78815ZM3.75 5.78815C3.75 4.03033 4.6875 2.38971 6.25 1.49127C7.77344 0.592834 9.6875 0.592834 11.25 1.49127C12.7734 2.38971 13.75 4.03033 13.75 5.78815C13.75 7.58502 12.7734 9.22565 11.25 10.1241C9.6875 11.0225 7.77344 11.0225 6.25 10.1241C4.6875 9.22565 3.75 7.58502 3.75 5.78815ZM1.25 19.5381H16.25C16.1719 16.4522 13.6328 13.9131 10.5078 13.9131H6.95312C3.82812 13.9131 1.28906 16.4522 1.25 19.5381ZM0 19.6553C0 15.7881 3.08594 12.6631 6.95312 12.6631H10.5078C14.375 12.6631 17.5 15.7881 17.5 19.6553C17.5 20.2803 16.9531 20.7881 16.3281 20.7881H1.13281C0.507812 20.7881 0 20.2803 0 19.6553Z"
                                            fill="#597CB2"
                                        />
                                    </svg>

                                    Minha Conta
                                </a>
                                <a class="flex items-center text-[#597CB2]">
                                    <svg
                                        width="20"
                                        height="18"
                                        viewBox="0 0 20 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.4609 8.86627C12.4609 8.86627 12.5 8.82721 12.5 8.78815L12.4609 8.74908L7.30469 3.86627C7.26562 3.82721 7.1875 3.78815 7.10938 3.78815C6.99219 3.78815 6.875 3.90533 6.875 4.06158V6.28815C6.875 6.63971 6.5625 6.91315 6.25 6.91315H1.5625C1.36719 6.91315 1.25 7.0694 1.25 7.22565V10.3506C1.25 10.546 1.36719 10.6631 1.5625 10.6631H6.25C6.5625 10.6631 6.875 10.9756 6.875 11.2881V13.5538C6.875 13.671 6.99219 13.7881 7.10938 13.7881C7.1875 13.7881 7.26562 13.7881 7.30469 13.7491L12.4609 8.86627ZM13.75 8.78815C13.75 9.17877 13.5938 9.53033 13.3203 9.80377L8.16406 14.6475C7.89062 14.921 7.5 15.0381 7.10938 15.0381C6.28906 15.0381 5.625 14.3741 5.625 13.5538V11.9131H1.5625C0.664062 11.9131 0 11.2491 0 10.3506V7.22565C0 6.36627 0.664062 5.66315 1.5625 5.66315H5.625V4.06158C5.625 3.24127 6.28906 2.53815 7.10938 2.53815C7.5 2.53815 7.89062 2.6944 8.16406 2.96783L13.3203 7.81158C13.5938 8.08502 13.75 8.43658 13.75 8.78815ZM13.125 16.2881H16.875C17.8906 16.2881 18.75 15.4678 18.75 14.4131V3.16315C18.75 2.14752 17.8906 1.28815 16.875 1.28815H13.125C12.7734 1.28815 12.5 1.01471 12.5 0.663147C12.5 0.350647 12.7734 0.038147 13.125 0.038147H16.875C18.5938 0.038147 20 1.4444 20 3.16315V14.4131C20 16.171 18.5938 17.5381 16.875 17.5381H13.125C12.7734 17.5381 12.5 17.2647 12.5 16.9131C12.5 16.6006 12.7734 16.2881 13.125 16.2881Z"
                                            fill="#597CB2"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </>
                    )
                    : <span class="font-medium text-2xl">{title}</span>}
            </div>
            {onClose && (
                <Button
                    aria-label="X"
                    class={`${title == "Menu" && "hidden"
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
