import Image from "deco-sites/std/components/Image.tsx";
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
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-2-marcacao.png",
      link: "#",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-2-marcacao-2.png",
      link: "#",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-2-marcacao-3.png",
      link: "#",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-2-marcacao-2.png",
      link: "#",
    }, {
      image: "https://tfcszo.vteximg.com.br/arquivos/banner-2-marcacao-3.png",
      link: "#",
    }],
  } = props;

  const listBanners = banners && banners.map((banner, index) => {
    return (
      <a
        href={banner.link}
        class="block min-w-[150px] text-[#585858] hover:text-[#000] hover:font-medium"
      >
        <Image
              src={banner.image}
              alt={banner.title ? banner.title : `item ${index} da categoria`}
              title={banner.title ? banner.title : `item ${index} da categoria`}
              width={150}
              height={80}
              loading="eager"
            />        
      </a>
    );
  });

  return (
    <div class="w-full my-9 px-3 flex md:hidden justify-start gap-3 overflow-auto no-scrollbar">
      {listBanners}
    </div>
  );
}
