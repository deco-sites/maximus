import { useId } from "$store/sdk/useId.ts";

import Image from "apps/website/components/Image.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
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
    }],
  } = props;

  const id = useId();

  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div class="w-full max-w-[1246px] mr-auto ml-auto container py-8 flex flex-col gap-12 lg:gap-16 lg:py-10">
      <div
        id={id}
        class="container grid grid-cols-[48px_1fr_48px] px-0 max-sm:px-2"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {banners?.map((banner, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[38%] sm:w-[234px] first:pl-0 sm:first:pl-0 last:pr-6 sm:last:pr-0"
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
                <p class="mt-3 mb-0 md:mb-9 text-center text-base">
                  {banner.title}
                </p>
              </a>
            </Slider.Item>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn-slider-custom btn-circle absolute right-1/2 top-[-50px]">
              <Icon size={18} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn-slider-custom btn-circle absolute left-1/2 top-[-50px]">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} infinite={true} />
      </div>
    </div>
  );
}
