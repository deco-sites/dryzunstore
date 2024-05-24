import Icon from "../../components/ui/Icon.tsx";

/**
 * @titleBy Item de Breadcrumb
 */
export interface breadcrumb {
    /** @description Link */
    href: string;
    /** @description Label */
    label: string;
}

export interface Props {
    breadcrumbs?: breadcrumb[];
}


function BreadCrumb(props: Props) {
    const { breadcrumbs } = { ...props };

    return (
        <div class="w-full py-4 bg-gradiente">
            <div class="rolex-container flex items-center">
                <a class="flex items-center text-white mr-2" href="/rolex">
                    Rolex
                </a>
                {breadcrumbs?.map((b, index) => (
                    <a class="flex items-center text-white mr-2" key={index} href={b.href}>
                        <Icon
                            size={20}
                            id="ChevronRight"
                            strokeWidth={3}
                        />
                        {b.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default BreadCrumb;
