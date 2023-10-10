import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";

export interface Props {
  page?: ProductListingPage | null;
  image?: LiveImage;
  imageMobile?: LiveImage;
}

export default function CategoryBannerHeader(props: Props) {
  const {
    image = "/arquivos/ids/167773/TECIDOS.jpg?v=638076806586230000",
    imageMobile = "/arquivos/ids/167773/TECIDOS.jpg?v=638076806586230000",
  } = props;

  return (
    <div class="w-full max-w-[1236px] mx-auto mb-6 mt-9 max-md:px-3 relative flex items-center justify-center max-md:mt-[128px]">
      <img class="hidden max-md:block" src={imageMobile} alt="banner de categoria" />
      <img class="hidden md:block" src={image} alt="banner de categoria" />
      <div class="absolute text-white">
        <p class="text-[28px] font-medium leading-[19px] text-white text-center mb-4">TECIDOS</p>
        <Breadcrumb
          itemListElement={[]}
        />
      </div>
    </div>
  );
}
