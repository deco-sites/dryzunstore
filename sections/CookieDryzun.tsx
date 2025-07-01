import { Head } from "$fresh/runtime.ts";

export default function CookieDryzun() {
  return (
    <>
      <Head>
        <script
          src={`//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js?v=${Date.now()}`}
          type="text/javascript"
          async
        />
      </Head>
    </>
  );
}
