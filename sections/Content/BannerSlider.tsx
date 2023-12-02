import { useId } from "$store/sdk/useId.ts";

import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  banners?: Array<{
    image: LiveImage;
    title: string;
    link: string;
  }>;
}

export default function BannerSlider(
  props: Props,
) {
  const {
    banners = [{
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-1.png",
      title: "Alfaiataria",
      link: "/tecidos/alfaiataria",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-2.png",
      title: "Algodão",
      link: "/tecidos/algodao",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-3.png",
      title: "Camurça",
      link: "/tecidos/camurca",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-4.png",
      title: "Cetim",
      link: "/tecidos/cetim",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-5.png",
      title: "Chiffon",
      link: "/tecidos/chiffon",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-3.png",
      title: "Camurça",
      link: "/tecidos/camurca",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-4.png",
      title: "Cetim",
      link: "/tecidos/cetim",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-slider-5.png",
      title: "Chiffon",
      link: "/tecidos/chiffon",
    }],
  } = props;

  const id = useId();

  const listBanners = banners && banners.map((banner, index) => {
    return (
      <Slider.Item
        index={index}
        class="flex flex-col gap-4 carousel-item w-[234px]"
      >
        <a
          href={banner.link}
          class="block w-full text-[#585858] hover:text-[#000] hover:font-medium"
        >         
          <Image
             src={`${banner.image}?v=231123`}
             alt={banner.title}
             title={banner.title}
              width={234}
              height={240}
              loading="lazy"
            />    
          <p class="mt-3 mb-9 text-center text-base">
            {banner.title}
          </p>
        </a>
      </Slider.Item>
    );
  });

  return (
    <div
      id={id}
      class="w-full max-w-[1246px] mx-auto my-9 max-md:px-3 relative"
    >
      <Slider class="carousel carousel-start md:carousel-center gap-4 lg:gap-8 row-start-2 row-end-5 w-full">
        {listBanners}
      </Slider>
      <div class="hidden md:block">
        <div class="z-10 absolute -left-2 lg:-left-8 top-[100px]">
          <Slider.PrevButton class="btn-slider-custom btn-circle">
            <Icon size={18} id="ChevronLeft" strokeWidth={3} />
          </Slider.PrevButton>
        </div>
        <div class="z-10 absolute -right-2 lg:-right-8 top-[100px]">
          <Slider.NextButton class="btn-slider-custom btn-circle">
            <Icon size={24} id="ChevronRight" strokeWidth={3} />
          </Slider.NextButton>
        </div>
      </div>

      <SliderJS rootId={id} infinite={true} />
    </div>
  );
}
