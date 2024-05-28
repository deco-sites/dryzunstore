
import { useState } from "preact/hooks";
import Icon from "../components/ui/Icon.tsx";

export default function Clock() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div class="relative" onClick={() => setOpen(!open)}>
            <span class="fixed16 flex items-center cursor-pointer">Horarios de funcionamento <Icon
                class="ml-2 text-[#000]"
                size={14}
                id="ChevronDown"
                strokeWidth={3}
            /> </span>
            {open && (
                <div class="p-4 gap-4 bg-white absolute top-[25px] left-0 w-[245px] border rounded-md border-solid border-[#e0e0e0]">
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Seg</span><span>10h00 às 23h00</span></p>
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Ter</span><span>10h00 às 23h00</span></p>
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Qua</span><span>10h00 às 23h00</span></p>
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Qui</span><span>10h00 às 23h00</span></p>
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Sex</span><span>10h00 às 23h00</span></p>
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Sáb</span><span>10h00 às 23h00</span></p>
                    <p class="mb-2 flex justify-between fixed16-ligth text-[11px] text-[#212121]"><span>Dom</span><span>14h00 às 20h00</span></p></div>
            )}
        </div>
    );
}