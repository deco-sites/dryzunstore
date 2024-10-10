import Slider from "../../components/ui/Slider.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { useState } from "preact/hooks";

import { useId } from "../../sdk/useId.ts";

interface IAlertsText {
   /** @title text */
  text?: string;
  url?: string;
  label?: string;
}

export interface Props {
  alerts?: IAlertsText[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();
  const [show, setShow] = useState(false);

  return (
    <div class={`pitbar max-md:mt-[-7px] ${show && "hidden"}`} id={id}>
      <Slider class="carousel carousel-center w-screen bg-[#B4CBF0] gap-6 max-md:pt-2.5 max-md:pb-[5px] max-md:px-[5px]">
        {alerts.map((item, index) => (
          <Slider.Item index={index} class="carousel-item">
            <span class="text-center text-[#243959] text-xs not-italic font-medium leading-[normal] tracking-[0.6px] flex justify-center items-center w-screen h-[32px]">
              {item.text}
              
              { item?.url && (
                <a href={item.url} target="_blank"> - {item.label} </a>
              )}
            </span>
          </Slider.Item>
        ))}
      </Slider>

      <Slider.JS rootId={id} interval={interval && interval * 1e3} />
     
      <button
        class="hidden closeTipbar absolute right-0 md:right-10 top-1 z-[9] text-[#243959]"
        onClick={() => setShow(true)}
      >
        <Icon size={20} id="XMark" strokeWidth={3} />
      </button>
    </div>
  );
}

export default Alert;
