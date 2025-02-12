export default function BannerPointOfSale() {
  return (
    <>
      <script
        id="rlxSmartClock"
        dangerouslySetInnerHTML={{
          __html:
            `(function(b,c,a,d,f,g,h,k,l,m,n){b[d]=b[d]||function(p){delete b[d];p.create(c.getElementById(f),[g,h,k,l,m,n])};var e=c.getElementsByTagName(a)[0];a=c.createElement(a);a.async=!0;a.src="//clock.rolex.com/smart-clock/static/js/invoker.js";e.parentNode.insertBefore(a,e)})(window,document,"script","rlxSmrtClck","rlxSmartClock","0f6c286f351f567615c2bdee73e883b0","pt-br","https://www.dryzun.com.br/rolex/contato-sao-paulo","richright","dark","gold");`,
        }}
      />
    </>
  );
}
