import type {
    BreadcrumbList,
    ProductDetailsPage,
    ProductListingPage,
} from "apps/commerce/types.ts";

interface Props {
  title?: string;
  /**
   * @title Title template
   * @description add a %s whenever you want it to be replaced with the category name or search term
   * @default %s | Deco.cx
   */
  titleTemplate?: string;
  description?: string;
  /**
   * @title Title template
   * @description add a %s whenever you want it to be replaced with the category name or search term
   * @default %s | Deco.cx
   */
  descriptionTemplate?: string;
  /** @default website */
  type?: "website" | "article";
  /** @description Recommended: 1200 x 630 px (up to 5MB) */
  image?: any;
  /** @description Recommended: 16 x 16 px */
  favicon?: any;
  /** @description Suggested color that browsers should use to customize the display of the page or of the surrounding user interface */
  themeColor?: string;
  /** @title Canonical URL */
  canonical?: string;
  /**
   * @title Disable indexing
   * @description In testing, you can use this to prevent search engines from indexing your site
   */
  noIndexNoFollow?: boolean;

  context?: any;
}
  
export const canonicalFromBreadcrumblist = (
  { itemListElement }: BreadcrumbList,
) =>
  itemListElement.length > 0
    ? itemListElement.reduce((acc, curr) =>
      acc.position < curr.position ? curr : acc
    ).item
    : undefined;

export function tagsFromProduct(
  page: ProductDetailsPage | null,
  template: string,
) {
  if (!page) return null;

  const { product, breadcrumbList: breadcrumb, seo } = page;

  const title = template?.replace("%s", seo?.title || "") ||
    seo?.title;
  const description = seo?.description;
  const canonical = seo?.canonical ||
    (breadcrumb && canonicalFromBreadcrumblist(breadcrumb));
  const imageUrl = product?.image?.[0]?.url;

  return { title, description, canonical, imageUrl };
}
  
export function tagsFromListing(
  page: ProductListingPage | null,
  titleTemplate: string,
  descriptionTemplate: string,
) {
  if (!page) return null;

  const { seo, breadcrumb } = page;
  const title = seo?.title && titleTemplate
    ? titleTemplate.replace("%s", seo.title || "")
    : seo?.title;
  const description = seo?.description && descriptionTemplate
    ? descriptionTemplate.replace("%s", seo.description || "")
    : seo?.description;
  const canonical = seo?.canonical ||
    (breadcrumb && canonicalFromBreadcrumblist(breadcrumb));

  return { title, description, canonical, imageUrl: "" };
}

export const handleSEO = (
  props: Props,
  ctx:
    | ReturnType<typeof tagsFromProduct>
    | ReturnType<typeof tagsFromListing>,
) => ({
  title: ctx?.title || props.title,
  image: ctx?.imageUrl || props.image,
  canonical: ctx?.canonical || props.canonical,
  description: (ctx?.description || props.description)?.replace(
    /(<([^>]+)>)/gi,
    "",
  ),
});
  