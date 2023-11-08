import { useId } from "$store/sdk/useId.ts";

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
      image: "/arquivos/banner-slider-1.png?v=1245",
      title: "Alfaiataria",
      link: "#",
    }, {
      image: "/arquivos/banner-slider-2.png?v=1245",
      title: "Algodão",
      link: "#",
    }, {
      image: "/arquivos/banner-slider-3.png?v=1245",
      title: "Camurça",
      link: "#",
    }, {
      image: "/arquivos/banner-slider-4.png?v=1245",
      title: "Cetim",
      link: "#",
    }, {
      image: "/arquivos/banner-slider-5.png?v=1245",
      title: "Chiffon",
      link: "#",
    }],
  } = props;

  const id = useId();

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
        <div class="hidden justify-center">
          <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
            {banners &&
              banners.map((_, index) => (
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
          <img
            width={234}
            height={240}
            loading="lazy"
            src={banner.image}
            alt="banner"
          />
          <p class="mt-3 mb-9 text-center text-base">
            {banner.title}
          </p>
        </a>
      </Slider.Item>
    );
  });

  return (
    <div class="w-full max-w-[1246px] mx-auto my-9 max-md:px-3 relative">
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
      {banners && banners?.length > 1 && <Dots banners={banners} />}
      <SliderJS rootId={id} interval={6 * 1e3} infinite={true} />
    </div>
  );
}
