import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";

export interface Props {
  page?: ProductListingPage | null;
  image?: LiveImage;
}

export default function CategoryBannerHeader(props: Props) {
  const {
    image = "/arquivos/ids/167773/TECIDOS.jpg?v=638076806586230000",
  } = props;

  return (
    <div class="w-full max-w-[1236px] mx-auto mb-6 mt-9 max-md:px-3 relative flex items-center justify-center max-md:mt-[128px]">
      <img src={image} alt="banner de categoria" />
      <div class="absolute text-white">
        <p>TECIDOS</p>
        <Breadcrumb
          itemListElement={[]}
        />
      </div>
    </div>
  );
}