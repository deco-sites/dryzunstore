function ServerAnalytics() {
  return (
    <>
        <script
          dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://apiserver.dryzun.com.br/66dtdoewee.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','cr2fzz=aWQ9R1RNLVBLRDdDSk0%3D&apiKey=971fdf5a');`
          }}
        /> 

        
        <noscript>
            <iframe src="https://apiserver.dryzun.com.br/ns.html?id=GTM-PKD7CJM" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
    </>
  );
}

export default ServerAnalytics;
