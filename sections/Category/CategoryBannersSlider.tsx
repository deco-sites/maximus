import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import { useId } from "$store/sdk/useId.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  banners?: Array<{
    image?: LiveImage;
    title?: string;
    link?: string;
  }>;
}

export default function CategoryBannersSlider(
  props: Props,
) {
  const {
    banners = [{
      image: "/arquivos/tecidos-alfaiataria.png?v=261020",
      title: "Alfaiataria",
      link: "#",
    }, {
      image: "/arquivos/tecidos-camurca.png?v=261020",
      title: "Algodão",
      link: "#",
    }, {
      image: "/arquivos/tecidos-gazar.png?v=261020",
      title: "Camurça",
      link: "#",
    }, {
      image: "/arquivos/tecidos-jacquard-brocados.png?v=261020",
      title: "Cetim",
      link: "#",
    }, {
      image: "/arquivos/tecidos-organza.png?v=261020",
      title: "Chiffon",
      link: "#",
    }, {
      image: "/arquivos/tecidos-paetes.png?v=261020",
      title: "Cetim",
      link: "#",
    }, {
      image: "/arquivos/tecidos-piquet.png?v=261020",
      title: "Chiffon",
      link: "#",
    }, {
      image: "/arquivos/tecidos-alfaiataria.png?v=261020",
      title: "Alfaiataria",
      link: "#",
    }, {
      image: "/arquivos/tecidos-camurca.png?v=261020",
      title: "Algodão",
      link: "#",
    }, {
      image: "/arquivos/tecidos-gazar.png?v=261020",
      title: "Camurça",
      link: "#",
    }, {
      image: "/arquivos/tecidos-jacquard-brocados.png?v=261020",
      title: "Cetim",
      link: "#",
    }, {
      image: "/arquivos/tecidos-organza.png?v=261020",
      title: "Chiffon",
      link: "#",
    }, {
      image: "/arquivos/tecidos-paetes.png?v=261020",
      title: "Cetim",
      link: "#",
    }, {
      image: "/arquivos/tecidos-piquet.png?v=261020",
      title: "Chiffon",
      link: "#",
    }],
  } = props;

  const id = useId();

  const listBanners = banners && banners.map((banner, index) => {
    return (
      <Slider.Item
        index={index}
        class="flex flex-col gap-4 carousel-item w-[33.3%] md:w-[12.5%]"
      >
        <a
          href={banner.link}
          class="flex items-center justify-center flex-col"
        >
          <img
            loading="lazy"
            src={banner.image}
            alt="banner"
            class="w-[84px] h-[84px] relative overflow-hidden rounded-[50%] border-4 border-solid border-[#EBEBEB]"
          />

          <h5 class="text-center text-xs font-medium leading-[17px] tracking-[0px] text-[#585858] max-w-[80px] mt-2.5 mb-0 mx-auto">
            {banner.title}
          </h5>
        </a>
      </Slider.Item>
    );
  });

  return (
    <div id={id} class="w-full max-md:px-3 py-8">
      <div class="w-full max-w-[950px] mx-auto relative">
        <Slider class="carousel carousel-end w-full">
          {listBanners}
        </Slider>
        <div class="block">
          <div class="z-10 absolute -left-2 lg:-left-20 top-1/2">
            <Slider.PrevButton class="btn-slider-custom btn-circle max-md:w-[35px] max-md:h-[35px]">
              <Icon size={18} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="z-10 absolute -right-2 lg:-right-20 top-1/2">
            <Slider.NextButton class="btn-slider-custom btn-circle max-md:w-[35px] max-md:h-[35px]">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </div>
        <SliderJS rootId={id} infinite />
      </div>
    </div>
  );
}
