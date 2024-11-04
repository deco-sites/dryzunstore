export default function SeloRolex() {
  const pathname = globalThis.window?.location?.pathname;
  
  const HIDE_SEAL = [
    'tudor',
    'baume',
    'bvlgari',
    'cartier',
    'jaeger',
    'tag-heuer'
  ]

  const url = HIDE_SEAL.some(seal => pathname?.includes(seal));
  
  console.log({ url, pathname })


  const home = pathname == "/";

  const showLogoRolex = (!url || home);

  return (
    <>
      <a class={`noooaa mr-2 ${showLogoRolex ? 'db' : 'hidden'}`} href="/rolex/descubra">
        <div class="relative z-[-1]">
          <iframe
            id="rolex_retailer"
            title="Rolex Official Retailer"
            src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=0f6c286f351f567615c2bdee73e883b0&amp;lang=pt_br"
            style="width:150px;height:70px;border:0;margin:0;padding:0;overflow:hidden;z-index:0;position:relative;scroll:none"
            scrolling="NO"
            frameborder="NO"
          >
          </iframe>
        </div>
      </a>
    </>
  );
}
