import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface Props {
  title?: string;
  description?: string;
  benefits?: Array<{
    image: LiveImage;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "",
    description = "",
    benefits = [{
      image: "/arquivos/benefits-1.png",
      description: "Loja <b>100% Segura!</b> <br> Somos a maior do Brasil",
    }, {
      image: "/arquivos/benefits-2.png",
      description:
        "<b>3x sem juros</b> no cartão <br> ou <b>5% desconto</b> no pix",
    }, {
      image: "/arquivos/benefits-3.png",
      description:
        "<b>Frete grátis</b> para todo o <br> Brasil. <b>*consulte condições</b>",
    }, {
      image: "/arquivos/benefits-4.png",
      description: "Conheça os cursos da Escola <br> de Moda On-line",
    }],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit) => {
    const reverse = layout?.variation === "Color reverse";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <div
        class={`flex items-center px-4 py-3 border border-[#eeeeee] rounded-[16px] max-md:min-w-max`}
      >
        <div class="flex-none">
          <img
            loading="lazy"
            width={45}
            src={benefit.image}
            alt="beneficios"
            class="mr-2"
          />
        </div>
        <div class="flex-auto flex flex-col gap-1 lg:gap-2">
          <div
            class={`text-base lg:text-xl leading-7 ${
              reverse ? "text-base-100" : "text-base-content"
            }`}
          >
          </div>
          <p
            class={`text-sm ${reverse ? "text-base-100" : "text-[#262626]"} ${
              benefitLayout == "piledup" ? "hidden lg:block" : ""
            }`}
            dangerouslySetInnerHTML={{
              __html: benefit.description,
            }}
          >
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div class="w-full max-w-[1246px] mr-auto ml-auto container my-8 mb-10 flex gap-8">
            <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="w-full flex justify-center">
              <div class="flex gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr overflow-auto no-scrollbar">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "With border" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          />
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full py-6 px-4 border border-base-300 lg:gap-8 lg:grid-flow-col lg:auto-cols-fr lg:p-10">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
      {layout?.variation === "Color reverse" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          />
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full lg:gap-8 lg:grid-flow-col lg:auto-cols-fr">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
