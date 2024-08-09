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
  const isLast = breadcrumbs && breadcrumbs?.length - 1;

  return (
    <div class="w-full py-4 bg-gradiente">
      <div class="rolex-container flex items-center">
        <a
          class="hidden md:flex items-center mr-2 fixed14-ligth text-white"
          href="/rolex/descubra"
        >
          Rolex
        </a>
        {breadcrumbs?.map((b, index) => (
          <a
            class={`md:flex ${index == isLast ? 'max-md:flex' : 'max-md:hidden'} items-center mr-2 fixed14-ligth ${
              index == isLast ? " md:pointer-events-none text-white md:text-[#61BD93] cursor-default" : "text-white"
            }`}
            key={index}
            href={b.href}
          >
            <Icon
              class="hidden md:block text-white mr-1"
              size={20}
              id="ChevronRight"
              strokeWidth={3}
            />
             <Icon
              class="md:hidden text-white mr-1"
              size={16}
              id="ChevronLeft"
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
