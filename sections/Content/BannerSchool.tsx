import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "$store/sdk/useId.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  banners?: Array<{
    image: LiveImage;
    title: string;
    text: string;
    link: string;
  }>;
}

export default function BannerSchool(
  props: Props,
) {
  const {
    banners = [{
      image: "/arquivos/banner-school-1.png",
      title: "COSTURA DE SUCESSO",
      text:
        "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
      link: "#",
    }, {
      image: "/arquivos/banner-school-2.png",
      title: "COSTURA DE SUCESSO",
      text:
        "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
      link: "#",
    }, {
      image: "/arquivos/banner-school-1.png",
      title: "COSTURA DE SUCESSO",
      text:
        "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
      link: "#",
    }, {
      image: "/arquivos/banner-school-2.png",
      title: "COSTURA DE SUCESSO",
      text:
        "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
      link: "#",
    }, {
      image: "/arquivos/banner-school-3.png",
      title: "COSTURA DE SUCESSO",
      text:
        "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
      link: "#",
    }],
  } = props;

  const id = useId();

  const dots = banners.length / 3;

  function Dots({ banners }: Props) {
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
            {banners && banners.map((_, index) => (
              <li class="carousel-item">
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

  const listBanners = banners && banners.map((banner, index) => {
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
            loading="lazy"
            src={banner.image}
            alt="banner"
          />
          <div class="px-4 py-9 bg-white">
            <h5 class="my-3 text-center text-sm md:text-base font-medium">
              {banner.title}
            </h5>
            <p class="mb-9 text-center text-xs md:text-sm">
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
        Maximus Escola de Moda
      </h4>
      <p class="max-w-[824px] mx-auto text-sm md:text-base text-center max-md:px-5">
        A Maximus Tecidos acredita no poder da costura como um movimento capaz
        de transformar vidas. Nossa Escola de Moda Online já conta com mais de
        11.000 alunas (os). Escolha um curso e redescubra a arte de fazer a moda
        com as próprias mãos.
      </p>
      <div class="w-full max-w-[1246px] mx-auto mt-9 max-md:px-3 pt-2 pb-10 relative">
        <Slider class="carousel carousel-end gap-4 lg:gap-8 row-start-2 row-end-5 w-full">
          {listBanners}
        </Slider>
        <div class="hidden md:block">
          <div class="z-10 absolute -left-2 lg:-left-8 top-1/2">
            <Slider.PrevButton class="btn btn-circle btn-outline">
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="z-10 absolute -right-2 lg:-right-8 top-1/2">
            <Slider.NextButton class="btn btn-circle btn-outline">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </div>
        {banners && banners?.length > 1 && <Dots banners={banners} />}
        <SliderJS rootId={id} infinite />
      </div>
    </div>
  );
}
