import Icon from "../../components/ui/Icon.tsx";

/** @titleBy name */
export interface ItemsI {
  name?: string;
  url?: string;
  newTab?: boolean;
  border?: boolean;
  /** @description Botão ver todos */
  btnAll?: boolean;
  children?: ItemsI[];
}

export interface Props {
  items: ItemsI[];
}

function MenuItem({ item }: { item: ItemsI }) {
  return (
    <details
      class={`${
        item.children && item.children?.length > 0 && "collapse collapse-arrow"
      } open:absolute open:top-0 open:left-0 open:bg-white open:z-[9]`}
    >
      <summary class="collapse-title collapse-title:after:top-[18px] min-h-[35px] px-0 py-2 text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
        {item.children && item.children?.length > 0
          ? item.name
          : <a href={item.url}>{item.name}</a>}
      </summary>
      <div class="collapse-content">
        <ul class="open:h-[70vh] bg-white open:overflow-auto">
          {item.children?.map((node) => (
            <li>
              <MenuItem item={node} />
            </li>
          ))}
          <li>
            <a class="underline text-sm" href={item.url}>Ver todos</a>
          </li>
        </ul>
      </div>
    </details>
  );
}

function Menu({ items }: Props) {
  return (
    <div class="flex flex-col h-full">
      <ul class="px-4 flex-grow flex flex-col overflow-auto max-h-[47vh] h-[47vh]">
        {items?.map((item) => (
          <li class="relative">
            <MenuItem item={item} />
          </li>
        ))}
      </ul>

      <ul class="flex flex-col py-2 border-t border-t-[#E0DEDA] border-solid">
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
            class="flex items-center gap-4 px-4 py-2 text-sm not-italic font-normal leading-[normal] text-[#666461]"
            href="#"
          >
            <Icon
              class="text-[#81A1D4]"
              id="MapPin"
              size={24}
              strokeWidth={2}
            />
            <span class="text-sm">Meus Pedidos</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="#"
          >
            <Icon class="text-[#81A1D4]" id="Phone" size={24} strokeWidth={2} />
            <span class="text-sm">A Marca</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="#"
          >
            <Icon class="text-[#81A1D4]" id="Phone" size={24} strokeWidth={2} />
            <span class="text-sm">Fale Conosco</span>
          </a>
        </li>
      </ul>
      <ul class="px-2 mt-4 flex items-center gap-4">
        <li>
          <a
            class="flex w-10 h-10 flex-col justify-center items-center border rounded-[50%] border-solid border-[#E8EDF5]"
            href="#"
            target="_blank"
          >
            <Icon
              class="text-[#81A1D4]"
              id="Instagram"
              size={24}
              strokeWidth={2}
            />
          </a>
        </li>
        <li>
          <a
            class="flex w-10 h-10 flex-col justify-center items-center border rounded-[50%] border-solid border-[#E8EDF5]"
            href="#"
            target="_blank"
          >
            <Icon
              class="text-[#81A1D4]"
              id="Facebook"
              size={24}
              strokeWidth={2}
            />
          </a>
        </li>
        <li>
          <a
            class="flex w-10 h-10 flex-col justify-center items-center border rounded-[50%] border-solid border-[#E8EDF5]"
            href="#"
            target="_blank"
          >
            <Icon
              class="text-[#81A1D4]"
              id="Facebook"
              size={24}
              strokeWidth={2}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
