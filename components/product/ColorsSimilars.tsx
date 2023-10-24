import { useState } from "preact/hooks";

function ColorsSimilars() {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  return (
    <div class="md:my-36">
      <p class="text-[13px] font-medium leading-[19px] tracking-[0] text-[#171413] mb-3">
        <strong>Outras cores disponíveis</strong>
      </p>
      <div
        class={`flex flex-wrap w-[770px] max-w-full ${
          seeMore ? "max-h-[1000px]" : "max-h-[142px]"
        } mt-[15px] mb-5 mx-0 overflow-hidden transition-[0.4s] `}
      >
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
        <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2"></div>
      </div>
      <div
        class={`text-[13px] font-medium leading-[19px] tracking-[0] text-[#171413] cursor-pointer flex items-center whitespace-nowrap after:content-[''] after:w-[15px] after:h-[15px] after:bg-[url(/arquivos/seta.png)] after:flex after:bg-contain after:bg-no-repeat after:justify-center after:bg-center after:items-center after:ml-[5px] ${
          seeMore ? "after:rotate-[180deg]" : "after:rotate-[360deg]"
        }`}
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "Ver menos cores disponíveis" : "Ver mais cores disponíveis"}
      </div>
    </div>
  );
}

export default ColorsSimilars;
