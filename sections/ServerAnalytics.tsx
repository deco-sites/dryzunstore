function ServerAnalytics() {
  return (
    <>
      <script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/585195874adbaa6ff56b719295d28ae0.js"></script>

      <script
        dangerouslySetInnerHTML={{
          __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PKD7CJM');`,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PKD7CJM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
}

export default ServerAnalytics;
