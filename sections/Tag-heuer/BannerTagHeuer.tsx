import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  subtitle: string;
  title: string;
  link: string;
}

export default function Banner(
  { desktop, mobile, subtitle, title, link }: Props,
) {
  return (
    <div class="relative bg-black">
      <img
        class="hidden md:block w-full h-auto"
        loading="lazy"
        src={desktop}
        alt="banner"
      />
      <img
        class="md:hidden w-full h-auto"
        loading="lazy"
        src={mobile}
        alt="banner"
      />

      <div class="w-full bottom-0 absolute pb-[30px] md:pb-[70px]">
        <h1 class="text-center text-white text-xs leading-3 font-semibold tracking-[2px] mt-0 mb-[15px] mx-0">
          {subtitle}
        </h1>
        <h2 class="text-center text-3xl font-semibold text-white tracking-[2px] mt-0 mb-[30px] mx-0">
          {title}
        </h2>
        <a
          class="text-white text-xs leading-3 font-semibold tracking-[2px] border flex items-center justify-center w-[200px] no-underline mx-auto my-0 p-5 border-solid border-white"
          href={link}
        >
          COMPRE O RELÓGIO
        </a>
      </div>
    </div>
  );
}
