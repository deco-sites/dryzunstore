import { Head } from "$fresh/runtime.ts";

export default function Cartier() {
  return (
    <>
      <Head>
        <script src="https://cdn.occtoo.com/cartier/pdg/ux-container/v1/index.min.js">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            window.CartierPDGSettings = {
                                partner: "449eba0d-3ff8-4829-aa44-b2497b5fc961",
                                language: "pt-BR"
                            };
                        `,
          }}
        >
        </script>
      </Head>
      <div id="live-container"></div>
    </>
  );
}
