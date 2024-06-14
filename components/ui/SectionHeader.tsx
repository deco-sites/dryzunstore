export interface Props {
  title?: string;
  description?: string;
  alignment?: "center" | "left";
}



function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 ${props.alignment === "left" ? "text-left" : "text-center"
              }`}
          >
            {props.title &&
              (
                <h2
                  class="text-xl md:text-2xl not-italic font-normal leading-[normal] tracking-[1.2px] uppercase text-[#333]"
                >
                  {props.title}
                </h2>
              )}
            {props.description &&
              (
                <h3
                  class={`${props.alignment === "left" ? "text-left" : "text-center"} text-md not-italic font-normal leading-[normal] tracking-[1.2px] text-[#333]`}
                >
                  {props.description}
                </h3>
              )}
          </div >
        )
        : null
      }
    </>
  );
}

export default Header;
