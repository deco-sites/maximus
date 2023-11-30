export interface DepartamentsItem {
  text: string;
  href: string;
}

export default function Departaments() {
  return (
    <div class="w-full py-9 bg-white border-b border-t border-[#ebebeb]">
      <div class="max-w-[1236px] m-auto">
        <h4 class="uppercase text-md font-bold text-center mb-5">
          departamentos
        </h4>
        <ul class="flex justify-center md:justify-between max-md:flex-col">
          <li class="max-md:collapse collapse-plus max-md:border-t border-[#ebebeb] max-md:rounded-none md:pr-[35px]">
            <input class="md:hidden" type="checkbox" />
            <a
              class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
              href="/tecidos"
            >
              TECIDOS
            </a>
            <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0 flex-col md:flex md:flex-wrap md:h-80 md:gap-[0_10px]">
              <li id="0">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/flanela"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Flanela
                </a>
              </li>
              <li id="1">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/tules-lisos"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Tules Lisos
                </a>
              </li>
              <li id="2">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/alfaiataria"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Alfaiataria
                </a>
              </li>
              <li id="3">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/camurca"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Camurça
                </a>
              </li>
              <li id="4">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/gazar"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Gazar
                </a>
              </li>
              <li id="5">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/jacquard-brocados"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block md:flex flex-wrap w-50"
                >
                  Jacquard Brocados
                </a>
              </li>
              <li id="6">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/linho"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Linho
                </a>
              </li>
              <li id="7">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/organza"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Organza
                </a>
              </li>
              <li id="8">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/paetes"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Paetês
                </a>
              </li>
              <li id="9">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/piquet"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Piquet
                </a>
              </li>
              <li id="10">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/shantung"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Shantung
                </a>
              </li>
              <li id="11">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/viscose"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Viscose
                </a>
              </li>
              <li id="12">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/zibeline"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Zibeline
                </a>
              </li>
              <li id="13">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/tecidos-para-decoracao"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block md:flex flex-wrap w-20"
                >
                  Tecidos para Decoração
                </a>
              </li>
              <li id="14">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/algodao"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Algodão
                </a>
              </li>
              <li id="15">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/cetim"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Cetim
                </a>
              </li>
              <li id="16">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/crepe"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Crepe
                </a>
              </li>
              <li id="17">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/lame-e-lurex--brilho-"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block md:flex flex-wrap w-100"
                >
                  Lamê e Lurex (Brilho)
                </a>
              </li>
              <li id="18">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/las-puras-e-mistas"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Lãs Puras e Mistas
                </a>
              </li>
              <li id="19">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/malhas"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Malhas
                </a>
              </li>
              <li id="20">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/musseline"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Musseline
                </a>
              </li>
              <li id="21">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/peles-artificiais"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Peles Artificiais
                </a>
              </li>
              <li id="22">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/rendas-e-tules"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block md:flex flex-wrap w-20"
                >
                  Rendas e Tules
                </a>
              </li>
              <li id="23">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/tecido-sintetico"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Tecido sintético
                </a>
              </li>
              <li id="24">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/sarja"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Sarja
                </a>
              </li>
              <li id="25">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/tafeta"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Tafetá
                </a>
              </li>
              <li id="26">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/veludo"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Veludo
                </a>
              </li>
              <li id="27">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/forros"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Forros
                </a>
              </li>
              <li id="28">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/neoprene"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Neoprene
                </a>
              </li>
              <li id="29">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/pele-de-pessego"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Pele de Pêssego
                </a>
              </li>
              <li id="30">
                <a
                  href="https://www.maximustecidos.com.br/tecidos/chiffon"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Chiffon
                </a>
              </li>
            </ul>
          </li>

          <li class="max-md:collapse collapse-plus max-md:border-t border-[#ebebeb] max-md:rounded-none">
            <input class="md:hidden" type="checkbox" />
            <a
              class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
              href="/tecidos"
            >
              LIVROS, MOLDES E RÉGUAS
            </a>

            <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0">
              <li id="0">
                <a
                  href="https://www.maximustecidos.com.br/livros-moldes-e-reguas/desenho-de-moda"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Desenho de Moda
                </a>
              </li>
              <li id="1">
                <a
                  href="https://www.maximustecidos.com.br/livros-moldes-e-reguas/moldes-de-roupas"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Moldes de Roupas
                </a>
              </li>
              <li id="2">
                <a
                  href="https://www.maximustecidos.com.br/livros-moldes-e-reguas/coloracao-e-combinacao"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Coloração e Combinação
                </a>
              </li>
              <li id="3">
                <a
                  href="https://www.maximustecidos.com.br/livros-moldes-e-reguas/reguas"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Réguas
                </a>
              </li>
              <li id="4">
                <a
                  href="https://www.maximustecidos.com.br/livros-moldes-e-reguas/livros-e-apostilas"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Livros e Apostilas
                </a>
              </li>
              <li id="5">
                <a
                  href="https://www.maximustecidos.com.br/livros-moldes-e-reguas/manequins"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Manequins
                </a>
              </li>
            </ul>
          </li>

          <li class="max-md:collapse collapse-plus max-md:border-t border-[#ebebeb] max-md:rounded-none">
            <input class="md:hidden" type="checkbox" />
            <a
              class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
              href="/ofertas"
            >
              OFERTAS
            </a>

            <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0">
              <li id="0">
                <a
                  href="https://www.maximustecidos.com.br/ofertas/tecidos-promocionais"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Tecidos Promocionais
                </a>
              </li>
              <li id="1">
                <a
                  href="https://www.maximustecidos.com.br/ofertas/tecidos-fim-de-peca"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Tecidos fim de peça
                </a>
              </li>
              <li id="2">
                <a
                  href="https://www.maximustecidos.com.br/ofertas/livros-moldes-e-reguas"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Livros, Moldes e Réguas
                </a>
              </li>
              <li id="3">
                <a
                  href="https://www.maximustecidos.com.br/ofertas/armarinhos-aviamentos-e-bordados"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Armarinhos, Aviamentos e Bordados
                </a>
              </li>
            </ul>
          </li>

          <li class="max-md:collapse collapse-plus max-md:border-t border-[#ebebeb] max-md:rounded-none">
            <input class="md:hidden" type="checkbox" />
            <a
              class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
              href="https://www.maximustecidos.com.br/aviamentos-e-bordado"
            >
              AVIAMENTOS E BORDADO
            </a>

            <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0">
              <li id="0">
                <a
                  href="https://www.maximustecidos.com.br/aviamentos-e-bordado/bordado-e-pedrarias"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Bordado e Pedrarias
                </a>
              </li>
              <li id="1">
                <a
                  href="https://www.maximustecidos.com.br/aviamentos-e-bordado/armarinhos-e-aviamentos"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Armarinhos e Aviamentos
                </a>
              </li>
            </ul>
          </li>

          <li class="max-md:collapse collapse-plus max-md:border-t border-[#ebebeb] max-md:rounded-none">
            <input class="md:hidden" type="checkbox" />
            <a
              class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
              href="https://www.maximustecidos.com.br/maquinas"
            >
              MÁQUINAS
            </a>

            <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0">
              <li id="0">
                <a
                  href="https://www.maximustecidos.com.br/maquinas/maquinas-de-costura-domestica"
                  class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                >
                  Máquinas de Costura Doméstica
                </a>
              </li>
            </ul>
          </li>

          <li class="max-md:collapse collapse-plus max-md:border-t border-[#ebebeb] max-md:rounded-none">
            <input class="md:hidden" type="checkbox" />
            <a
              class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
              href="https://materiais.maximustecidos.com.br/maximus-escola-de-moda-online?_gl=1*1g9njnu*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzExNTcuMC4wLjA.*_fplc*OGhndnY0bjIyUnFPQ3NTak9Fd0ZIVTlYellCazc0VEpGV25UUkFiNjVkUTQ0Z0lNQ3locW9welFtUk9YV25MWTBRRUJmVFFQdjNhMmYxZEs3bWljSFNQSEdWVlklMkZ3VVppYklXYnpXNm9LNmd1VFRBRHVoTkRiTldzQXI2cXclM0QlM0Q."
            >
              CURSOS
            </a>

            <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0">
              <li>
                <a href="https://materiais.maximustecidos.com.br/curso-online-modelagem-profissional-de-malhas-marlene-mukai?_gl=1*fcji3q*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzE1MjMuMC4wLjA.*_fplc*OGhndnY0bjIyUnFPQ3NTak9Fd0ZIVTlYellCazc0VEpGV25UUkFiNjVkUTQ0Z0lNQ3locW9welFtUk9YV25MWTBRRUJmVFFQdjNhMmYxZEs3bWljSFNQSEdWVlklMkZ3VVppYklXYnpXNm9LNmd1VFRBRHVoTkRiTldzQXI2cXclM0QlM0Q." class="text-xs text-[#525252] mb-3 max-w-[180px] block">
                  Modelagem
                </a>
              </li>{" "}
              <li>
                <a href="https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-de-sucesso-nea-santtana?_gl=1*afhdoc*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzE1MjMuMC4wLjA.*_fplc*OGhndnY0bjIyUnFPQ3NTak9Fd0ZIVTlYellCazc0VEpGV25UUkFiNjVkUTQ0Z0lNQ3locW9welFtUk9YV25MWTBRRUJmVFFQdjNhMmYxZEs3bWljSFNQSEdWVlklMkZ3VVppYklXYnpXNm9LNmd1VFRBRHVoTkRiTldzQXI2cXclM0QlM0Q." class="text-xs text-[#525252] mb-3 max-w-[180px] block">
                  Corte e Costura
                </a>
              </li>{" "}
              <li>
                <a href="https://materiais.maximustecidos.com.br/curso-de-desenho-de-moda-online-estilista-de-fato-valmir-pazeto?_gl=1*owpanu*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzE1MjMuMC4wLjA.*_fplc*OGhndnY0bjIyUnFPQ3NTak9Fd0ZIVTlYellCazc0VEpGV25UUkFiNjVkUTQ0Z0lNQ3locW9welFtUk9YV25MWTBRRUJmVFFQdjNhMmYxZEs3bWljSFNQSEdWVlklMkZ3VVppYklXYnpXNm9LNmd1VFRBRHVoTkRiTldzQXI2cXclM0QlM0Q." class="text-xs text-[#525252] mb-3 max-w-[180px] block">
                  Desenho de Moda
                </a>
              </li>{" "}
              <li>
                <a href="https://materiais.maximustecidos.com.br/curso-online-de-redes-sociais-influenciadora-da-costura-ana-paula-mocelin?_gl=1*afhdoc*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzE1MjMuMC4wLjA.*_fplc*OGhndnY0bjIyUnFPQ3NTak9Fd0ZIVTlYellCazc0VEpGV25UUkFiNjVkUTQ0Z0lNQ3locW9welFtUk9YV25MWTBRRUJmVFFQdjNhMmYxZEs3bWljSFNQSEdWVlklMkZ3VVppYklXYnpXNm9LNmd1VFRBRHVoTkRiTldzQXI2cXclM0QlM0Q." class="text-xs text-[#525252] mb-3 max-w-[180px] block">
                  Marketing e Negócios para Costura
                </a>
              </li>{" "}
              <li>
                <a href="https://materiais.maximustecidos.com.br/curso-online-arte-do-bordado-fernanda-nadal?_gl=1*afhdoc*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzE1MjMuMC4wLjA.*_fplc*OGhndnY0bjIyUnFPQ3NTak9Fd0ZIVTlYellCazc0VEpGV25UUkFiNjVkUTQ0Z0lNQ3locW9welFtUk9YV25MWTBRRUJmVFFQdjNhMmYxZEs3bWljSFNQSEdWVlklMkZ3VVppYklXYnpXNm9LNmd1VFRBRHVoTkRiTldzQXI2cXclM0QlM0Q." class="text-xs text-[#525252] mb-3 max-w-[180px] block">
                  Bordados
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}