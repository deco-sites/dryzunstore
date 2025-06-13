export default function RolexNewModels() {
  return (
    <>
      <script
        id="rlxCorner"
        dangerouslySetInnerHTML={{
          __html: `
          window.rlxCornerCallback = function(Corner) {
            window.rlxCornerCallback = null;
            const corner = new Corner({
              as: "standalone",
              lang: "pt-br", 
              consent: true,
              legal: "",
              destination: "new-watches-2025"
            });
            corner.mount("#rlxCorner");
          };
        `,
        }}
      />

      <script
        src="https://cornersv7.rolex.com/retailer.js?apikey=0f6c286f351f567615c2bdee73e883b0&callback=rlxCornerCallback"
        async
        defer
      />
    </>
  );
}
