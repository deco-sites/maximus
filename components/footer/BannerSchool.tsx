import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "$store/sdk/useId.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
export interface bannerSchoolItem {
  image: LiveImage;
  title: string;
  text: string;
  link: string;
}
export default function BannerSchool({ content }: {
  content?: { title?: string; text?: string; itemsSchool?: bannerSchoolItem[] };
}) {
  /*const {
    banners = [{
      image: "/arquivos/Influenciadora-da-costura-flag.jpg",
      title: "Influenciadora da Costura",
      text:
        "Aprenda a divulgar suas costuras de forma profissional nas redes sociais para valorizar o seu trabalho e conquistar mais clientes.",
      link:
        "https://materiais.maximustecidos.com.br/curso-online-de-redes-sociais-influenciadora-da-costura-ana-paula-mocelin?_gl=1*i8qwcv*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RUhpNCUyRlZQcVdwSmRZeTlNZ2ZMTUZrc1R4eW9xb0pmJTJGZ0d1ZDJ3dE1KSE5weUN4REdsa3dOdGxtY3lyazFLJTJGRWI5UWk3MG1QeHA1V2xTVmpjSnpja3ZWb3FJbFFkREJ3bTExaXJTS1NoZlo1a3VXcjYwVEpkOWJQeE5ueFVBJTNEJTNE",
    }, {
      image: "/arquivos/Capas%20dos%20Cursos%20-%20FLAGS.jpg",
      title: "Ajustes e Consertos",
      text:
        "Aprenda a arte do ajuste e conserto de todos os tipos de roupas com Viviane Alves. Um dos cursos mais pedidos pelas alunas, agora na nossa Escola.",
      link:
        "https://materiais.maximustecidos.com.br/curso-online-costura-ajustes-consertos-de-roupas-viviane-alves?_gl=1*7qgfjh*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*bWo4Ynd3WGQ3WHVrZGF5bFJoM2ZJSUZheG5oZDhZblNlQmFyJTJCNWFjSE13cTFCJTJCS2Zod3puQU5wZVpNeHJ3bjJrTHFzdTlrWG10TXRxZjdob21yelVGOWlhZWh1aXB6ajRIaHRTZmxWbCUyRnVnNFBQeDNXRldlMVEyMnJWT3l3JTNEJTNE",
    }, {
      image: "/arquivos/modaeestilo.png",
      title: "MOLDES MODA E ESTILO",
      text:
        "Faça sua Assinatura e Tenha Acesso Ilimitado à Maior e mais Confiável Biblioteca de Moldes de Costura do Brasil com a Curadoria da Modelista Marlene Mukai.",
      link:
        "https://materiais.maximustecidos.com.br/assinatura-online-moldes-moda-estilo-marlene-mukai?_gl=1*7qgfjh*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*bWo4Ynd3WGQ3WHVrZGF5bFJoM2ZJSUZheG5oZDhZblNlQmFyJTJCNWFjSE13cTFCJTJCS2Zod3puQU5wZVpNeHJ3bjJrTHFzdTlrWG10TXRxZjdob21yelVGOWlhZWh1aXB6ajRIaHRTZmxWbCUyRnVnNFBQeDNXRldlMVEyMnJWT3l3JTNEJTNE",
    }, {
      image: "/arquivos/Curso-costura-online-flag.jpg",
      title: "Costura de Sucesso",
      text:
        "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
      link:
        "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-de-sucesso-nea-santtana?_gl=1*vl4lwz*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
    }, {
      image: "/arquivos/Modelagem-flag.jpg",
      title: "Modelista Profissional",
      text:
        "Aprenda Modelar as principais peças de roupas femininas estudando com a lenda viva da Modelagem Plana no Brasil.",
      link:
        "https://materiais.maximustecidos.com.br/curso-online-modelista-profissional-marlene-mukai?_gl=1*vl4lwz*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
    }, {
      image: "/arquivos/Modelagem-malhas-flag.jpg",
      title: "Modelagem de Malhas",
      text:
        "Perca o medo da Modelagem e aprenda a fazer as principais peças de malha estudando com Marlene Mukai.",
      link:
        "https://materiais.maximustecidos.com.br/curso-online-modelagem-profissional-de-malhas-marlene-mukai?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
    }, {
      image: "/arquivos/Costura-infantil-%20flag.jpg",
      title: "Costura Infantil",
      text:
        "Aprenda costurar roupas infantis e enxovais para seus filhos e netos e ganhe dinheiro num dos ramos mais lucrativos da costura;",
      link:
        "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-infantil-clara-calui?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
    }, {
      image: "/arquivos/Costura-criativa-flag.jpg",
      title: "Costura Criativa",
      text:
        "Aprenda a costurar as peças mais pedidas e lucrativas da Costura Criativa com Menino Costureiro, o Fenômeno da Costura na Internet.",
      link:
        "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-criativa-menino-costureiro?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
    }, {
      image: "/arquivos/Costura-Pet-flag.jpg",
      title: "Costura Pet",
      text:
        'Aprenda costurar roupinhas para seus "filhos de 4 patas" e lucre com o nicho de costura que mais cresce no Brasil!',
      link:
        "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-pet-aury-moda-pet?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
    },
    {
      image: "/arquivos/Bordado-a-mão-flag.jpg",
      title: "Arte do Bordado à mão",
      text:
        'Aprenda a bordar desde os pontos mais simples até desenhos inteiros, mesmo que nunca tenha bordado antes.',
      link:
        "https://materiais.maximustecidos.com.br/curso-online-arte-do-bordado-fernanda-nadal?_gl=1*y5d03a*_ga*MTIyNDExNTQwNi4xNjk3NzI1MzMy*_ga_HGM4SXF2FQ*MTcwNDcyODM4Mi40MS4wLjE3MDQ3MjgzODIuMC4wLjA.",
    },
    {
      image: "/arquivos/bordadoluneville.jpg",
      title: "Bordado Luneville",
      text:
        'Aprenda a bordar rendas sofisticadas e peças luxuosas utilizando a mesma técnica artesanal de roupas da Alta Costura.',
      link:
        "https://materiais.maximustecidos.com.br/curso-online-bordado-luneville-fernanda-nadal?_gl=1*8n9egc*_ga*MTIyNDExNTQwNi4xNjk3NzI1MzMy*_ga_HGM4SXF2FQ*MTcwNDcyODM4Mi40MS4wLjE3MDQ3MjgzODIuMC4wLjA.",
    },
    {
      image: "/arquivos/Estilista-de-fato-flag.jpg",
      title: "Estilista de Fato",
      text:
        'Aprenda Desenho de Moda com um método simples e seja valorizada no mercado da Costura como um (a) Estilista de Fato!',
      link:
        "https://materiais.maximustecidos.com.br/curso-de-desenho-de-moda-online-estilista-de-fato-valmir-pazeto?_gl=1*8n9egc*_ga*MTIyNDExNTQwNi4xNjk3NzI1MzMy*_ga_HGM4SXF2FQ*MTcwNDcyODM4Mi40MS4wLjE3MDQ3MjgzODIuMC4wLjA.",
    }],
  } = props;*/
  const id = useId();
  function Dots(
    { content }: { content?: { itemsSchool?: bannerSchoolItem[] } },
  ) {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @property --dot-progress {
              syntax: '<percentage>';
              inherits: false;
              initial-value: 0%;
            }
            `,
          }}
        />
        <div class="flex justify-center">
          <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
            {content && content.itemsSchool && content.itemsSchool.length > 0 &&
              content.itemsSchool.map((_, index) => (
                <li class="carousel-item hidden itemDots">
                  <Slider.Dot index={index}>
                    <div class="py-5">
                      <div class="w-[14px] h-[7px] group-disabled:bg-[#171413] bg-[#EBEBEB]" />
                    </div>
                  </Slider.Dot>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
  const listBanners = content && content.itemsSchool &&
    content.itemsSchool.length > 0 &&
    content?.itemsSchool.map((banner, index) => {
      return (
        <Slider.Item
          index={index}
          class="flex flex-col gap-4 carousel-item w-[70%] md:w-[400px]"
        >
          <a
            href={banner.link}
            class="block border border-[#EBEBEB] text-[#262626]"
          >
            <img
              width={398}
              height={398}
              loading="lazy"
              src={`${banner.image}?v=231123`}
              alt="banner de cursos"
              title="banner de cursos"
            />
            <div class="px-4 py-9 bg-white border border-solid border-[#EBEBEB]">
              <h5 class="my-3 text-center text-base font-semibold leading-[29px] uppercase text-[#262626]">
                {banner.title}
              </h5>
              <p class="min-h-[80px] px-0 md:px-6 mb-9 text-center text-xs md:text-sm font-medium leading-[19px] text-[#262626]">
                {banner.text}
              </p>
              <span class="w-[200px] h-[45px] rounded-[2px] mx-auto bg-[#6EB212] text-sm text-white flex items-center justify-center mt-6">
                CONHEÇA O CURSO
              </span>
            </div>
          </a>
        </Slider.Item>
      );
    });
  return (
    <div id={id} class="w-full bg-[#F5F5F5] text-[#262626] pt-4 mt-8">
      <h4 class="text-lg md:text-2xl text-center mb-2 mt-8 font-semibold">
         { content.title }
      </h4>
      <p class="max-w-[824px] mx-auto text-sm md:text-base text-center max-md:px-5">
      { content.text }
      </p>
      <div class="w-full max-w-[1246px] mx-auto mt-9 max-md:px-3 pt-2 pb-10 relative">
        <Slider class="carousel carousel-center gap-4 lg:gap-8 row-start-2 row-end-5 w-full">
          {listBanners}
        </Slider>
        <div class="hidden md:block">
          <div class="z-10 absolute -left-2 lg:-left-8 top-1/2">
            <Slider.PrevButton class="btn-slider-custom btn-circle">
              <Icon size={18} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="z-10 absolute -right-2 lg:-right-8 top-1/2">
            <Slider.NextButton class="btn-slider-custom btn-circle">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </div>
        {content && content.itemsSchool && content.itemsSchool.length > 1 && (
          <Dots content={content} />
        )}
        <SliderJS rootId={id} interval={6 * 1e3} infinite={true} />
      </div>
    </div>
  );
}