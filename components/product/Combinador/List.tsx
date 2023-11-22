import { useUI } from "$store/sdk/useUI.ts";
import Item from "$store/islands/CombinationItem.tsx";

export interface Props {
    image: string;
    price: number;
    skuId: string;
    stock: number;
  }

export default function List({skus}:{skus:Props}) {
  const { displayCombinador } = useUI();  

  return (
    <div class="p-4">  
        <div
          onClick={() => displayCombinador.value = true}
          class="w-[49px] h-[49px] flex justify-center items-center bg-[#e4a886] shadow-[0px_3px_6px_#00000029] fixed z-[9] cursor-pointer transition-[0.3s] rounded-[25px] right-[50px] bottom-[15px] text-white after:content-['Combinador'] after:ml-[15px] after:text-[0px] hover:after:ml-[7px] hover:after:text-xs hover:w-[150px] after:font-semibold after:leading-[29px] after:tracking-[0.6px]"
        >
          <img
            width={25}
            height={25}
            class="ml-3"
            src="/arquivos/icon-combinador.svg"
            alt="regua"
          />
          <span class="w-[25px] h-[25px] text-sm font-semibold tracking-[0px] text-white flex items-center justify-center bg-[#ef9492] absolute right-[-5px] top-[-5px] rounded-[25px]">
            0
          </span>
        </div>

        <div
          class={`${
            displayCombinador.value ? "flex" : "hidden"
          } w-screen h-screen fixed z-[99] items-center justify-center left-0 top-0 bg-[#00000073]`}
        >
          <div
            onClick={() => displayCombinador.value = false}
            class="w-screen h-screen absolute left-0 top-0"
          >
          </div>
          <div class="w-[96%] md:w-[56%] h-[90vh] absolute bg-white mx-auto py-[25px] md:px-[50px] rounded-sm left-[2%] md:left-[22%] top-[30px] overflow-y-scroll max-h-full scrollbar-thumb scrollbar scrollbar-track">
            <div
              style={{ backgroundImage: "url('/arquivos/close-modal.svg')" }}
              onClick={() => displayCombinador.value = false}
              class="absolute cursor-pointer z-[99999] w-6 h-6 bg-no-repeat bg-center appearance-none transition-[0.2s] duration-[ease-in-out] m-0 p-[7px] rounded-[50%] border-[none] scale-150 right-5 md:right-10 top-[15px];"
            >
            </div>
            <div class="block relative px-0 py-[22px] border-b-[#EBEBEB] border-b border-solid">
              <h3 class="flex justify-center items-center text-lg tracking-[0px] text-neutral-800 uppercase font-bold leading-[34px]">
                <img
                  width={25}
                  height={25}
                  class="mr-3"
                  src="/arquivos/icon-combinador-black.svg"
                  alt="icone combinador"
                />COMBINADOR DE TECIDOS:
              </h3>
              <p class="text-sm font-medium tracking-[0px] text-neutral-800 text-center leading-6">
                Use essa ferramenta para combinar e comparar cores dos tecidos!
              </p>
              <div class="py-6 flex flex-wrap items-center justify-start">
              {skus && skus?.map((sku:Props)=>(
                <Item sku={sku} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}