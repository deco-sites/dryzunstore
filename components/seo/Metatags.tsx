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
  type: "article" | "website";
  themeColor: string;
  favicon?: any;
  noIndexNoFollow?: boolean;
}

function Metatags(props: Props) {
  const {
    titleTemplate = "",
    descriptionTemplate = "",
    context,
    type,
    themeColor,
    favicon,
    noIndexNoFollow
  } = props;

  const twitterCard = type === "website" ? "summary" : "summary_large_image";

  const tags = context?.["@type"] === "ProductDetailsPage"
    ? tagsFromProduct(context, titleTemplate)
    : context?.["@type"] === "ProductListingPage"
    ? tagsFromListing(context, titleTemplate, descriptionTemplate)
    : null;

  const { title, description, image, canonical } = handleSEO({
    ...props,
  }, tags);

  console.log({ title, description, image, canonical, noIndexNoFollow });

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="theme-color" content={themeColor} />
        <meta name="description" content={description} />
        <meta name="keywords" content="Dryzun, Rolex"/>
     

        <meta name="title" content={title}/>

        {/* OpenGraph tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} /> 
        <meta property="og:url" content={canonical} />
       
       
        {/* Twitter tags */}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:card" content={twitterCard} />
       
        {/* Link tags */}
        {canonical && <link rel="canonical" href={canonical.toLowerCase()} />}

        {/* Favicon */}
        {favicon && <link rel="shortcut icon" href={favicon} />}

        {/* No index, no follow */}
        {props?.noIndexNoFollow && (
          <meta name="robots" content="noindex, nofollow" />
        )}
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
