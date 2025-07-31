import { Head } from "$fresh/runtime.ts";

import {
  handleSEO,
  tagsFromListing,
  tagsFromProduct,
} from "./utils.ts";  

interface Props {
  titleTemplate?: string;
  descriptionTemplate?: string;
  context: any;
  type: string;
  themeColor: string;
  favicon?: any;
}

function Metatags(props: Props) {
  const {
    titleTemplate = "",
    descriptionTemplate = "",
    context,
    type,
    themeColor,
    favicon,
  } = props;

  const twitterCard = type === "website" ? "summary" : "summary_large_image";

  const tags = context?.["@type"] === "ProductDetailsPage"
    ? tagsFromProduct(context, titleTemplate)
    : context?.["@type"] === "ProductListingPage"
    ? tagsFromListing(context, titleTemplate, descriptionTemplate)
    : null;

  const { title, description, image, canonical } = handleSEO({
    ...props,
    type: type as "article" | "website"
  }, tags);

  console.log({ title, description, image, canonical });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href={favicon} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image} /> 


        {/* Twitter tags */}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:card" content={twitterCard} />
       
        {/* Link tags */}
        {canonical && <link rel="canonical" href={canonical.toLowerCase()} />}

        {/* No index, no follow */}
        {/* {props?.noIndexNoFollow && (
          <meta name="robots" content="noindex, nofollow" />
        )} */}
      </Head> 

      {/* {context?.["@type"] === "ProductDetailsPage" && (
        <>
          <ScriptLDJson {...{ ...context.product, isVariantOf: [] }} />
          <ScriptLDJson {...context.breadcrumbList} />
        </>
      )}
      {context?.["@type"] === "ProductListingPage" && (
        <ScriptLDJson {...context.breadcrumb} />
      )} */}
    </>
  );
}

export default Metatags;
