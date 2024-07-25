import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      <style>
        {`
      #header-main.remove .pitbar {
        display:none;
      }
@media(min-width: 1025px) {
    #header-main > div.drawer:first-child {
        display:none;
    }

    .page-home #header-main:not(.active) div.w-full > ul li > a{
        border-color: transparent;
        transition:.4s;
    }

    .page-home #header-main:not(.active):hover div.w-full > ul li:hover > a {
        border-color: #597cb2;
        transition:.4s;
    }
}


@media(max-width: 1024px) {
  .page-home #header-main:not(.active) .open_mobile > svg {
    color: #fff;
    transition:.4s;
  }

  .page-home #header-main:not(.active):hover .open_mobile > svg {
    color: #333;
    transition:.4s;
  }
}


    .page-home #header-main:not(.active) .logo_header svg path{
      fill:#fff; 
    }

    .page-home #header-main:not(.active):hover .logo_header svg path{
      fill:#070000; 
    }

    .page-home #header-main {
        position: fixed;
        z-index: 9;
        top: 0;
    }

   
    .page-home #header-main:not(.active) #search-input::placeholder {
        color:#fff;
        transition:.4s;
    }

     .page-home #header-main:not(.active):hover #search-input::placeholder {
        color:#333;
        transition:.4s;
    }

    .page-home #header-main:not(.active) .nav-2b-1 .sticky {
        box-shadow: none;
    }

    .page-home #header-main:not(.active) .nav-2b-1{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgb(0 0 0 / 88%) 100%);
        transition:.4s;
    }
        .page-home #header-main:not(.active):hover .nav-2b-1{
        background: #fff;
        transition:.4s;
    }

      .page-home #header-main:not(.active) .items_menu,      
      .page-home #header-main:not(.active) .items_menu svg{
        color:#fff;
        fill: #fff;
        transition:.4s;
      }


      .page-home #header-main:not(.active) #search-input::placeholder,
      .page-home #header-main:not(.active) #search-input {
        color:#fff;
      }

      .page-home #header-main:not(.active):hover .items_menu,
      .page-home #header-main:not(.active):hover .items_menu svg{
        color:#333;
        fill:#333;
        transition:.4s;
      }



      
      .page-home #header-main.active .nav-2b-1,
      .page-home #header-main:hover .nav-2b-1{
        background-color:#fff;
        transition:.4s;
      }

   

       .page-home #header-main .pitbar {
          max-height: 1000px;
          visibility: visible;
          opacity:1;
          transition:.4s;
      }

      .page-home #header-main.active .pitbar {
          max-height: 0;
          overflow: hidden;
          visibility: hidden;
          opacity:0;
          transition:.4s;
      }
   
      `}
      </style>

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-etext-pro"
          rel="stylesheet"
        />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />

      {/* Include service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
});
