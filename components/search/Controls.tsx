import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "apps/commerce/types.ts";
import Filters from "../../components/search/Filters.tsx";
import Sort from "../../components/search/Sort.tsx";
import Breadcrumb from "../../components/ui/Breadcrumb.tsx";
import Button from "../../components/ui/Button.tsx";
import Drawer from "../../components/ui/Drawer.tsx";
import Icon from "../../components/ui/Icon.tsx";

export type Props =
    & Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">
    & {
        displayFilter?: boolean;
    };

function SearchControls(
    { filters, breadcrumb, displayFilter, sortOptions }: Props,
) {
    const open = useSignal(false);

    return (
        <Drawer
            loading="lazy"
            open={open.value}
            onClose={() => open.value = false}
            aside={
                <>
                    <div class="w-[80%] bg-base-100 flex flex-col h-full divide-y overflow-y-hidden">
                        <div class="flex justify-between items-center">
                            <div class="px-4 py-3">
                                <span class="font-medium text-2xl">Filtrar</span>
                            </div>
                            <Button class="btn btn-ghost" onClick={() => open.value = false}>
                                <Icon id="XMark" size={24} strokeWidth={2} />
                            </Button>
                        </div>
                        <div class="flex-grow overflow-auto">
                            <Filters filters={filters} />
                        </div>
                    </div>
                </>
            }
        >
            <div class="flex flex-col justify-between mb-4 p-4 sm:mb-0 sm:p-0 sm:gap-4 sm:flex-row sm:h-[53px] sm:border-b sm:border-base-200">
                <div class="flex flex-row items-center sm:p-0 mb-2">
                    <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
                </div>

                <div class="flex flex-row items-center justify-between border-b border-base-200 sm:gap-4 sm:border-none">
                    <Button
                        class={displayFilter ? "btn-ghost" : "btn-ghost sm:hidden"}
                        onClick={() => {
                            open.value = true;
                        }}
                    >
                        Filtrar
                        <Icon id="FilterList" width={16} height={16} />
                    </Button>
                    {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
                </div>
            </div>
        </Drawer>
    );
}

export default SearchControls;
