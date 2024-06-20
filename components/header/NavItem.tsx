/** @titleBy name */
export interface ItemsI {
  name?: string;
  url?: string;
  newTab?: boolean;
  /** @description Botão ver todos */
  btnAll?: boolean;
  border?: boolean;
  children?: ItemsI[];
}

function NavItem({ item }: { item: ItemsI }) {
  const { url, name, children } = item;

  return (
    <li class="group flex items-center md:justify-center">
      <a href={url} class="py-3 border-b-2 border-solid border-b-white group-hover:border-b-[#81A1D4]">
        <span class="group-hover:text-[#81A1D4] text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase">
          {name}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="w-full absolute hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200"
            style={{ top: "0px", left: "0px", marginTop: '50px' }}
          >
            <ul class="flex items-start justify-center md:py-8 md:px-10 md:justify-start md:flex-col md:flex-wrap md:h-[355px]">
              {children.map((node) => (
                <li class={`${(node.children && node.children?.length > 0) || node.border ? 'w-[200px]' : 'w-[300px]'} p-6 md:px-6 md:py-0 ${node.border ? 'border-r-2 border-solid border-r-[#E0DEDA]' : ''} ${node.children && node.children?.length > 0 && 'h-full'}`}>
                  <a class={`text-[13px] not-italic leading-[normal] tracking-[1.3px] ${node.btnAll && 'text-[#81A1D4] capitalize underline'} ${node.border || (node.children && node.children?.length > 0) ? 'font-medium uppercase' : 'font-normal'} ${node.border ? 'text-[#81A1D4]' : 'text-[#333]'} hover:text-[#81A1D4]`} href={node.url}>
                    <span>{node.name}</span>
                  </a>

                  <ul class="flex flex-col gap-1 mt-3">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="text-sm not-italic font-normal leading-[normal] text-[#666461] hover:text-[#81A1D4]" href={leaf.url}>
                          <span class="text-xs">{leaf.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
