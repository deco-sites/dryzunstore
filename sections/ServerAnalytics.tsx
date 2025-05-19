function ServerAnalytics() {
  return (
    <>
      <script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/585195874adbaa6ff56b719295d28ae0.js"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function getCookie(name) {
              var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
              return match ? match[2] : null;
            }

            function setCookie(name, value, domain) {
              var expirationDate = new Date();
              expirationDate.setFullYear(expirationDate.getFullYear() + 1);
              
              var cookieString = name + "=" + value + "; expires=" + expirationDate.toUTCString() + "; path=/";
              if (domain) {
                cookieString += "; domain=" + domain;
              }
              document.cookie = cookieString;
            }

            // Verifica se o cookie 'rlx-consent' já existe; se não, cria-o com valor 'false'
            if (!getCookie('rlx-consent')) {
              setCookie('rlx-consent', 'false');
            }

            var intervalId = setInterval(function() {
              // Verifica se os botões existem
              if (document.querySelector('#cookiescript_save') || document.querySelector('#cookiescript_reject') || document.querySelector('#cookiescript_accept')) {
                // Adiciona ouvintes de eventos aos botões
                document.querySelectorAll('#cookiescript_save, #cookiescript_reject, #cookiescript_accept').forEach(function(button) {
                  button.addEventListener('click', function() {
                    setTimeout(function() {
                      if (button.id === 'cookiescript_reject') {
                        setCookie('rlx-consent', 'false');
                      } else {
                        var isChecked = document.querySelector('#cookiescript_category_performance')?.checked;
                        setCookie('rlx-consent', isChecked);
                      }
                    }, 1000);
                  });
                });
                
                // Limpa o intervalo após encontrar os botões
                clearInterval(intervalId);
              }
            }, 2000);
          `
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html:
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PKD7CJM');`,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PKD7CJM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        >
        </iframe>
      </noscript>
    </>
  );
}

export default ServerAnalytics;
