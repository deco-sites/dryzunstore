import { AppContext } from "../../apps/site.ts";
import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Drawers from "../../islands/Header/Drawers.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SectionProps } from "deco/types.ts";
import Alert from "../../islands/Header/Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

import { useId } from "../../sdk/useId.ts";

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

export interface Props {
  alerts?: string[];

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

  const home = (new URL(page.url)).pathname == "/";

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

      const isHome = globalThis.window.location.pathname == "/";

      if (header && isHome) {
        globalThis.window.addEventListener("scroll", function () {
          if (globalThis.window.scrollY > 100) {
            header.classList.add("active");
          } else {
            header.classList.remove("active");
          }
        });
      }
    });
  };

  console.log("device", device);

  return (
    <div id={id} class={`${home && "page-home"}`}>
      <header
        id="header-main"
        class="mb-[50px]"
        style={{ height: headerHeight }}
      >
        <Drawers
          menu={items}
          searchbar={searchbar}
          platform={platform}
        >
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
      </header>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${script})("${id}");` }}
      />
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device, page: _req };
};

export default Header;
