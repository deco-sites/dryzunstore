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
      <summary class="after:!top-[1rem] after:!text-[#81A1D4] max-md:h-[48px] max-md:flex-force items-center collapse-title collapse-title-item min-h-[35px] px-0 py-2 text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
        {item.children && item.children?.length > 0
          ? (
            <div class="border-b boder-[#EFEFEF] md:boder-0 max-md:w-full max-md:h-full max-md:block">
              {item.name}
            </div>
          )
          : (
            <a
              class="max-md:w-full max-md:h-full max-md:block border-b boder-[#EFEFEF] md:boder-0"
              href={item.url}
            >
              {item.name}
            </a>
          )}
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
    <div class="flex flex-col h-full max-md:!border-0">
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
            href="/_secure/account#/orders"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.8125 0.788147V2.66315C5.8125 2.87408 5.97656 3.03815 6.1875 3.03815H7.3125C7.5 3.03815 7.6875 2.87408 7.6875 2.66315V0.788147H8.625C9.23438 0.788147 9.75 1.30377 9.75 1.91315V4.53815C9.75 5.3819 9.07031 6.03815 8.25 6.03815H5.25C4.40625 6.03815 3.75 5.3819 3.75 4.53815V1.91315C3.75 1.30377 4.24219 0.788147 4.875 0.788147H5.8125ZM1.5 6.78815H2.4375V8.66315C2.4375 8.87408 2.60156 9.03815 2.8125 9.03815H3.9375C4.125 9.03815 4.3125 8.87408 4.3125 8.66315V6.78815H5.25C6.07031 6.78815 6.75 7.46783 6.75 8.28815V11.2881C6.75 12.1319 6.07031 12.7881 5.25 12.7881H1.5C0.65625 12.7881 0 12.1319 0 11.2881V8.28815C0 7.46783 0.65625 6.78815 1.5 6.78815ZM8.25 12.7881C7.89844 12.7881 7.57031 12.671 7.3125 12.4835C7.42969 12.2256 7.5 11.9678 7.5 11.6631V7.91315C7.5 7.6319 7.42969 7.37408 7.3125 7.11627C7.57031 6.92877 7.89844 6.78815 8.25 6.78815H9.1875V8.66315C9.1875 8.87408 9.35156 9.03815 9.5625 9.03815H10.6875C10.875 9.03815 11.0625 8.87408 11.0625 8.66315V6.78815H12C12.8203 6.78815 13.5 7.46783 13.5 8.28815V11.2881C13.5 12.1319 12.8203 12.7881 12 12.7881H8.25Z"
                fill="#81A1D4"
              />
            </svg>

            <span class="text-sm">Meus Pedidos</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/institucional/quem-somos"
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.71875 0.585022C3.83594 0.444397 4 0.350647 4.1875 0.350647H9.8125C9.97656 0.350647 10.1406 0.444397 10.2578 0.585022L12.8828 4.14752C13.0469 4.35846 13.0234 4.66315 12.8359 4.87408L7.39844 10.8741C7.30469 10.9913 7.14062 11.0616 7 11.0616C6.83594 11.0616 6.67188 10.9913 6.57812 10.8741L1.14062 4.87408C0.953125 4.66315 0.929688 4.35846 1.09375 4.14752L3.71875 0.585022ZM4.63281 1.52252C4.53906 1.59283 4.53906 1.68658 4.58594 1.78033L5.92188 4.0069L2.47656 4.28815C2.38281 4.31158 2.3125 4.3819 2.3125 4.47565C2.3125 4.59283 2.38281 4.66315 2.47656 4.66315L6.97656 5.03815H7L11.5 4.66315C11.5938 4.66315 11.6641 4.59283 11.6641 4.47565C11.6641 4.3819 11.5938 4.31158 11.5 4.28815L8.05469 4.0069L9.39062 1.78033C9.46094 1.68658 9.4375 1.59283 9.34375 1.52252C9.27344 1.47565 9.15625 1.47565 9.10938 1.54596L7 3.84283L4.86719 1.54596C4.82031 1.47565 4.70312 1.47565 4.63281 1.52252Z"
                fill="#81A1D4"
              />
            </svg>

            <span class="text-sm">A Marca</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/fale-conosco"
          >
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1.91315C3.30469 1.91315 1.125 4.11627 1.125 6.78815V7.72565C1.125 8.05377 0.867188 8.28815 0.5625 8.28815C0.234375 8.28815 0 8.05377 0 7.72565V6.78815C0 3.48346 2.67188 0.788147 6 0.788147C9.30469 0.788147 12 3.48346 12 6.78815V10.1866C12 11.3116 11.0625 12.2491 9.91406 12.2491L7.33594 12.2256C7.14844 12.5772 6.77344 12.7881 6.375 12.7881H5.625C4.99219 12.7881 4.5 12.296 4.5 11.6631C4.5 11.0538 4.99219 10.5381 5.625 10.5381H6.375C6.77344 10.5381 7.14844 10.7725 7.33594 11.1006L9.9375 11.1241C10.4531 11.1241 10.875 10.7022 10.875 10.1866V6.78815C10.875 4.11627 8.67188 1.91315 6 1.91315ZM3.375 5.66315H3.75C4.14844 5.66315 4.5 6.01471 4.5 6.41315V9.03815C4.5 9.46002 4.14844 9.78815 3.75 9.78815H3.375C2.53125 9.78815 1.875 9.1319 1.875 8.28815V7.16315C1.875 6.34283 2.53125 5.66315 3.375 5.66315ZM8.625 5.66315C9.44531 5.66315 10.125 6.34283 10.125 7.16315V8.28815C10.125 9.1319 9.44531 9.78815 8.625 9.78815H8.25C7.82812 9.78815 7.5 9.46002 7.5 9.03815V6.41315C7.5 6.01471 7.82812 5.66315 8.25 5.66315H8.625Z"
                fill="#81A1D4"
              />
            </svg>

            <span class="text-sm">Fale Conosco</span>
          </a>
        </li>
      </ul>
      <ul class="px-2 mt-4 flex items-center gap-4">
        <li>
          <a
            class="flex w-10 h-10 flex-col justify-center items-center border rounded-[50%] border-solid border-[#E8EDF5]"
            href="https://www.instagram.com/dryzunjoias/"
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
            href="https://www.facebook.com/Dryzun/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C16 12.0938 12.9062 15.4688 8.96875 15.9688V10.4688H11.125L11.5625 8H8.96875V7.15625C8.96875 5.84375 9.46875 5.34375 10.7812 5.34375C11.1875 5.34375 11.5 5.375 11.6875 5.375V3.1875C11.3438 3.0625 10.4688 2.96875 9.96875 2.96875C7.28125 2.96875 6.0625 4.25 6.0625 6.96875V8H4.40625V10.4688H6.0625V15.7812C2.5625 14.9062 0 11.75 0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8Z"
                fill="#81A1D4"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            class="flex w-10 h-10 flex-col justify-center items-center border rounded-[50%] border-solid border-[#E8EDF5]"
            href="https://www.youtube.com/user/dryzunjoias"
            target="_blank"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1562 1.90625C17.5312 3.21875 17.5312 6.03125 17.5312 6.03125C17.5312 6.03125 17.5312 8.8125 17.1562 10.1562C16.9688 10.9062 16.375 11.4688 15.6562 11.6562C14.3125 12 9 12 9 12C9 12 3.65625 12 2.3125 11.6562C1.59375 11.4688 1 10.9062 0.8125 10.1562C0.4375 8.8125 0.4375 6.03125 0.4375 6.03125C0.4375 6.03125 0.4375 3.21875 0.8125 1.90625C1 1.15625 1.59375 0.5625 2.3125 0.375C3.65625 0 9 0 9 0C9 0 14.3125 0 15.6562 0.375C16.375 0.5625 16.9688 1.15625 17.1562 1.90625ZM7.25 8.5625L11.6875 6.03125L7.25 3.5V8.5625Z"
                fill="#81A1D4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
