import { useUI } from "../../sdk/useUI.ts";

export default function SeloTudor() {
  const { displaySeloTudor } = useUI();

  const pathname = window.location.pathname;
  const url = pathname?.includes("tudor");

  const isTudor = displaySeloTudor.value;

  return (
    <>
      {(isTudor || url) &&
        (
          <a class="mr-2" href="/tudor">
            <div class="relative z-[-1]">
            <img class="w-[120px]" src="https://www.dryzun.com.br/arquivos/Tudor-plaque-240x120_en.jpg?v=638282558950030000"/>
            </div>
          </a>
        )}
     
    </>
  );
}
