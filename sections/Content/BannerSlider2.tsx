import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  banners?: Array<{
    image: LiveImage;
    link: string;
  }>;
}

export default function BannerSlider2(
  props: Props,
) {
  const {
    banners = [{
      image: "/arquivos/banner-2-marcacao.png",
      link: "#",
    }, {
      image: "/arquivos/banner-2-marcacao-2.png",
      link: "#",
    }, {
      image: "/arquivos/banner-2-marcacao-3.png",
      link: "#",
    }, {
      image: "/arquivos/banner-2-marcacao-2.png",
      link: "#",
    }, {
      image: "/arquivos/banner-2-marcacao-3.png",
      link: "#",
    }],
  } = props;

  const listBanners = banners && banners.map((banner) => {
    return (
      <a
        href={banner.link}
        class="block min-w-[150px] text-[#585858] hover:text-[#000] hover:font-medium"
      >
        <img
          width={150}
          height={80}
          loading="lazy"
          src={banner.image}
          alt="banner"
        />        
      </a>
    );
  });

  return (
    <div class="w-full my-9 px-3 grid md:hidden gap-28 grid-flow-col auto-cols-fr overflow-auto no-scrollbar">
      {listBanners}
    </div>
  );
}
