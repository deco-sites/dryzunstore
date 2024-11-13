/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */
import ProductCard from "../product/dryzun/ProductCardSearch.tsx";
import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { sendEvent } from "../../sdk/analytics.tsx";
import { useId } from "../../sdk/useId.ts";
import { useSuggestions } from "../../sdk/useSuggestions.ts";
import { useUI } from "../../sdk/useUI.ts";
import { Suggestion } from "apps/commerce/types.ts";
import { useEffect, useRef } from "preact/compat";
import type { Platform } from "../../apps/site.ts";
import { type Resolved } from "@deco/deco";
// Editable props
export interface Props {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * @title Suggestions Integration
   * @todo: improve this typings ({query: string, count: number}) => Suggestions
   */
  loader: Resolved<Suggestion | null>;
  platform?: Platform;
}
function Searchbar(
  {
    placeholder = "What are you looking for?",
    action = "/s",
    name = "q",
    loader,
    platform,
  }: Props,
) {
  const id = useId();
  const { displaySearchPopup } = useUI();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setQuery, payload, loading } = useSuggestions(loader);
  const { products = [], searches = [] } = payload.value ?? {};
  const hasProducts = Boolean(products.length);
  const hasTerms = Boolean(searches.length);
  useEffect(() => {
    if (displaySearchPopup.value === true) {
      searchInputRef.current?.focus();
    }
  }, [displaySearchPopup.value]);
  useEffect(() => {
    //console.log('searches', searches);
    //console.log('hasTerms', hasTerms);
    if (!hasTerms) {
      displaySearchPopup.value = false;
    }
  }, [searches]);
  return (
    <div class=" w-max max-md:w-full relative flex items-center border-b-[#E0DEDA] border-b border-solid">
      <form class="items_menu" id={id} action={action}>
        <input
          ref={searchInputRef}
          id="search-input"
          class="w-full md:w-[200px] h-[32px] bg-transparent outline-none shadow-none text-[#747474] max-md:text-[16px] text-[13px] not-italic font-medium leading-[normal]"
          name={name}
          onInput={(e) => {
            const value = e.currentTarget.value;
            if (value) {
              if ((value.toLowerCase())?.includes("rolex")) {
                globalThis.window.location.href = "/rolex/relogios-rolex";
              }
              sendEvent({
                name: "search",
                params: { search_term: value },
              });
            }
            setQuery(value);
          }}
          placeholder={placeholder}
          role="combobox"
          aria-controls="search-suggestion"
          aria-haspopup="listbox"
          aria-expanded={displaySearchPopup.value}
          autocomplete="off"
        />

        <Button
          type="submit"
          class="items_menu absolute right-0 shadow-none border-0 bg-transparent p-0 max-h-[32px] min-h-[32px]"
          aria-label="Search"
          for={id}
          tabIndex={-1}
        >
          {loading.value
            ? <span class="loading loading-spinner loading-xs" />
            : <Icon id="MagnifyingGlass" size={24} strokeWidth={0.01} />}
        </Button>
      </form>

      <div
        class={`absolute z-[1] w-full md:w-[620px] overflow-auto p-[16px] top-10 bg-white ${
          !hasTerms ? "hidden" : ""
        }`}
      >
        <div class="gap-4 grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-[150px_1fr]">
          <div class="flex flex-col gap-6">
            <span class="font-medium text-xl" role="heading" aria-level={3}>
              Sugestões
            </span>
            <ul id="search-suggestion" class="flex flex-col gap-6">
              {searches.map(({ term }) => (
                <li>
                  <a href={`/s?q=${term}`} class="flex gap-4 items-center">
                    <span>
                      <Icon id="MagnifyingGlass" size={24} strokeWidth={0.01} />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: term }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden">
            <span class="font-medium text-xl" role="heading" aria-level={3}>
              Produtos sugeridos
            </span>
            <div id={id} class="hidden container">
              <Slider class="carousel carousel-center sm:carousel-end sm:gap-1 row-start-2 row-end-5">
                {products?.map((product, index) => (
                  <Slider.Item index={index} class="carousel-item">
                    <ProductCard
                      product={product}
                      platform={platform}
                      index={index}
                      itemListName="Suggeestions"
                    />
                  </Slider.Item>
                ))}
              </Slider>
            </div>

            <div>
              {products?.map((product, index) => (
                <div class={`card-${index}`}>
                  <ProductCard
                    product={product}
                    platform={platform}
                    index={index}
                    itemListName="Suggeestions"
                  />
                </div>
              ))}
            </div>

            <Slider.JS rootId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Searchbar;
