import { useEffect, useState } from "preact/hooks";

const storeHours: any = {
  "segunda": { "abre": "10h00", "fecha": "21h30" },
  "terca": { "abre": "10h00", "fecha": "21h30" },
  "quarta": { "abre": "10h00", "fecha": "21h30" },
  "quinta": { "abre": "10h00", "fecha": "21h30" },
  "sexta": { "abre": "10h00", "fecha": "21h30" },
  "sabado": { "abre": "10h00", "fecha": "21h30" },
  "domingo": { "abre": "14h00", "fecha": "19h30" },
};

const daysOfWeek = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

export default function Clock() {
  //const [currentDay, setCurrentDay] = useState('');
  const [storeStatus, setStoreStatus] = useState("");
  const [hours, setHours] = useState({ abre: "", fecha: "" });
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();

    const storeHour = storeHours[dayName];
    const [openHour, openMinute] = storeHour.abre.split("h").map(Number);
    const [closeHour, closeMinute] = storeHour.fecha.split("h").map(Number);

    const isOpen = (currentHour > openHour ||
      (currentHour === openHour && currentMinute >= openMinute)) &&
      (currentHour < closeHour ||
        (currentHour === closeHour && currentMinute < closeMinute));

    //setCurrentDay(dayName);
    setStoreStatus(isOpen ? "Aberto" : "Fechado");
    setHours(storeHour);
  }, []);

  return (
    <div class="relative mb-4" onClick={() => setOpen(!open)}>
      <span class="fixed16 flex items-center cursor-pointer">
        <p>
          {storeStatus == "Aberto"
            ? "Aberto hoje"
            : " Horários de funcionamento"}{" "}
          <span class="text-[#127749]">{hours.abre} às {hours.fecha}</span>
        </p>
        <svg
          class="fill-[#127749] ml-2"
          height="12"
          width="12"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          alt=""
          style="transform: rotate(0deg);"
        >
          <path d="M15,3.5l-7.5,8.1L0,3.5"></path>
        </svg>
      </span>
      {open && (
        <div class="pointer-events-auto h-auto px-[50px] py-10 gap-8 shadow-[0_5px_10px_#0000002e] bg-[rgb(249_247_244_/_var(--tw-bg-opacity))] absolute top-[25px] left-0 w-[90%]">
          <p class="mb-5 flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Seg</b>
            <span>10h00 às 21h30</span>
          </p>
          <p class="mb-5 flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Ter</b>
            <span>10h00 às 21h30</span>
          </p>
          <p class="mb-5 flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Qua</b>
            <span>10h00 às 21h30</span>
          </p>
          <p class="mb-5 flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Qui</b>
            <span>10h00 às 21h30</span>
          </p>
          <p class="mb-5 flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Sex</b>
            <span>10h00 às 21h30</span>
          </p>
          <p class="mb-5 flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Sáb</b>
            <span>10h00 às 21h30</span>
          </p>
          <p class="flex justify-between fixed16-ligth text-[16px] text-[#452C1E]">
            <b>Dom</b>
            <span>14h00 às 19h30</span>
          </p>
        </div>
      )}
    </div>
  );
}
