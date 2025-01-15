import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnView } from "../../components/Analytics.tsx";
import Filters from "../../components/search/Filters.tsx";
import Icon from "../../components/ui/Icon.tsx";
import SearchControls from "../../islands/SearchControls.tsx";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";

import InfoPagination from "../../components/search/InfoPagination.tsx";
import Paginations from "../../islands/PaginationCustom.tsx";

export type Format = "Show More" | "Pagination" | "Pagination custom";

export interface Layout {
    /**
     * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
     */
    variant?: "aside" | "drawer";
    /**
     * @description Number of products per line on grid
     */
    columns?: Columns;
    /**
     * @description Format of the pagination
     */
    format?: Format;
}

export interface Props {
    /** @title Integration */
    page: ProductListingPage | null;
    layout?: Layout;

    /** @description 0 for ?page=0 as your first page */
    startingPage?: 0 | 1;
}

function NotFound() {
    return (
        <div class="w-full flex justify-center items-center py-10">
            <span>Not Found!</span>
        </div>
    );
}

function Result({
    page,
    layout,
    startingPage = 0,
    url: _url,
}: Omit<Props, "page"> & {
    page: ProductListingPage;
    url: string;
}) {
    const { products, filters, breadcrumb, pageInfo, sortOptions } = page;
    const perPage = pageInfo?.recordPerPage || products.length;
    const url = new URL(_url);

    const { format = "Pagination custom" } = layout ?? {};

    const id = useId();

    const zeroIndexedOffsetPage = pageInfo.currentPage - startingPage;
    const offset = zeroIndexedOffsetPage * perPage;

    const isPartial = url.searchParams.get("partial") === "true";
    const isFirstPage = !pageInfo.previousPage;

    return (
        <>
            <div class="container-2 px-4 sm:py-10">
                {(isFirstPage || !isPartial) && products.length
                    ? (
                        <SearchControls
                            sortOptions={sortOptions}
                            filters={filters}
                            breadcrumb={breadcrumb}
                            displayFilter={layout?.variant === "drawer"}
                        />
                    )
                    : <></>}

                {products.length
                    ? (
                        <div class="flex flex-row">
                            {layout?.variant === "aside" && filters.length > 0 &&
                                (isFirstPage || !isPartial) && (
                                    <aside class="hidden sm:block w-min min-w-[300px]">
                                        <Filters filters={filters} />
                                    </aside>
                                )}

                            <div class="flex-grow" id={id}>
                                <ProductGallery
                                    products={products}
                                    offset={offset}
                                    layout={{ columns: layout?.columns, format }}
                                    pageInfo={pageInfo}
                                    url={url}
                                />
                            </div>
                        </div>
                    )
                    : (
                        <div class="flex flex-col items-center max-md:mt-20 max-md:mb-10">
                            <h1 class="text-center text-md md:text-3xl text-[#333] font-normal">
                                <b>OPS!</b> O ITEM PROCURADO NÃO PODE SER ENCONTRADO.
                            </h1>
                            <p class="my-5 text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
                                Verifique se você digitou as palavras corretamente ou tente
                                novamente a busca.
                            </p>
                            <p class="text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
                                - Verifique se não há erro de digitação.
                            </p>
                            <p class="text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
                                - Tente utilizar uma única palavra.
                            </p>
                            <p class="text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
                                - Tente buscar por termos menos específicos e posteriormente use
                                os filtros da busca.
                            </p>
                            <p class="text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
                                - Procure utilizar sinônimos ao termo desejado.
                            </p>
                            <a
                                class="mt-5 bg-[#B4CBF0] hover:bg-[#81A1D4] transition-[.3s] flex h-12 justify-center items-center px-4 py-2.5 text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase text-[#243959]"
                                href="/"
                            >
                                voltar para home
                            </a>
                        </div>
                    )}

                {(format === "Pagination custom") && (
                    <>
                        <Paginations pageInfo={pageInfo} />
                        {products && products?.length > 0 && (
                            <InfoPagination pageInfo={pageInfo} />
                        )}
                    </>
                )}

                {format == "Pagination" && (
                    <div class="flex justify-center my-4">
                        <div class="join">
                            <a
                                aria-label="previous page link"
                                rel="prev"
                                href={pageInfo.previousPage ?? "#"}
                                class="btn btn-ghost join-item"
                            >
                                <Icon id="ChevronLeft" size={24} strokeWidth={2} />
                            </a>
                            <span class="btn btn-ghost join-item">
                                Page {zeroIndexedOffsetPage + 1}
                            </span>
                            <a
                                aria-label="next page link"
                                rel="next"
                                href={pageInfo.nextPage ?? "#"}
                                class="btn btn-ghost join-item"
                            >
                                <Icon id="ChevronRight" size={24} strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <SendEventOnView
                id={id}
                event={{
                    name: "view_item_list",
                    params: {
                        // TODO: get category name from search or cms setting
                        item_list_name: breadcrumb.itemListElement?.at(-1)?.name,
                        item_list_id: breadcrumb.itemListElement?.at(-1)?.item,
                        items: page.products?.map((product, index) =>
                            mapProductToAnalyticsItem({
                                ...(useOffer(product.offers)),
                                index: offset + index,
                                product,
                                breadcrumbList: page.breadcrumb,
                            })
                        ),
                    },
                }}
            />
        </>
    );
}

function SearchResult(
    { page, ...props }: ReturnType<typeof loader>,
) {
    if (!page) {
        return <NotFound />;
    }

    return <Result {...props} page={page} />;
}

export const loader = (props: Props, req: Request) => {
    return {
        ...props,
        url: req.url,
    };
};

export default SearchResult;
