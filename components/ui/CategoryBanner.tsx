import type { ProductListingPage } from "apps/commerce/types.ts";
import type { SectionProps } from "deco/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy matcher
 */
export interface Banner {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  image: {
    /** @description Image for big screens */
    desktop: ImageWidget;
    /** @description Image for small screens */
    mobile: ImageWidget;
    /** @description image alt text */
    alt?: string;
  };
}

const DEFAULT_PROPS = {
  banners: [
    {
      image: {
        mobile:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/91102b71-4832-486a-b683-5f7b06f649af",
        desktop:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/ec597b6a-dcf1-48ca-a99d-95b3c6304f96",
        alt: "a",
      },
      title: "Woman",
      matcher: "/*",
      subtitle: "As",
    },
  ],
};

function Banner(props: SectionProps<ReturnType<typeof loader>>) {
  const { page, banner } = props;

  let title = "";

  if (page?.breadcrumb) {
    const { breadcrumb } = page;
    const { itemListElement, numberOfItems } = breadcrumb;

    if (itemListElement && numberOfItems) {
      title = itemListElement[numberOfItems - 1]?.name || "";
    }
  }

  //console.log('title', title);

  return (
    <div class="grid grid-cols-1 grid-rows-1">
      {banner
        ? (
          <>
            <img
              class="w-full hidden md:block"
              src={banner?.image?.desktop}
              alt={banner?.image?.alt ?? banner?.title}
            />
            <img
              class="w-full md:hidden"
              src={banner?.image?.mobile}
              alt={banner?.image?.alt ?? banner?.title}
            />
            <h1 class="pt-7 max-md:px-5 container-2 text-left text-2xl not-italic font-normal leading-[normal] tracking-[1.2px] uppercase text-[#333]">
              {title}
            </h1>
          </>
        )
        : (
          <div class="pt-7 max-md:px-5 container-2 flex flex-col items-center justify-center sm:items-start col-start-1 col-span-1 row-start-1 row-span-1 w-full">
            <h1 class="w-full text-left text-2xl not-italic font-normal leading-[normal] tracking-[1.2px] uppercase text-[#333]">
              {title}
            </h1>
            <h2 class="text-left text-[13px] not-italic font-light leading-[140%] tracking-[0.65px] text-[#333]">
              {banner?.subtitle}
            </h2>
          </div>
        )}
    </div>
  );
}

export interface Props {
  page: ProductListingPage | null;
  banners?: Banner[];
}

export const loader = (props: Props, req: Request) => {
  const { page, banners } = { ...DEFAULT_PROPS, ...props };

  const banner = banners.find(({ matcher }) =>
    new URLPattern({ pathname: matcher }).test(req.url)
  );

  return { page, banner };
};

export default Banner;
