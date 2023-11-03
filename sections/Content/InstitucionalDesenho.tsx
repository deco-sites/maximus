export interface Props {
  title: string;
}

export default function InstitucionalDesenho(props: Props) {
  const {
    title = "Troca e Devolução",
  } = props;
  return (
    <div class="w-full max-w-[94%] md:max-w-[1165px] mx-auto md:mt-10 mt-20 py-[25px]">
      <div class="hidden items-center mb-5">
        <span class="flex items-center text-xs tracking-[0px] text-neutral-800 capitalize underline after:content-[''] after:w-[3px] after:h-[3px] after:block after:bg-black after:mx-[7px] after:my-0 after:rounded-[50%]">
          Home
        </span>
        <span class="text-xs font-normal leading-6 flex items-center">
          {title}
        </span>
      </div>

      <div class="flex items-center max-md:flex-col-reverse md:justify-between">
        <div class="w-full max-w-[500px]">
          <h1 class="font-semibold leading-[29px] text-2xl text-neutral-800 mb-4 mx-0 my-[0.67em] max-md:text-lg max-md:mt-10">
            Desenho gratuito
          </h1>
          <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px] mb-10">
            A Maximus Tecidos Finos possui uma equipe de estilistas e
            consultores de moda preparada para tirar todas as suas dúvidas sobre
            tendências, cores, texturas, metragem, corte e modelagem.
          </p>

          <h3 class="text-[15px] text-neutral-800 uppercase font-medium mb-[23px]">
            COMO FUNCIONA
          </h3>

          <div class="flex flex-col">
            <div class="flex items-center mb-5 text-[13px] tracking-[0] text-neutral-800 leading-[21px]">
              <span class="text-white bg-[#171413] min-w-[25px] min-h-[25px] flex justify-center items-center mr-[17px] rounded-[50%]">
                1.
              </span>O desenho exclusivo gratuito é fornecido para as compras
              acima de R$ 299,00;
            </div>
            <div class="flex items-center mb-5 text-[13px] tracking-[0] text-neutral-800 leading-[21px]">
              <span class="text-white bg-[#171413] min-w-[25px] min-h-[25px] flex justify-center items-center mr-[17px] rounded-[50%]">
                2.
              </span>Faça a compra e informe o número do seu pedido no (Fale
              Conosco), escolhendo a opção “Solicitar Desenho”;
            </div>
            <div class="flex items-center mb-5 text-[13px] tracking-[0] text-neutral-800 leading-[21px]">
              <span class="text-white bg-[#171413] min-w-[25px] min-h-[25px] flex justify-center items-center mr-[17px] rounded-[50%]">
                3.
              </span>Entraremos em contato para conversar sobre todos os
              detalhes. Você receberá a encomenda com o desenho, sem nenhum
              custo adicional!
            </div>
          </div>
          <a
            class="w-full md:w-[318px] mt-10 text-white border border-solid border-[#171413] bg-[#171413] hover:bg-white hover:text-[#171413] transition-[.2s] text-[13px] font-medium text-center block px-0 py-3.5 rounded-[3px]"
            href="https://www.maximustecidos.com.br/Institucional/contato"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco para solicitar o desenho
          </a>
        </div>
        <div class="w-full md:w-[45%] max-md:mb-5">
          <img
            width={540}
            height={527}
            src="https://tfcszo.vteximg.com.br/arquivos/inst-desenho-gratuito.png"
            alt="imagem institucional"
          />
        </div>
      </div>
    </div>
  );
}
