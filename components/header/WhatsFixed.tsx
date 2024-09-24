import { useUI } from "../../sdk/useUI.ts";

export default function WhatsFixed() {
  const { displaySeloRolex } = useUI();

  const pathname = window.location.pathname;
  const url = pathname?.includes("rolex");
  const home = pathname == "/";

  const isRolex = displaySeloRolex.value;

  return (
    <>   
      {
        (!isRolex && !url) && (
          <a href="https://api.whatsapp.com/send?phone=5511992093271" target="_blank" class="fixed bottom-7 right-7 z-5">
            <img class="WhatsFixed w-[60px] h-[60px]" src="https://dryzun.vtexassets.com/arquivos/ico_whatsapp_bottom.png?v=637225535237870000" alt="WhatsApp Icon" />
          </a>
        )
      }
    </>
  );
}
