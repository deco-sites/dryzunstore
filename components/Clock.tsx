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
    <>
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

      <div class="max-md:flex justify-center items-center flex-wrap gap-3">
        <a
          target="_blank"
          class="max-md:text-[0px] flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]"
          href="tel:1138234100"
          onClick={() => {
            if (typeof window !== "undefined") {
              // @ts-ignore
              window._satellite.track("contactCall");
            }
          }}
        >
          <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="phone-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <path
                  d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z"
                  id="Path"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                </path>
              </g>
            </svg>
          </div>
          +55 11 3823 4100
        </a>
        
        <a
          class="max-md:text-[0px] flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]"
          href="/rolex/contato/formulario"
          onClick={() => {
            if (typeof window !== "undefined") {
              // window._satellite.track("contactForm");
            }
          }}
        >
          <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="mail-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <g
                  id="icons/plus"
                  transform="translate(13, 14)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <g id="mail">
                    <path
                      d="M0,0 L10,0 L10,0.0666666667 L5.06666667,3.86666667 L0,0 Z M5.06666667,5.33333333 L0,1.53333333 L0,8 L10,8 L10,1.6 L5.06666667,5.33333333 Z"
                      id="Shape"
                    >
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          Enviar uma mensagem
        </a>
        
        <a
          target="_blank"
          class="max-md:text-[0px] flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]"
          href="https://www.google.com.br/maps/place/Dryzun+%E2%80%93+Distribuidor+Oficial+Rolex%C2%AE/@-23.5418018,-46.6604362,17z/data=!3m2!4b1!5s0x94ce583b88281a8f:0xb01df47ddddce501!4m5!3m4!1s0x94ce583bbe6ec0d3:0x4ff825db7c6e673a!8m2!3d-23.5418067!4d-46.6582475?shorturl=1"
          onClick={() => {
            if (typeof window !== "undefined") {
              // @ts-ignore
              window._satellite.track("getDirections");
            }
          }}
        >
          <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="get-direction-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <g
                  id="icons/plus"
                  transform="translate(13, 13)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <g id="location" transform="translate(0, -0)">
                    <polygon
                      id="Path"
                      points="0 5.84666667 10 0 4.90666667 10 3.58666667 6.60666667"
                    >
                    </polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          Itinerário
        </a>
        
        <a
          target="_blank"
          class="max-md:text-[0px] flex items-center py-1 fixed14 text-[12px] font-[bold] hover:text-[#127749] text-[#452c1e]"
          href="https://api.whatsapp.com/send?phone=5511992986118"
          onClick={() => {
            if (typeof window !== "undefined") {
              // @ts-ignore
              window._satellite.track("contactWhatsapp");
            }
          }}
        >
          <div class="mr-2 rounded-[100%] w-[40px] h-[40px] flex items-center justify-center bg-[#f9f7f4]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="whatsapp-default"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle id="Oval" fill="#F9F7F4" cx="18" cy="18" r="18">
                </circle>
                <g
                  id="whatsapp"
                  transform="translate(13, 13)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <path
                    d="M7.55395683,6.11510791 C7.55395683,6.25899281 7.55395683,6.4028777 7.48201439,6.47482014 C7.26618705,6.83453237 6.90647482,7.05035971 6.54676259,7.12230216 C6.18705036,7.1942446 5.89928058,7.12230216 5.53956835,6.97841727 C5.25179856,6.83453237 4.96402878,6.69064748 4.67625899,6.54676259 C4.17266187,6.18705036 3.66906475,5.75539568 3.30935252,5.25179856 C3.23741007,5.10791367 3.09352518,4.96402878 3.02158273,4.74820144 C2.87769784,4.5323741 2.8057554,4.24460432 2.73381295,4.02877698 C2.6618705,3.95683453 2.6618705,3.81294964 2.6618705,3.74100719 C2.6618705,3.38129496 2.8057554,3.02158273 3.09352518,2.8057554 C3.23741007,2.6618705 3.52517986,2.58992806 3.74100719,2.6618705 C3.95683453,2.8057554 4.02877698,3.09352518 4.10071942,3.30935252 C4.17266187,3.45323741 4.24460432,3.66906475 4.24460432,3.88489209 C4.24460432,4.02877698 4.10071942,4.24460432 3.95683453,4.31654676 C3.88489209,4.46043165 3.88489209,4.5323741 3.95683453,4.60431655 C4.31654676,5.25179856 4.89208633,5.75539568 5.53956835,5.97122302 C5.68345324,6.04316547 5.75539568,6.04316547 5.75539568,5.97122302 C5.89928058,5.82733813 6.04316547,5.53956835 6.18705036,5.4676259 C6.47482014,5.32374101 6.69064748,5.4676259 6.97841727,5.61151079 C7.1942446,5.75539568 7.48201439,5.89928058 7.55395683,6.11510791 Z M10,4.96402878 C10,7.69784173 7.76978417,9.92805755 5.03597122,9.92805755 C4.24460432,9.92805755 3.38129496,9.71223022 2.6618705,9.35251799 L0,10 L0.71942446,7.3381295 C0.287769784,6.61870504 0.071942446,5.75539568 0.071942446,4.96402878 C0.071942446,2.23021583 2.30215827,0 5.03597122,0 C7.76978417,0 10,2.23021583 10,4.96402878 Z M9.0647482,4.89208633 C9.0647482,2.6618705 7.26618705,0.863309353 5.03597122,0.863309353 C2.8057554,0.863309353 1.00719424,2.6618705 1.00719424,4.89208633 C1.00719424,5.61151079 1.22302158,6.33093525 1.58273381,6.97841727 L1.65467626,7.12230216 L1.22302158,8.63309353 L2.8057554,8.27338129 L2.94964029,8.34532374 C3.66906475,8.70503597 4.31654676,8.92086331 5.03597122,8.92086331 C7.26618705,8.92086331 9.0647482,7.12230216 9.0647482,4.89208633 Z"
                    id="Shape"
                  >
                  </path>
                </g>
              </g>
            </svg>
          </div>
          WhatsApp
        </a>
      </div>
    </>
  );
}
