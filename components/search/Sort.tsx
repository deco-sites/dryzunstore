import { ProductListingPage } from "apps/commerce/types.ts";
import type { JSX } from "preact";
import { useMemo } from "preact/hooks";

const SORT_QUERY_PARAM = "sort";
const PAGE_QUERY_PARAM = "page";

const useSort = () =>
    useMemo(() => {
        const urlSearchParams = new URLSearchParams(
            globalThis.window?.location?.search,
        );
        return urlSearchParams.get(SORT_QUERY_PARAM) ?? "release:desc";
    }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    const urlSearchParams = new URLSearchParams(
        globalThis.window.location.search,
    );

    urlSearchParams.delete(PAGE_QUERY_PARAM);
    urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
    globalThis.window.location.search = urlSearchParams.toString();
};

export type Props = Pick<ProductListingPage, "sortOptions">;

// TODO: move this to the loader
const portugueseMappings = {
    "relevance:desc": "Relevância",
    "price:desc": "Maior Preço",
    "price:asc": "Menor Preço",
    "orders:desc": "Mais vendidos",
    "name:desc": "Nome - de Z a A",
    "name:asc": "Nome - de A a Z",
    "release:desc": "Lançamento",
    "discount:desc": "Maior desconto",
};

function Sort({ sortOptions }: Props) {
    const sort = useSort();

    return (
        <>
            <label for="sort" class="sr-only">Ordenar por</label>
            <select
                id="sort"
                name="sort"
                onInput={applySort}
                class="w-min h-[36px] px-1 rounded m-2 text-base-content cursor-pointer outline-none"
            >
                {sortOptions.map(({ value, label }) => ({
                    value,
                    label: portugueseMappings[label as keyof typeof portugueseMappings] ??
                        label,
                })).filter(({ label }) => label).map(({ value, label }) => (
                    <>
                        <option key={value} value={value} selected={value === sort}>
                            <span class="text-sm">{label}</span>
                        </option>
                    </>
                ))}
            </select>
        </>
    );
}

export default Sort;
