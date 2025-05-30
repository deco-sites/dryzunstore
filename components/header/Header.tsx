import { AppContext } from "../../apps/site.ts";
import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Drawers from "../../islands/Header/Drawers.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Alert from "../../islands/Header/Alert.tsx";
import Navbar from "./Navbar.tsx";
import WhatsFixed from "../../islands/WhatsFixed.tsx";
import { headerHeight } from "./constants.ts";
import { useId } from "../../sdk/useId.ts";
import { type SectionProps } from "@deco/deco";
import { Head } from "$fresh/runtime.ts";
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
  const script = (id: string) => {
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
    });
  };
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
        dangerouslySetInnerHTML={{ __html: `(${script})("${id}");` }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function getCookie(name) {
              var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
              return match ? match[2] : null;
            }

            function setCookie(name, value, domain) {
              var expirationDate = new Date();
              expirationDate.setFullYear(expirationDate.getFullYear() + 1);
              
              var cookieString = name + "=" + value + "; expires=" + expirationDate.toUTCString() + "; path=/";
              if (domain) {
                cookieString += "; domain=" + domain;
              }
              document.cookie = cookieString;
            }

            // Verifica se o cookie 'rlx-consent' já existe; se não, cria-o com valor 'false'
            if (!getCookie('rlx-consent')) {
              setCookie('rlx-consent', 'false');
            }

            var intervalId = setInterval(function() {
              // Verifica se os botões existem
              if (document.querySelector('#cookiescript_save') || document.querySelector('#cookiescript_reject') || document.querySelector('#cookiescript_accept')) {
                // Adiciona ouvintes de eventos aos botões
                document.querySelectorAll('#cookiescript_save, #cookiescript_reject, #cookiescript_accept').forEach(function(button) {
                  button.addEventListener('click', function() {
                    setTimeout(function() {
                      if (button.id === 'cookiescript_reject') {
                        setCookie('rlx-consent', 'false');
                      } else {
                        var isChecked = document.querySelector('#cookiescript_category_performance')?.checked;
                        setCookie('rlx-consent', isChecked);
                      }
                    }, 1000);
                  });
                });
                
                // Limpa o intervalo após encontrar os botões
                clearInterval(intervalId);
              }
            }, 2000);
          `,
        }}
      />
    </div>
  );
}
export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device, page: _req };
};
export default Header;
