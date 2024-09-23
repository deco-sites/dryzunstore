/** @titleBy name */
export interface ItemsI {
  name?: string;
  url?: string;
  newTab?: boolean;
  /** @description Botão ver todos */
  btnAll?: boolean;
  border?: boolean;
  image?: string;
  children?: ItemsI[];
}

function NavItem({ item }: { item: ItemsI }) {
  const { url, name, image, children } = item;

  return (
    <li class="group flex items-center md:justify-center">
      <a
        href={url}
        class="py-3 border-b-2 border-solid border-b-white group-hover:border-b-[#597CB2]"
      >
        <span class="items_menu group-hover:text-[#597CB2] text-[#333] text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase">
          {name}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`w-full md:w-[1200px] left-0 md:left-[-200px] absolute hidden hover:flex group-hover:flex bg-base-100 z-50 items-start ${
              image ? "justify-between" : "justify-center"
            } gap-6 border-t border-b-2 border-base-200`}
            style={{ top: "0px", marginTop: "50px" }}
          >
            <ul class="flex items-start justify-center md:py-8 md:px-10 md:justify-start md:flex-col md:flex-wrap md:h-[415px]">
              {children.map((node) => (
                <li
                  class={`${
                    (node.children && node.children?.length > 0) || node.border
                      ? "w-[200px]"
                      : "w-[300px]"
                  } p-6 md:px-6 md:py-0 ${
                    node.border
                      ? "border-r-2 border-solid border-r-[#E0DEDA]"
                      : ""
                  } ${node.children && node.children?.length > 0 && "h-full"}`}
                >
                  <a
                    class={`text-[12px] text-[#333] not-italic leading-[normal] tracking-[1.2px] ${
                      node.btnAll && "capitalize"
                    } ${
                      node.border ||
                        (node.children && node.children?.length > 0)
                        ? "font-medium uppercase"
                        : "font-normal relative after:absolute after:content-[''] after:bottom-[-2px] after:block after:w-[0px] after:transition-[0.4s] hover:after:w-full after:h-[2px] after:bg-[#597CB2]"
                    } ${
                      node.border
                        ? "text-[#333] relative after:absolute after:content-[''] after:bottom-[-2px] after:block after:w-[0px] after:transition-[0.4s] hover:after:w-full after:h-[2px] after:bg-[#597CB2]"
                        : "text-[#333]"
                    } hover:text-[#333]`}
                    href={node.url}
                  >
                    <span>{node.name}</span>
                  </a>

                  <ul class="oxii flex flex-col gap-1 mt-3">
                    {node.children?.map((leaf) => (
                      <li>
                        <a
                          class="text-sm not-italic font-normal leading-[normal] text-[#666] hover:text-[#666] relative after:absolute after:content-[''] after:bottom-[-2px] after:block after:w-[0px] after:transition-[0.4s] hover:after:w-full after:h-[2px] after:bg-[#597CB2]"
                          href={leaf.url}
                        >
                          <span class="text-xs">{leaf.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            {image && (
              <div class="hidden md:block w-[50%] p-5">
                <img
                  width={576}
                  height={300}
                  class="w-full h-auto"
                  alt={name}
                  src={image}
                />
              </div>
            )}
          </div>
        )}
    </li>
  );
}

export default NavItem;
