import { useState } from "preact/hooks";
import TabFeminino from "$store/components/product/MeterHelpItems/TableFeminino.tsx";
import TabNoiva from "$store/components/product/MeterHelpItems/TableNoiva.tsx";
import TabInfantis from "$store/components/product/MeterHelpItems/TableInfantis.tsx";
import TabMasculina from "$store/components/product/MeterHelpItems/TableMasculina.tsx";

function MeterHelp() {
  const [show, setShow] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>("fem");

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
          title="regua"
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
          <div
            style={{ backgroundImage: "url('/arquivos/close-modal.svg')" }}
            onClick={() => setShow(false)}
            class="absolute cursor-pointer z-[99999] w-6 h-6 bg-no-repeat bg-center appearance-none transition-[0.2s] duration-[ease-in-out] m-0 p-[7px] rounded-[50%] border-[none] scale-150 right-5 md:right-10 top-[15px];"
          >
          </div>

          <h3 class="text-lg font-medium text-shadow leading-5 text-[#171413] uppercase text-center mb-[30px] px-[10%] py-0">
            TABELA DE MEDIDAS
          </h3>
          <p class="w-full md:w-[70%] text-[15px] font-medium text-black leading-4 text-center md:ml-[15%] mb-10 pb-[25px] border-b-[#eaeaea] border-b border-solid">
            Criamos uma tabela de medida padrão de tecidos para confecção de
            vestidos de noiva e festa, vestido infantil, trajes sociais
            femininos, trajes sociais masculinos ou noivos.
          </p>

          <div class="flex flex-wrap justify-start items-center mb-9">
            <div
              onClick={() => setCurrent("fem")}
              class={`max-w-[264px] min-w-[72px] mb-2 px-2 md:px-6 flex justify-center items-center cursor-pointer text-[13px] font-medium uppercase h-8 border mx-[7px] my-0 rounded-[5px] border-solid border-[#eaeaea] hover:bg-[#eaeaea] ${
                current === "fem"
                  ? "bg-black border-black hover:bg-black hover:opacity-90 text-white"
                  : "bg-white"
              }`}
            >
              Modelos Femininos
            </div>
            <div
              onClick={() => setCurrent("noiva")}
              class={`max-w-[264px] min-w-[72px] mb-2 px-2 md:px-6 flex justify-center items-center cursor-pointer text-[13px] font-medium uppercase h-8 border mx-[7px] my-0 rounded-[5px] border-solid border-[#eaeaea] hover:bg-[#eaeaea] ${
                current === "noiva"
                  ? "bg-black border-black hover:bg-black hover:opacity-90 text-white"
                  : "bg-white"
              }`}
            >
              Vestidos de Noiva
            </div>
            <div
              onClick={() => setCurrent("infantil")}
              class={`max-w-[264px] min-w-[72px] mb-2 px-2 md:px-6 flex justify-center items-center cursor-pointer text-[13px] font-medium uppercase h-8 border mx-[7px] my-0 rounded-[5px] border-solid border-[#eaeaea] hover:bg-[#eaeaea] ${
                current === "infantil"
                  ? "bg-black border-black hover:bg-black hover:opacity-90 text-white"
                  : "bg-white"
              }`}
            >
              Vestidos Infantis
            </div>
            <div
              onClick={() => setCurrent("masc")}
              class={`max-w-[264px] min-w-[72px] mb-2 px-2 md:px-6 flex justify-center items-center cursor-pointer text-[13px] font-medium uppercase h-8 border mx-[7px] my-0 rounded-[5px] border-solid border-[#eaeaea] hover:bg-[#eaeaea] ${
                current === "masc"
                  ? "bg-black border-black hover:bg-black hover:opacity-90 text-white"
                  : "bg-white"
              }`}
            >
              Alfaiataria Masculina
            </div>
          </div>

          <h4 class="w-full h-14 mb-2 flex items-center justify-center bg-black text-sm font-semibold leading-[29px] text-white uppercase">
            Tabela de medidas
          </h4>

          {current === "fem" && <TabFeminino />}
          {current === "noiva" && <TabNoiva />}
          {current === "infantil" && <TabInfantis />}
          {current === "masc" && <TabMasculina />}
        </div>
      </div>
    </div>
  );
}

export default MeterHelp;
