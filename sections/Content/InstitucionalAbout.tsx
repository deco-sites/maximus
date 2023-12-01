export interface Props {
  breadcrumb?: string;
  title?: string;
  /** @format html */
  html?: string;
  /** @format textarea */
  text?: string;
}

export default function InstitucionalAbout(props: Props) {
  const {
    breadcrumb = "",
    title = "sobre-nos",
    html = "",
    text = "Lorem...",
  } = props;
  return (
    <div class="w-full mt-20 md:mt-0 pt-[15px] mb-[-32px] border-b-[#ebebeb] border-b border-solid">
      {/* banner main */}
      <div class="w-full max-w-[1236px] mx-auto flex items-center max-md:flex-col relative before:content-[''] before:w-full before:h-[716px] before:absolute before:-left-full before:bg-[#22201f]">
        <div class="w-full md:w-[875px] md:h-[716px] bg-[#22201F]">
          <div class="w-full md:w-[508px] block pt-[50px] md:pt-[70px] max-md:pb-[100px] pb-0 px-[20px] md:px-[50px]">
            <img
              width={45}
              height={45}
              src="https://tfcszo.vteximg.com.br/arquivos/logo-sobre-nos.png"
              alt="logo"
              title="logo"
            />
            <h1 class="text-[28px] leading-[34px] md:text-[38px] font-normal md:leading-[47px] text-white my-4">
              Resgatar o hábito de costurar
            </h1>
            <h3 class="text-[22px] uppercase font-light tracking-[0.50px] leading-[22px] text-white mt-[13px] mb-[50px] mx-0">
              ESSE É O NOSSO PROPÓSITO.
            </h3>
            <p class="text-[13px] tracking-[0] leading-[21px] text-white mb-[18px]">
              A Maximus Tecidos nasceu de uma missão muito especial: resgatar um
              hábito que sempre esteve muito presente na vida das pessoas e com
              o tempo acabou se perdendo.
              <br />
              <br />
              Provavelmente na sua família alguém já teve a costura como um
              costume, mas hoje está esquecido e as velhas máquinas que
              antigamente eram o braço direito da família, ficaram de lado em
              algum cômodo da casa.
              <br />
              <br />
              A costura, muito mais do que trabalho, é uma forma de lazer e
              inspiração. Através dela é possível transformar o mundo, ou ao
              menos a visão sobre ele. Trazer um porquê para as nossas atitudes
              e consciência sobre nossas escolhas. É uma causa que nós
              abraçamos, pois acreditamos que as novas gerações merecem conhecer
              esses valores e tradições que carregam muitas histórias de valor.
            </p>
          </div>
        </div>
        <img
          class="md:absolute md:right-0 max-md:mt-[-70px] max-md:w-[80%]"
          width={510}
          height={551}
          src="https://tfcszo.vteximg.com.br/arquivos/header-sobre-nos.png"
          alt="quem somos"
          title="quem somos"
        />
      </div>

      {/* first section */}
      <div class="max-w-[1236px] mx-auto my-[60px] md:my-[120px] flex max-md:flex-col items-center justify-between max-md:px-[20px]">
        <img
          class="max-w-full max-md:hidden"
          width={540}
          height={412}
          src="https://tfcszo.vteximg.com.br/arquivos/sobre-nos-escola-online.png"
          alt="banner escola"
          title="banner escola"
        />
        <div class="max-w-full w-[508px]">
          <h3 class="text-[15px] text-neutral-800 uppercase font-medium text-shadow mb-[22px]">
            ESCOLA DE MODA ONLINE
          </h3>
          <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px] mb-[18px]">
            A Maximus Tecidos acredita no poder da costura como um movimento
            capaz de transformar vidas e expandiu suas atividades no ramo da
            educação. Além dos materiais educacionais que se tornaram um dos
            carros chefes, agora também conta com a Maximus Escola de Moda
            Online, que já conta com mais de 37.000 alunas (os), com cursos de
            Desenho de Moda, Corte e Costura (reconhecido pelo MEC), Costura
            Pet, Costura Infantil, Costura Criativa, Modelagem (reconhecido pelo
            MEC), Bordados, Marketing e Negócios para Costura.
            <br />
            <br />
            A missão é lançar outros cursos no segmento da Moda e se tornar uma
            das maiores Escolas de Moda Online do Brasil e redescobrir a arte de
            fazer moda com as próprias mãos.
          </p>
          <a
            class="w-full md:w-[200px] text-white border text-[13px] font-medium text-center block mt-[41px] px-0 py-3.5 rounded-[3px] border-solid border-[#171413] bg-[#171413] hover:text-[#171413] hover:border-[#171413] hover:bg-white transition-all"
            href="https://materiais.maximustecidos.com.br/maximus-escola-de-moda-online?_gl=1*vttyui*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTY5OTYzMjA3Ny4yMi4wLjE2OTk2MzIwOTkuMC4wLjA.*_fplc*RWpuMDRWV1BrTjk2cW1tb1hQeDRjV2x5VFpYQW0ydE4lMkJ0M0wlMkJLOUMlMkJnNW5jWlh0d3JtaFY1N3NxT3J1eDFzaHJnUm9HdVFmN2QwMSUyRjhmbWlJaTAydmpSJTJGc1BtaU1KdGFxSlVNeSUyRnNSTjkzcWVqJTJGMXVuY2E3JTJCNnRHajN1QSUzRCUzRA.."
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça nossos cursos
          </a>
        </div>
      </div>

      {/* last section */}
      <div class="w-full bg-[#f5f5f5] pt-[50px] md:pt-[100px] pb-[75px] px-0">
        <div class="w-[1190px] max-w-full mx-auto my-0 px-5">
          <h3 class="text-[29px] font-light uppercase text-center text-neutral-800">
            LINHA DO TEMPO
          </h3>

          {/* time mobile */}
          <div class="w-full flex md:hidden items-center flex-col mt-5">
            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                1986
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Nasce o grupo Maximus com a costureira e estilista Inês Maximus,
                abrindo um comércio de confecção chamado inicialmente de
                Alfaiataria modelo
              </p>
            </div>

            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2013
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Abertura da primeira loja de Tecidos
              </p>
            </div>

            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2015
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Início da Loja Virtual e do Blog da Costureira
              </p>
            </div>

            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2017
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Lançamento da Rádio da Costureira
              </p>
            </div>

            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2018
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Primeiro curso (presencial) em parceria com o Estilista Valmir
                Pazeto
              </p>
            </div>

            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2019
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Primeiro curso Online de Costura com Nea Santtana
              </p>
            </div>

            <div class="flex flex-col items-center justify-center after:pontinhos mb-3 w-full">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2020
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Lançamento Oficial da Escola de Moda On-line com as Experts
                Marlene Mukai, Aury Mesquita e outros profissionais renomados.
              </p>
            </div>

            <div class="flex flex-col items-center justify-center w-full mb-6">
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2022
              </h5>
              <p class="font-normal leading-6 text-center text-[13px] mb-3">
                Lançamento do Marketplace. Espalhar o nosso propósito e formar
                milhares de alunos no mundo todo
              </p>
            </div>
          </div>

          {/* time desktop */}
          <div class="hidden md:flex items-center justify-between mt-[50px] mb-[120px] mx-0">
            <div class="w-[970px]">
              <div class="w-full flex justify-between items-center relative after:pontinhos-base">
                <div class="flex flex-col items-center justify-center after:pontinhos w-full md:w-[280px] ">
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    1986
                  </h5>
                  <p class="min-h-[96px] font-normal leading-6 text-center text-[13px] my-3">
                    Nasce o grupo Maximus com a costureira e estilista Inês
                    Maximus, abrindo um comércio de confecção chamado
                    inicialmente de Alfaiataria modelo
                  </p>
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                </div>

                <div class="flex flex-col items-center justify-center after:pontinhos w-full md:w-[120px] ">
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    2015
                  </h5>
                  <p class="min-h-[96px] font-normal leading-6 text-center text-[13px] my-3">
                    Início da Loja Virtual e do Blog da Costureira
                  </p>
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                </div>

                <div class="flex flex-col items-center justify-center after:pontinhos w-full md:w-[180px] ">
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    2018
                  </h5>
                  <p class="min-h-[96px] font-normal leading-6 text-center text-[13px] my-3">
                    Primeiro curso (presencial) em parceria com o Estilista
                    Valmir Pazeto
                  </p>
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                </div>

                <div class="flex flex-col items-center justify-center after:pontinhos w-full md:w-[217px] ">
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    2020
                  </h5>
                  <p class="min-h-[96px] font-normal leading-6 text-center text-[13px] my-3">
                    Lançamento Oficial da Escola de Moda On-line com as Experts
                    Marlene Mukai, Aury Mesquita e outros profissionais
                    renomados.
                  </p>
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                </div>
              </div>

              <div class="w-full flex justify-center items-center">
                <div class="flex flex-col items-center justify-center before:pontinhos w-full md:w-[141px] mr-[70px]">
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    2013
                  </h5>
                  <p class="font-normal leading-6 text-center text-[13px] my-3">
                    Abertura da primeira loja de Tecidos
                  </p>
                </div>

                <div class="flex flex-col items-center justify-center before:pontinhos w-full md:w-[141px] mr-[70px]">
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    2017
                  </h5>
                  <p class="font-normal leading-6 text-center text-[13px] my-3">
                    Lançamento da Rádio da Costureira
                  </p>
                </div>

                <div class="flex flex-col items-center justify-center before:pontinhos w-full md:w-[180px]">
                  <img
                    class="mb-3"
                    width={33}
                    height={23}
                    src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                    alt="logo institucional"
                    title="logo institucional"
                  />
                  <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                    2019
                  </h5>
                  <p class="font-normal leading-6 text-center text-[13px] my-3">
                    Primeiro curso Online de Costura com Nea Santtana
                  </p>
                </div>
              </div>
            </div>
            <div class="w-[190px] flex items-center flex-col">
              <div class="flex items-center gap-4 mb-2">
                <img
                  width={44}
                  height={31}
                  src="https://tfcszo.vteximg.com.br/arquivos/logo-linha-do-tem.png"
                  alt="linha do tempo"
                  title="linha do tempo"
                />
                <img
                  width={48}
                  height={48}
                  src="https://tfcszo.vteximg.com.br/arquivos/logo-novo-inst-sobre.png"
                  alt="linha do tempo"
                  title="linha do tempo"
                />
              </div>
              <h5 class="text-[#E4A886] text-2xl text-center font-medium mb-[5px]">
                2022
              </h5>
              <p class="font-normal leading-6 text-center text-[13px]">
                Lançamento do Marketplace. Espalhar o nosso propósito e formar
                milhares de alunos no mundo todo
              </p>
            </div>
          </div>

          <a
            class="text-white border w-[294px] text-[13px] font-medium text-center block mx-auto my-0 px-0 py-3.5 rounded-[3px] border-solid border-[#171413] bg-[#171413] hover:text-[#171413] hover:border-[#171413] hover:bg-white transition-all"
            href="https://www.maximustecidos.com.br/tecidos"
          >
            Veja nossos produtos
          </a>
        </div>
      </div>
    </div>
  );
}
