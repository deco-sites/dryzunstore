import type { ProductDetailsPage } from "apps/commerce/types.ts";
import Metatags from "./Metatags.tsx";

export interface Props {
  /** @title Integration */
  page: ProductDetailsPage | null;

  /** @title Page type */
  type: "product" | "website" | "article";
  
  /** @title Page title override */
  titleTemplate?: string;
  
  /** @title Page title override */
  title?: string;
  
  /** @title Meta tag description override */
  description?: string;
  
  /** @title Recommended: 16 x 16 px */
  favicon?: any;
  
  /** @title No index, no follow */
  noIndexNoFollow?: boolean;

  /** @title Theme color */
  themeColor?: string;
  
  structuredData?: {
    useDataFromSEO?: boolean;
  };
}

function removeHTMLTags(str?: string) {
  return str?.replace(/<[^>]*>/g, "");
}

const SeoPDP = (props: Props) => {
  const context = (function prepareProductForStructuredData() {
    if (!props.page?.product) {
      return props.page;
    }

    const product = props.page?.product;

    const lastCategory = product.category?.split('>')
      .reverse()[0];

    return {
      ...props.page,
      product: {
        ...product,
        category: lastCategory,
        ...(props.structuredData?.useDataFromSEO && {
          name: removeHTMLTags(props.page?.seo?.title),
          description: removeHTMLTags(props.page?.seo?.description),
        }),
      },
    } as ProductDetailsPage;
  })();

  return <Metatags {...props} context={context} />;
};

export default SeoPDP;
