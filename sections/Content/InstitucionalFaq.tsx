export interface question {
  question: string;
  /** @format textarea */
  answer: string;
}

export interface Props {
  title: string;
  /** @format html */
  html?: string;
  /** @format textarea */
  text?: string;
  items: question[];
}

export default function InstitucionalFaq(props: Props) {
  const {
    title = "FAQ",
    html = "",
    text =
      "Ainda em dúvida sobre algo? Mande uma mensagem! Responderemos em até 2 dias úteis.",
    items = [
      {
        question: "Primeira compra",
        answer:
          "Efetue o seu cadastro antecipado <a href='/login'>clicando aqui</a>",
      },
      {
        question: "Pagamento com cartões",
        answer:
          "Você pode parcelar em até 6 vezes. Em até 3 vezes não cobramos juros. Compras acima de 3 parcelas, cobramos juros de 1,99% ao mês. O valor mínimo da parcela é de R$ 25,00. Sendo que a primeira parcela será lançada na sua próxima fatura.",
      },
    ],
  } = props;
  return (
    <div class="w-full max-w-[96%] md:max-w-[1236px] mx-auto mt-40 md:mt-20 py-[25px]">
      <div class="flex items-center mb-5">
        <span class="flex items-center text-xs tracking-[0px] text-neutral-800 capitalize underline after:content-[''] after:w-[3px] after:h-[3px] after:block after:bg-black after:mx-[7px] after:my-0 after:rounded-[50%]">
          Home
        </span>
        <span class="text-xs font-normal leading-6 flex items-center">
          {title}
        </span>
      </div>
      <div class="border border-neutral-100 mb-[100px] px-5 md:px-10 py-[25px] border-solid">
        <h1 class="text-[22px] font-semibold leading-[29px] tracking-[0px] text-[#171413] mb-10">
          {title}
        </h1>
        {text && (
          <p
            class="text-[15px] text-shadow leading-[19px] tracking-[0px] text-neutral-800"
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </p>
        )}
        {html &&
          (
            <div
              class="text-shadow leading-[19px] tracking-[0px] text-neutral-800"
              dangerouslySetInnerHTML={{ __html: html }}
            >
            </div>
          )}
        <div class="mt-10">
          {items &&
            items.map((item: question) => (
              <details class="rounded-none collapse collapse-plus join-item border border-neutral-100 mb-4">
                <summary class="after:collapse-title-2 after:text-xl collapse-title leading-10 py-0 min-h-[40px] bg-neutral-100 text-[13px] font-normal tracking-[0px] text-neutral-800;">
                  {item.question}
                </summary>
                <div
                  class="collapse-content pt-6 text-xs font-normal leading-6 tracking-[0px] text-neutral-800"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </details>
            ))}
        </div>
      </div>
    </div>
  );
}
