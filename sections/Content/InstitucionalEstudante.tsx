export interface Props {
  title?: string;
  /** @format textarea */
  text?: string;
}

export default function InstitucionalLojas(props: Props) {
  const {
    title = "Desconto do Estudante Maximus Tecidos",
    text =
      "Estudantes e professores de escolas, universidades, faculdades e ou cursos técnicos de Design de Moda-Têxtil têm desconto de 10% em todos os tecidos na maior loja online de tecidos finos do Brasil!",
  } = props;
  return (
    <div class="w-full mt-28 md:mt-3">
      {/* banner */}
      <div class="w-full flex items-center justify-center max-h-[335px] overflow-hidden">
        <img
          class="max-md:min-h-[295px] max-md:object-cover"
          src="https://tfcszo.vteximg.com.br/arquivos/desconto-para-estudantes-bg.png"
          alt="Desconto do Estudante Maximus Tecidos"
          title="Desconto do Estudante Maximus Tecidos"
        />
        <div class="absolute max-md:px-5 py-6">
          <h1 class="text-lg leading-[22px] md:text-2xl font-semibold md:leading-[29px] text-white text-center">
            {title}
          </h1>
          <p class="w-full max-w-[690px] text-[15px] text-white text-center tracking-[0] leading-[21px] mt-[17px]">
            {text}
          </p>
        </div>
      </div>

      {/*first section*/}
      <div class="w-full max-w-[90%] md:max-w-[1236px] mx-auto my-8 md:my-20">
        <div class="flex items-center justify-between max-md:flex-col">
          <div class="w-full md:w-[614px]">
            <h3 class="text-[15px] text-neutral-800 uppercase font-medium text-shadow leading-[34px] mb-[15px]">
              QUAIS OS PRODUTOS QUE ESTÃO SUJEITOS A 10% DE DESCONTO?
            </h3>
            <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px] font-normal mb-[18px]">
              O desconto de estudantes abrange todos os tecidos do nosso estoque
              (o desconto só não é cumulativo com produtos que já estejam com
              alguma promoção, nem com outros cupons de desconto).
              <br />
              <br />
              Ficam excluídos do desconto os acessórios para costura como
              réguas, moldes, livros, armarinhos e aviamentos;
            </p>
            <div class="flex items-center mt-[50px] max-md:flex-col">
              <div class="flex flex-col items-center justify-center">
                <img
                  width={19}
                  height={46}
                  src="https://tfcszo.vteximg.com.br/arquivos/estudante-desenho-icon.png"
                  alt="icone tecido"
                  title="icone tecido"
                />
                <span class="w-3 h-px block mt-[15px] mb-[17px] mx-auto bg-[#707070]">
                </span>
                <p class="text-[13px] text-center tracking-[0] text-neutral-800 leading-[21px] font-normal mb-[18px]">
                  Solicite desenhos para seus modelos
                </p>
              </div>
              <div class="flex flex-col items-center justify-center">
                <img
                  width={46}
                  height={46}
                  src="https://tfcszo.vteximg.com.br/arquivos/estudante-mensagem-icon.png"
                  alt="icone tecido"
                  title="icone tecido"
                />
                <span class="w-3 h-px block mt-[15px] mb-[17px] mx-auto bg-[#707070]">
                </span>
                <p class="text-[13px] text-center tracking-[0] text-neutral-800 leading-[21px] font-normal mb-[18px]">
                  Tire dúvidas de modelagem e tendência
                </p>
              </div>
              <div class="flex flex-col items-center justify-center">
                <img
                  width={25}
                  height={46}
                  src="https://tfcszo.vteximg.com.br/arquivos/estudante-phone-icon.png"
                  alt="icone tecido"
                  title="icone tecido"
                />
                <span class="w-3 h-px block mt-[15px] mb-[17px] mx-auto bg-[#707070]">
                </span>
                <p class="text-[13px] text-center tracking-[0] text-neutral-800 leading-[21px] font-normal mb-[18px]">
                  Telefone, Chat, Whatsapp ou e-mail
                </p>
              </div>
            </div>
          </div>
          <img
            class="w-full md:w-[400px] max-md:hidden"
            src="https://tfcszo.vteximg.com.br/arquivos/desconto-estudante-header.png"
            alt="pessoa com papel"
            title="pessoa com papel"
          />
        </div>
      </div>

      {/* last section*/}
      <div class="w-full max-w-[90%] md:max-w-[1236px] mx-auto mt-10 md:mt-24 mb-32 md:mb-40">
        <div class="flex items-center justify-between max-md:flex-col">
          <img
            class="w-full md:w-[500px] max-md:mb-5"
            src="https://tfcszo.vteximg.com.br/arquivos/desconto-estudante-footer.png"
            alt="pessoa com caneta"
            title="pessoa com caneta"
          />
          <div class="w-full md:w-[650px]">
            <h3 class="leading-[34px] text-[15px] text-neutral-800 uppercase font-medium text-shadow">
              DESCONTO DO ESTUDANTE MAXIMUS TECIDOS
            </h3>
            <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px] flex items-center border border-neutral-800 mt-2 mb-[30px] mx-0 px-[15px] py-2 rounded-sm border-solid bg-[#e9e9e9]">
              <img
                class="w-3 h-3 block mr-2"
                src="https://tfcszo.vteximg.com.br/arquivos/estudante-time-icon.png"
                alt="clock"
                title="clock"
              />
              Leva 2 minutos. Para fazer seu cadastro é rápido e fácil! Basta
              seguir as seguintes instruções:
            </p>
            <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px]">
              1. Cadastre-se na{" "}
              <a href="/" class="link-text">maximustecidos.com.br;</a>
              <br />
              <br />
              2. Mande-nos uma comprovação de matrícula em faculdade ou curso
              técnico de moda ou outro documento que ateste seu status de aluno
              ou professor, através do e-mail contato@maximustecidos.com.br
              <br />
              <br />
              3. Importante: No título do e-mail escreva “DESCONTO DE ESTUDANTE”
              <br />
              <br />
              4. Utilizaremos os seus dados pessoais apenas conforme descrito na
              nossa política de privacidade;
              <br />
              <br />
              5. Assim que o seu cadastro for liberado, você receberá o seu
              cupom de desconto por e-mail que terá validade de 1 ano. Você
              poderá renovar o seu cupom à cada ano atualizando seu comprovante
              de status de estudante ou professor;
              <br />
              <br />
              <strong>6. Pronto!</strong>
            </p>

            <a
              class="w-[200px] text-white border text-[13px] font-medium text-center block mt-[50px] px-0 py-3.5 rounded-[3px] border-solid border-[#171413] bg-[#171413] hover:bg-white hover:text-[#171413] transition-all"
              href="/Institucional/contato"
            >
              Comece agora!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
