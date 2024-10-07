import { useUI } from "../../sdk/useUI.ts";

export default function SeloRolex() {
  const { displaySeloRolex } = useUI();

  const pathname = window.location.pathname;
  const url = pathname?.includes("rolex");
  const home = pathname == "/";

  const isRolex = displaySeloRolex.value;

  return (
    <>
      {(isRolex || url || home) &&
        (
          <a class="mr-2" href="/rolex/descubra">
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
        )}
    </>
  );
}
