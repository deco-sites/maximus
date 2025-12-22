import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

export interface Item {
  title: string;
  /** @format textarea */
  content: string;
  image: LiveImage;
  link: string;
}

export interface Props {
  title: string;
  items: Item[];
}

export default function InstitucionalDicionario(props: Props) {
  const {
    title = "Dicionário de Tecidos",
    items = [],
  } = props;
  return (
    <div class="w-full mt-32 md:mt-10 mb-[-32px] border-b border-[#ebebeb]">
      <div class="max-w-[94%] md:max-w-[1246px] mx-auto">
        <div class="flex items-center mb-5">
          <span class="flex items-center text-xs tracking-[0px] text-neutral-800 capitalize underline after:content-[''] after:w-[3px] after:h-[3px] after:block after:bg-black after:mx-[7px] after:my-0 after:rounded-[50%]">
            Home
          </span>
          <span class="text-xs font-normal leading-6 flex items-center">
            {title}
          </span>
        </div>

        <h1 class="font-semibold leading-[29px] text-2xl text-neutral-800 mb-4 mx-0 my-[0.67em] max-md:text-lg max-md:mt-10">
          Dicionário de Tecidos
        </h1>
        <p class="text-[15px] w-full md:w-[85%] tracking-[0] text-neutral-800 leading-[21px] mt-5 mb-[50px]">
          Conhecer a origem e as principais características dos tecidos é
          fundamental para fazer a escolha certa. Por isso, criamos um
          Dicionário de Tecidos repleto de informações que vão te auxiliar na
          hora da compra. Antes de começar, é preciso esclarecer alguns
          conceitos básicos que vão facilitar o entendimento do que vem adiante.
          Vamos lá?!
        </p>

        <div class="flex max-md:flex-col justify-between">
          <div class="w-full md:w-[45%] max-md:mb-10">
            <h3 class="text-[15px] text-neutral-800 uppercase font-medium mb-[15px] text-shadow">
              TECIDOS EM FIBRAS NATURAIS:
            </h3>
            <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px]">
              São tecidos feitos a partir de matérias-primas presentes na
              natureza. Possuem um valor agregado bem superior aos sintéticos,
              mas demandam também muito mais cuidado. Estes tecidos não absorvem
              o calor, são bem fresquinhos, mas não podem, em hipótese alguma,
              ser mergulhados em água. A lavagem precisa ser à seco.
              <br />
              <br />
              Lavar um tecido com fibra natural é condená-lo à morte. Alguns
              ficam com algumas pontas mais curtas e outras mais longas, outros
              encolhem de 1 a 2 números e outros ficam completamente deformados.
              Então, não esqueça: mantenha suas peças confeccionadas com fibras
              naturais bem longe da máquina de lavar!
            </p>
          </div>
          <div class="w-full md:w-[45%]">
            <h3 class="text-[15px] text-neutral-800 uppercase font-medium mb-[15px] text-shadow">
              TECIDOS EM FIBRAS SINTÉTICAS:
            </h3>
            <p class="text-[13px] tracking-[0] text-neutral-800 leading-[21px]">
              São aqueles tecidos cujas fibras são produzidas a partir de
              produtos químicos como o poliéster. São mais duráveis e fáceis de
              cuidar, podendo ser lavados sem problemas, porém são menos
              sofisticados do que as fibras naturais.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full mt-7 md:mt-10 px-0 py-[50px] bg-[#f5f5f5]">
        <div class="max-w-[94%] md:max-w-[1246px] mx-auto">
          {items &&
            items.map((item: Item) => (
              <details class="w-full collapse collapse-arrow join-itemborder mb-[25px] px-2 md:px-10 rounded-sm border border-[#EBEBEB] bg-white">
                <summary class="collapse-title text-lg font-medium">
                  <div class="flex items-center">
                    <img
                      width={45}
                      height={45}
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                    />
                    <span class="text-neutral-800 text-[15px] uppercase font-semibold mx-10 my-0">
                      {item.title}
                    </span>{" "}
                    <a
                      href={item.link}
                      class="text-xs text-neutral-800 underline"
                    >
                      Ver na loja
                    </a>
                  </div>
                </summary>
                <div
                  class="collapse-content text-[13px] tracking-[0] text-neutral-800 leading-[21px] mb-[18px]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                >
                </div>
              </details>
            ))}
        </div>
      </div>
    </div>
  );
}
