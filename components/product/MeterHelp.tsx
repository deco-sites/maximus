import { useState } from "preact/hooks";

function MeterHelp() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setShow(true)}
        class="cursor-pointer flex items-center justify-center w-[206px] h-12 border text-xs font-medium tracking-[0] text-[#171413] leading-[14px] hover:underline border-solid border-[#171413]"
      >
        Quantos metros precisa
        <img
          class="ml-3"
          src="/arquivos/icone-regua.png?v=694743"
          alt="regua"
        />
      </div>

      <div
        class={`${
          show ? "flex" : "hidden"
        } w-screen h-screen fixed z-[99] items-center justify-center left-0 top-0 bg-[#00000073]`}
      >
        <div
          onClick={() => setShow(false)}
          class="w-screen h-screen absolute left-0 top-0"
        >
        </div>
        <div class="w-[96%] md:w-[56%] h-[90vh] absolute bg-white mx-auto py-[50px] md:px-[50px] rounded-sm left-[2%] md:left-[22%] top-[30px] overflow-y-scroll max-h-full scrollbar-thumb scrollbar scrollbar-track">
          <p class="w-full text-center">em breve</p>
        </div>
      </div>
    </div>
  );
}

export default MeterHelp;
