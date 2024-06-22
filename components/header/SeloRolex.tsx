import { useUI } from "../../sdk/useUI.ts";

export default function SeloRolex() {
    const { displaySeloRolex } = useUI();

    const pathname = window.location.pathname;
    const url = pathname?.includes('rolex');
    const home = pathname == "/";

    const isRolex = displaySeloRolex.value;   

    return (
        <>
            {(isRolex || url || home) &&
                <a href="/rolex/descubra">
                    <div class='relative z-[-1]'>
                        <iframe id="rolex_retailer" title="Rolex Official Retailer" src="https://static.rolex.com/retailers/clock/?colour=silver&amp;apiKey=96823fb10cdd96199d9e50d7e5833ce8&amp;lang=pt_br" style="width:150px;height:70px;border:0;margin:0;padding:0;overflow:hidden;z-index:0;position:relative;scroll:none" scrolling="NO" frameborder="NO"></iframe>
                    </div>
                </a>
            }
        </>
    );
}