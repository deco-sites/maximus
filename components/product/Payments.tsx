import { useState } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";
import { formatPrice } from "$store/sdk/format.ts";

export interface Props {
  price: number;
  offers: any;
  numberInstallments: number;
}

function Payments({ price, offers, numberInstallments }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const { quantityPdp } = useUI();
  console.log("quantityPdp", quantityPdp.value);
  const priceQuantity = price * quantityPdp.value;
  console.log("priceQuantity", priceQuantity);
  return (
    <div>
      <div
        onClick={() => setShow(true)}
        class="flex items-center justify-start"
      >
        <img
          class="mr-3"
          src="/arquivos/icon-methods-payment.svg"
          alt="icon payments"
          title="icon payments"
        />
        <span class="cursor-pointer text-xs font-normal tracking-[0] text-[#171413] leading-4 hover:underline">
          Ver todas as formas de pagamento
        </span>
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
          <h3 class="text-lg font-semibold leading-5 text-[#171413] uppercase text-center mb-10 pb-[25px] border-b-[#eaeaea] border-b border-solid">
            FORMAS DE PAGAMENTO
          </h3>
          <header class="w-full flex justify-between px-[15px] md:px-[50px] py-0 mb-6">
            <div class="w-3/5 text-sm font-semibold text-black leading-4">
              Pagamento
            </div>
            <div class="w-2/5 text-sm font-semibold text-black leading-4 text-center">
              Valor da parcela
            </div>
            <div class="w-1/5 text-sm font-semibold text-black leading-4 text-right">
              Valor total
            </div>
          </header>
          <div class="[&>*:nth-child(odd)]:bg-[#eaeaea]">
            <div class="w-full flex justify-between px-[15px] md:px-[50px] py-0">
              <div class="flex items-center w-3/5 min-h-[35px] text-sm font-medium text-black leading-4">
                À vista(boleto e pix)
              </div>
              <div class="flex items-center text-center w-2/5 min-h-[35px] text-sm font-medium text-black leading-4">
                {formatPrice(
                  ((price * quantityPdp.value) / 10) -
                    (((price * quantityPdp.value) / 10) * 0.05),
                  offers,
                )}
              </div>
              <div class="flex items-center text-right w-1/5 min-h-[35px] text-sm font-medium text-black leading-4">
                {formatPrice(
                  ((price * quantityPdp.value) / 10) -
                    (((price * quantityPdp.value) / 10) * 0.05),
                  offers,
                )}
              </div>
            </div>
            <div class="w-full flex justify-between px-[15px] md:px-[50px] py-0">
              <div class="flex items-center w-3/5 min-h-[35px] text-sm font-medium text-black leading-4">
                {numberInstallments}x sem juros
              </div>
              <div class="flex items-center text-center w-2/5 min-h-[35px] text-sm font-medium text-black leading-4">
                {formatPrice(
                  ((price * quantityPdp.value) / 10) / numberInstallments,
                  offers,
                )}
              </div>
              <div class="flex items-center text-right w-1/5 min-h-[35px] text-sm font-medium text-black leading-4">
                {formatPrice((price * quantityPdp.value) / 10, offers)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
