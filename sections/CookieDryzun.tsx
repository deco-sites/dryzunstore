import { Head } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";

// Declaração de tipos para o Adobe Analytics
declare global {
  interface Window {
    s: {
      t: () => void;
      q: any[];
    };
  }
}

export default function CookieDryzun() {
  useEffect(() => {
    // Função para inicializar o Adobe Analytics
    const initAdobeAnalytics = () => {
      if (window.s) {
        window.s.t();
      }
    };

    // Adiciona um listener para quando o script for carregado
    const script = document.createElement('script');
    script.src = `//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-73c56043319a-staging.min.js?v=${new Date().getTime()}`;
    script.async = true;
    script.onload = initAdobeAnalytics;
    document.head.appendChild(script);

    // Limpa o script quando o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.s = window.s || {};
              window.s.t = window.s.t || function() {
                (window.s.q = window.s.q || []).push(arguments);
              };
            `
          }}
        />
      </Head>
    </>
  );
}
