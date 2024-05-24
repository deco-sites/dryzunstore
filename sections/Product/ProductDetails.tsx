import { ProductDetailsPage } from "apps/commerce/types.ts";
import ImageGallerySlider from "../../components/product/Gallery/ImageSlider.tsx";
import ProductInfo from "../../components/product/ProductInfo.tsx";
import NotFound from "../../sections/Product/NotFound.tsx";

import Header from "../Rolex/MenuRolex.tsx";
import Footer from "../Rolex/BackToTopRolex.tsx";
import Exploring from "../Rolex/Exploring.tsx";

import Bread from "../../components/product/BreadCrumbRolex.tsx";
import ProductMain from "../../components/product/ProductMainRolex.tsx";
import ProductDescription from "../../components/product/ProductDescriptionRolex.tsx";

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
    <div class={`w-full ${isRolex ? "bg-rolex-3" : "container py-8 flex flex-col gap-6 lg:py-10"}`}>
      {isRolex ?
        <>
          <Header />
          <Bread page={page} />
          <ProductMain page={page} />
          <ProductDescription page={page} />
          <Exploring />
          <Footer />
        </>
        :
        <div class="flex flex-col gap-6 lg:flex-row lg:justify-center">
          <ImageGallerySlider
            page={page}
          />
          <ProductInfo
            page={page}
          />
        </div>
      }
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
