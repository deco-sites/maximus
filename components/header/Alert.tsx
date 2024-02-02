import { useState, useEffect } from "preact/hooks";

import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();
  const [showLogo, setShowLogo] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("PRIMEIRACOMPRA");
  };

  useEffect(() => {
    const window_ = window;

    const handleScroll = function () {
      const scrollTop = window_.scrollY;
  
      if (scrollTop > 50) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };
  
    window_.addEventListener("scroll", handleScroll);
    return () => window_.removeEventListener("scroll", handleScroll);
  });

  return (
    <div class={`hidden ${showLogo ? "hidden" : "md:flex"}`} id={id}>
      <Slider class="carousel carousel-center w-screen bg-black gap-6">
        {alerts.map((alert, index) => (
          <Slider.Item index={index} class="carousel-item">
            <span class="text-xs text-secondary-content flex justify-center items-center w-screen h-[30px]">
              {alert}
            </span>
          </Slider.Item>
        ))}
        <Slider.Item index={alerts.length} class="carousel-item">
          <span class="text-xs break-space text-secondary-content flex justify-center items-center w-screen h-[30px]">
            <strong>5% off</strong> na sua primeira compra
            <div
              onClick={copyToClipboard}
              class="relative text-xs font-normal leading-6 text-white text-center border rounded inline-block ml-[18px] px-[21px] py-0.5 border-solid border-[#457404] bg-[#7cc519]"
            >
              Cupom: PRIMEIRACOMPRA
              <div class="appearance-none h-[30px] absolute right-[-50px] top-[-1px] text-white transition-all duration-[0.2s] ease-[ease-in-out] cursor-pointer mx-[27px] px-[11px] py-[3px] rounded-[0_4px_4px_0] border-[none] bg-[#457404]">
                <img
                  width="15px"
                  src="/arquivos/icone-copy-pitbar.svg"
                  alt="copy"
                  title="copy"
                />
              </div>
            </div>
          </span>
        </Slider.Item>
      </Slider>

      <SliderJS
        rootId={id}
        scroll="smooth"
        infinite
        interval={interval && interval * 1e3}
      />
    </div>
  );
}

export default Alert;
