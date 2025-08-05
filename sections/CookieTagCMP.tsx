import { Head } from "$fresh/runtime.ts";

export default function CookieTag() {
  return (
    <>
      <Head>
        <script
          src={`//cdn.cookie-script.com/s/585195874adbaa6ff56b719295d28ae0.js`}
          type="text/javascript"
          charset="UTF-8"
          async
        />
      </Head>
    </>
  );
}
