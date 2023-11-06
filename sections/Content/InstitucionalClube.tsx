export interface Props {
  /** @format html */
  html?: string;
  /** @format textarea */
  text?: string;
}

export default function InstitucionalClube(props: Props) {
  const {
    html = "",
    text = "Lorem...",
  } = props;
  return (
    <div class="w-full md:max-w-[1236px] mx-auto mt-20 md:mt-5 py-[25px]">
      <div class="flex items-center max-md:flex-col-reverse">
        <div
          style={{
            backgroundImage:
              "url('https://tfcszo.vteximg.com.br/arquivos/background-img-clube-costureira.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          class="w-[720px] md:h-[506px] max-w-full max-md:py-10 flex flex-col items-center justify-center bg-[#333]"
        >
          <img
            width={185}
            height={68}
            src="https://tfcszo.vteximg.com.br/arquivos/inst-clube-da-costureira-logo.png"
          />
          <h1 class="text-3xl font-[bold] leading-[35px] text-[#B9A795] text-center mt-[40px]">
            Profissionais especializadas <br />
            <span class="text-white">em todo tipo de costura</span>
          </h1>
          <p class="max-w-[390px] text-center text-white text-sm font-normal leading-6 mx-auto my-[38px]">
            O Clube da Costureira da Maximus Tecidos é a <b>maior comunidade</b>
            {" "}
            de costureiras profissionais <b>do Brasil</b>.
          </p>
          <a
            href="https://www.clubedacostureira.com.br/conta/criar"
            target="_blank"
            rel="noopener noreferrer"
            class="w-[390px] max-w-full bg-white border text-neutral-800 mb-4 border-solid border-white text-[13px] font-medium text-center block px-0 py-3.5 rounded-[3px] hover:bg-transparent hover:text-white transition-all"
          >
            Quero fazer parte do clube da costureira
          </a>
          <a
            href="https://www.clubedacostureira.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-[390px] max-w-full bg-transparent border text-white border-solid border-white text-[13px] font-medium text-center block px-0 py-3.5 rounded-[3px] hover:bg-white hover:text-neutral-800 transition-all"
          >
            Encontre uma costureira de confiança
          </a>
        </div>
        <div>
          <img
            class="max-w-full"
            width={516}
            height={506}
            src="https://tfcszo.vteximg.com.br/arquivos/inst-clube-da-costureira-header.png"
          />
        </div>
      </div>

      <div class="flex justify-around items-center mt-10 md:mt-20 mb-10 max-md:px-4">
        <img
          class="hidden md:block max-w-full"
          width={570}
          height={582}
          src="https://tfcszo.vteximg.com.br/arquivos/inst-clube-da-costureira-footer.png"
        />
        <div class="w-[500px] max-w-full">
          <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px] mb-[18px]">
            Se você estiver procurando por um(a) profissional da costura, aqui
            você encontra uma lista confiável de costureiras(os) que prestam
            serviços de ajustes, consertos e confecção de roupas sob medida
            perto da sua casa. Se você for costureira, aqui você pode divulgar o
            seu trabalho e aumentar a sua carteira de clientes.
            <br />
            <br />
            Costureiras e clientes podem negociar os termos, valores e prazos de
            entrega do serviço por conta própria, com total liberdade e
            autonomia sem taxas, nem intermediários.
            <br />
            <br />
            Quem não é visto não é lembrado e hoje em dia a internet se tornou a
            vitrine mais importante de todas. Por isso é essencial que as
            costureiras também criem uma presença na internet, para não ficarem
            para trás e ainda poderem aproveitar as oportunidades.
            <br />
            <br />
            Se posicionar profissionalmente na internet e saber como divulgar e
            vender as suas costuras pode dobrar os seus ganhos e fazer você
            mudar de vida.
            <br />
            <br />
            O principal objetivo da Maximus Tecidos com a criação do Clube da
            Costureira é ser uma ponte entre costureiras e suas novas clientes,
            além de criar a oportunidade que as costureiras precisam para se
            capacitarem como verdadeiras Empreendedoras da Costura.
          </p>
          <a
            class="w-full text-white border text-[13px] font-medium text-center block mt-10 px-0 py-3.5 rounded-[3px] border-solid border-[#171413] bg-[#171413] hover:bg-white hover:text-[#171413] transition-all"
            href="https://www.clubedacostureira.com.br/conta/criar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero fazer parte do clube da costureira
          </a>
        </div>
      </div>
    </div>
  );
}
