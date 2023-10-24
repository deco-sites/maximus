import { useState } from "preact/hooks";

function Conservation() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <p       
        class="text-[13px] leading-4 tracking-[0] text-[#171413] mb-3"
      >
        <strong>Conservação</strong>
        <br />
      </p>
      <div
        onClick={() => setShow(true)}
        class="w-[178px] h-[35px] border text-[#171413] text-xs font-medium leading-[19px] tracking-[0] flex items-center justify-center cursor-pointer no-underline border-solid border-[#171413] hover:underline"
      >
        <img
          class="mr-3"
          src="/arquivos/icon-composition.png"
          alt="icone composicao"
        />
        Tabela de conservação
      </div>

      <div
        class={`${
          show ? "flex" : "hidden"
        } w-screen h-screen fixed z-[99] items-center justify-center left-0 top-0 bg-[#00000073]`}
      >
        <div onClick={() => setShow(false)} class="w-screen h-screen absolute left-0 top-0"></div>
        <div class="w-[56%] h-[90vh] absolute bg-white mx-auto my-0 pl-[100px] pr-10 py-[50px] rounded-sm left-[22%] top-[30px] overflow-y-scroll max-h-full scrollbar-thumb scrollbar scrollbar-track">
            <img
              src="https://tfcszo.vteximg.com.br/arquivos/tabela-conservacao-desk.png"
              alt="tabela de conservaçao"
            />
          </div>
      </div>
    </div>
  );
}

export default Conservation;
