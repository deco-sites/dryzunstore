import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  desktop?: ImageWidget;
  mobile?: ImageWidget;
  alt?: string;
  link?: string;
}

export default function BannerSingle({ desktop, mobile, alt, link }: Props) {
  return (
    <div class="w-full">
      <a href={link ?? "#"} class="block">
        <img
          width={1270}
          height={400}
          loading="lazy"
          class="hidden md:block w-full  h-auto"
          src={desktop ?? ""}
          alt={alt ?? ""}
        />
        <img
          width={328}
          height={184}
          loading="lazy"
          class="md:hidden w-full  h-auto"
          src={mobile ?? ""}
          alt={alt ?? ""}
        />
      </a>
    </div>
  );
}
