import { type SectionProps } from "@deco/deco";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../apps/site.ts";
import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Alert from "../../islands/Header/Alert.tsx";
import Drawers from "../../islands/Header/Drawers.tsx";
import WhatsFixed from "../../islands/WhatsFixed.tsx";
import { useId } from "../../sdk/useId.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import { headerHeight } from "./constants.ts";
import Navbar from "./Navbar.tsx";

export interface Logo {
    src: ImageWidget;
    alt: string;
    width?: number;
    height?: number;
}
export interface Buttons {
    hideSearchButton?: boolean;
    hideAccountButton?: boolean;
    hideWishlistButton?: boolean;
    hideCartButton?: boolean;
}
/** @titleBy name */
export interface ItemsI {
    name?: string;
    url?: string;
    image?: ImageWidget;
    newTab?: boolean;
    border?: boolean;
    /** @description Botão ver todos */
    btnAll?: boolean;
    children?: ItemsI[];
}
interface IAlertsText {
    text?: string;
    url?: string;
    label?: string;
}
export interface Props {
    alerts?: IAlertsText[];
    /** @title Search Bar */
    searchbar?: Omit<SearchbarProps, "platform">;
    /**
     * @title Categorias de navegação
     */
    navItems?: ItemsI[] | null;
    /** @title Logo */
    logo?: Logo;
    buttons?: Buttons;
}

const script = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const header = document.getElementById("header-main");
        const closeTipbar = document.getElementsByClassName("closeTipbar");

        if (closeTipbar && header) {
            for (let i = 0; i < closeTipbar.length; i++) {
                closeTipbar[i].addEventListener("click", function () {
                    header.classList.add("remove");
                });
            }
        }

        const isHome = globalThis.window?.location?.pathname == "/" ||
            globalThis.window?.location?.pathname == "/tag-heuer";

        if (header && isHome) {
            globalThis.window?.addEventListener("scroll", function () {
                if (globalThis.window?.scrollY > 100) {
                    header.classList.add("active");
                } else {
                    header.classList.remove("active");
                }
            });
        }

        const getCookie = (name: string) => {
            const match = document.cookie.match(
                new RegExp("(^| )" + name + "=([^;]+)"),
            );
            return match ? match[2] : null;
        };

        const setCookie = (name: string, value: string, domain: string) => {
            const expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);

            let cookieString = name + "=" + value + "; expires=" +
                expirationDate.toUTCString() + "; path=/";

            if (domain) {
                cookieString += "; domain=" + domain;
            }
            document.cookie = cookieString;
        };

        console.log("######### rlx-consent", getCookie("rlx-consent"));

        // Verifica se o cookie 'rlx-consent' já existe; se não, cria-o com valor 'false'
        if (!getCookie("rlx-consent")) {
            setCookie("rlx-consent", "false", "");
        }

        // Constantes para seletores de botões do cookie script
        const COOKIE_BUTTON_SELECTORS = {
            SAVE: "#cookiescript_save",
            REJECT: "#cookiescript_reject", 
            ACCEPT: "#cookiescript_accept"
        };

        const PERFORMANCE_CHECKBOX_SELECTOR = "#cookiescript_category_performance";
        const COOKIE_CHECK_INTERVAL = 2000;
        const COOKIE_CONSENT_DELAY = 1000;

        // Função para verificar se algum botão do cookie script existe
        const cookieButtonsExist = () => {
            return Object.values(COOKIE_BUTTON_SELECTORS).some(selector => 
                document.querySelector(selector)
            );
        };

        // Função para configurar o consentimento de cookies
        const handleCookieConsent = (button: Element) => {
            setTimeout(() => {
                console.log("######### button", COOKIE_BUTTON_SELECTORS.REJECT, button.id);

                if (button.id === COOKIE_BUTTON_SELECTORS.REJECT.slice(1)) {
                    // setCookie("rlx-consent", "false", "");
                } else {
                    const performanceCheckbox = document.querySelector(
                        PERFORMANCE_CHECKBOX_SELECTOR
                    ) as HTMLInputElement;
                    
                    console.log("######### performanceCheckbox", performanceCheckbox);

                    const consentValue = performanceCheckbox?.checked ? "true" : "false";
                    // setCookie("rlx-consent", consentValue, "");
                }
            }, COOKIE_CONSENT_DELAY);
        };

        // Inicializa o monitoramento dos botões de cookie
        const intervalId = setInterval(() => {
            console.log("######### cookieButtonsExist", cookieButtonsExist());
            if (cookieButtonsExist()) {
                const cookieButtons = document.querySelectorAll(
                    Object.values(COOKIE_BUTTON_SELECTORS).join(", ")
                );

                cookieButtons.forEach(button => {
                    button.addEventListener("click", () => handleCookieConsent(button));
                });

                clearInterval(intervalId);
            }
        }, COOKIE_CHECK_INTERVAL);
    });
};

function Header({
    alerts,
    searchbar,
    navItems = [],
    logo = {
        src:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
        width: 100,
        height: 16,
        alt: "Logo",
    },
    buttons,
    device,
    page,
}: SectionProps<typeof loader>) {
    const platform = usePlatform();
    const items = navItems ?? [];
    const id = useId();
    const home = (new URL(page.url)).pathname == "/" ||
        (new URL(page.url)).pathname == "/tag-heuer";

    return (
        <div id={id} class={`${home && "page-home"}`}>
            <header
                id="header-main"
                class="mb-[50px]"
                style={{ height: headerHeight }}
            >
                <Drawers menu={items} searchbar={searchbar} platform={platform}>
                    <div class="nav-2b-1 bg-base-100 fixed w-full z-50">
                        {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
                        <Navbar
                            device={device}
                            items={items}
                            searchbar={searchbar && { ...searchbar, platform }}
                            logo={logo}
                            buttons={buttons}
                        />
                    </div>
                </Drawers>
                <WhatsFixed />
            </header>

            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: `(${script})()` }}
            />
        </div>
    );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
    return { ...props, device: ctx.device, page: _req };
};
export default Header;
