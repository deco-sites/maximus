import { useState } from "preact/hooks";
import { formatPrice } from "$store/sdk/format.ts";

export interface Props {
  price: number;
  offers: any;
  numberInstallments: number;
}

function Payments({ price, offers, numberInstallments }: Props, {}) {
  const [show, setShow] = useState<boolean>(false);

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
        <div class="w-[56%] h-[90vh] absolute bg-white mx-auto py-[50px] px-[50px] rounded-sm left-[22%] top-[30px] overflow-y-scroll max-h-full scrollbar-thumb scrollbar scrollbar-track">
          <h3 class="text-lg font-semibold leading-5 text-[#171413] uppercase text-center mb-10 pb-[25px] border-b-[#eaeaea] border-b border-solid">
            FORMAS DE PAGAMENTO
          </h3>
          <header class="w-full flex justify-between px-[50px] py-0">
            <div class="w-3/5 text-sm font-semibold text-black leading-9">
              Pagamento
            </div>
            <div class="w-2/5 text-sm font-semibold text-black leading-9 text-center">
              Valor da parcela
            </div>
            <div class="w-1/5 text-sm font-semibold text-black leading-9 text-right">
              Valor total
            </div>
          </header>
          <div class="[&>*:nth-child(odd)]:bg-[#eaeaea]">
            <div class="w-full flex justify-between px-[50px] py-0">
              <div class="w-3/5 min-h-[35px] text-sm font-medium text-black leading-9">
                À vista(boleto e pix)
              </div>
              <div class="text-center w-2/5 min-h-[35px] text-sm font-medium text-black leading-9">
                {formatPrice(price - (price * 0.05), offers)}
              </div>
              <div class="text-right w-1/5 min-h-[35px] text-sm font-medium text-black leading-9">
                {formatPrice(price - (price * 0.05), offers)}
              </div>
            </div>
            <div class="w-full flex justify-between px-[50px] py-0">
              <div class="w-3/5 min-h-[35px] text-sm font-medium text-black leading-9">
                {numberInstallments}x sem juros
              </div>
              <div class="text-center w-2/5 min-h-[35px] text-sm font-medium text-black leading-9">
                {formatPrice(price / numberInstallments, offers)}
              </div>
              <div class="text-right w-1/5 min-h-[35px] text-sm font-medium text-black leading-9">
                {formatPrice(price / numberInstallments, offers)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
