import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

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

  const listBanners = banners && banners.map((banner) => {
    return (
      <a
        href={banner.link}
        class="block min-w-[120px] md:min-w-[234px] text-[#585858] hover:text-[#000] hover:font-medium"
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
    );
  });

  return (
    <div class="w-full max-w-[1246px] mx-auto my-9 max-md:px-3 flex gap-4 lg:gap-10 lg:grid grid-flow-col auto-cols-fr overflow-auto no-scrollbar">
      {listBanners}
    </div>
  );
}
