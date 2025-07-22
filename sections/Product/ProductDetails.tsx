import { Head } from "$fresh/runtime.ts";

import { ProductDetailsPage } from "apps/commerce/types.ts";
import NotFound from "../../sections/Product/NotFound.tsx";

import Header from "../Rolex/MenuRolex.tsx";
import Footer from "../Rolex/BackToTopRolex.tsx";
import Exploring from "../Rolex/Exploring.tsx";
import { useOffer } from "../../sdk/useOffer.ts";


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
  // Mover hooks para antes de qualquer condição
  const offer = useOffer(page?.product?.offers);
  const price = offer?.price;
  const listPrice = offer?.listPrice;

  if (!page?.seo) {
    return <NotFound />;
  }
  
  const { product,  breadcrumbList} = page;
  const isRolex = product?.brand?.name === "Rolex";

  return (
    <div class={`w-full ${isRolex ? "bg-rolex-3" : "pdp-geral"}`}>
      <Head>
        <meta name="robots" content="index, follow"></meta>
      </Head>

      

      {isRolex
        ? (
          <>
            <script
              src={`//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js?v=${Date.now()}`}
              type="text/javascript"
              async
            />
            <Header />
            <Bread page={page} />
            <ProductMainRolex page={page} />
            <ProductDescriptionRolex page={page} />
            <Exploring />
            <Footer />
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
