import { Head } from "$fresh/runtime.ts";

import { ProductDetailsPage } from "apps/commerce/types.ts";
import NotFound from "../../sections/Product/NotFound.tsx";

import Header from "../Rolex/MenuRolex.tsx";
import Footer from "../Rolex/BackToTopRolex.tsx";
import Exploring from "../Rolex/Exploring.tsx";

/* dryzun */
import ProductMain from "../../components/product/dryzun/ProductMain.tsx";

/** rolex */
import Bread from "../../components/product/BreadCrumbRolex.tsx";
import ProductMainRolex from "../../islands/ProductMainRolex.tsx";
import ProductDescriptionRolex from "../../components/product/ProductDescriptionRolex.tsx";
export interface Props {
  /** @title Integration */
  page: ProductDetailsPage | null;
}

export default function ProductDetails({ page }: Props) {
  if (!page?.seo) {
    return <NotFound />;
  }

  const { product } = page;
  const isRolex = product?.brand?.name === "Rolex";

  return (
    <div class={`w-full ${isRolex ? "bg-rolex-3" : "pdp-geral"}`}>
      {isRolex
        ? (
          <>
            <Head>
              <meta name="robots" content="index, follow"></meta>
            </Head>
            
            <Header />
            <Bread page={page} />
            <ProductMainRolex page={page} />
            <ProductDescriptionRolex page={page} />
            <Exploring />
            <Footer />

            <script src="//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js">
            </script>
          </>
        )
        : <ProductMain page={page} />}
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div
      style={{ height: "710px" }}
      class="w-full flex justify-center items-center"
    >
      <span class="loading loading-spinner" />
    </div>
  );
}
