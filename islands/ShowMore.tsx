import { PageInfo } from "apps/commerce/types.ts";
import type { ComponentChildren } from "preact";
import { useEffect, useMemo } from "preact/hooks";
import { useShowMore } from "../sdk/useShowMore.ts";

export interface Props {
  children: ComponentChildren;
  pageInfo: PageInfo;
}

export default function ShowMore(
  { children, pageInfo }: Props,
) {
  const { currentPage, loading } = useShowMore();

  const loadedPage = pageInfo.currentPage;
  const isFirstPage = !pageInfo.previousPage;
  const isAtPage = useMemo(() => currentPage.value === loadedPage, [
    currentPage.value,
  ]);

  useEffect(() => {
    if (!isFirstPage) {
      loading.value = false;
    }
    currentPage.value = loadedPage;
  }, []);

  return (
    <div
      class={(isAtPage && pageInfo.nextPage)
        ? "flex justify-center col-span-full py-[80px] md:py-[120px]"
        : "hidden"}
    >
      {children}
      <button
        class={`btn border-0 bg-[#B4CBF0] hover:bg-[#81A1D4] text-[#243959] transition-[0.3s] cursor-pointer absolute ${
          loading.value ? "hidden" : ""
        }`}
        onClick={() => {
          loading.value = true;
          const element = document.getElementById(
            `show-more-button-${loadedPage}`,
          );
          if (element) {
            element.click();
          }
          if (pageInfo.nextPage) {
            const url = new URL(pageInfo.nextPage, window.location.href);
            url.searchParams.delete("partial");
            window.history.replaceState({}, "", url.toString());
          }
        }}
      >
        CARREGAR MAIS PRODUTOS
      </button>
    </div>
  );
}
