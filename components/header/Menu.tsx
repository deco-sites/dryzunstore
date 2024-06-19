import Icon from "../../components/ui/Icon.tsx";

/** @titleBy name */
export interface ItemsI {
  name?: string;
  url?: string;
  newTab?: boolean;
  border?: boolean;
  children?: ItemsI[];
}

export interface Props {
  items: ItemsI[];
}

function MenuItem({ item }: { item: ItemsI }) {
  return (
    <details class="collapse collapse-plus open:absolute open:top-0 open:left-0 open:bg-white open:z-[9]">
      <summary class="collapse-title">{item.name}</summary>
      <div class="collapse-content">
        <ul class="open:h-[70vh] bg-white open:overflow-auto">
          <li>
            <a class="underline text-sm" href={item.url}>Ver todos</a>
          </li>
          {item.children?.map((node) => (
            <li>
              <MenuItem item={node} />
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function Menu({ items }: Props) {
  console.log('items>>>>', items)
  return (
    <div class="flex flex-col h-full">
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
        {items?.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>

      <ul class="flex flex-col py-2 bg-base-200">
        <li class="hidden">
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/wishlist"
          >
            <Icon id="Heart" size={24} strokeWidth={2} />
            <span class="text-sm">Lista de desejos</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="MapPin" size={24} strokeWidth={2} />
            <span class="text-sm">Nossas lojas</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="Phone" size={24} strokeWidth={2} />
            <span class="text-sm">Fale conosco</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="Profile" size={24} strokeWidth={2} />
            <span class="text-sm">Minha conta</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
