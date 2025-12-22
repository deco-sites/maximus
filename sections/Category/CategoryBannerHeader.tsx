import type { ProductListingPage } from "apps/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface IBanner {
  url?: string;
  image?: LiveImage;
  imageMobile?: LiveImage;
}

export interface Props {
  page: ProductListingPage | null;
  banners?: IBanner[];
}

export function LoadingFallback() {
  return (
    <div class="w-full max-w-[1236px] mx-auto min-h-[200px] bg-[#171413] mb-6 mt-9 relative flex items-center justify-center max-md:mt-[128px]">
      <div class="flex flex-col items-center gap-4">
        <div class="skeleton h-7 w-48 max-md:w-32"></div>
        <div class="skeleton h-4 w-12"></div>
      </div>
    </div>
  );
}

export default function CategoryBannerHeader(
  { page, banners }: Props,
) {
  if(!page) return null;
  const { breadcrumb } = page;
  const { itemListElement, numberOfItems } = breadcrumb;

  /* title */
  const title = itemListElement[numberOfItems - 1]?.name;

  const format = (str: string | undefined) => {
    if (!str) return "";

    return str.toLowerCase().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "")
      .replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "");
  };

  /* banner category */
  const urlCurrent = numberOfItems === 3
    ? `/${format(itemListElement[0]?.name)}/${
      format(itemListElement[1]?.name)
    }/${format(itemListElement[2]?.name)}`
    : numberOfItems === 2
    ? `/${format(itemListElement[0]?.name)}/${format(itemListElement[1]?.name)}`
    : `/${format(itemListElement[0]?.name)}`;

  const bannerCurrent = banners?.find((item: IBanner) =>
    item.url === urlCurrent
  );

  if (!title) return null;

  return (
    <div class="w-full max-w-[1236px] mx-auto min-h-[200px] bg-[#171413] mb-6 mt-9 relative flex items-center justify-center max-md:mt-[128px]">
      {bannerCurrent
        ? (
          <>
            <img
              class="hidden max-md:block"
              src={bannerCurrent?.imageMobile}
              alt="banner de categoria"
            />
            <img class="hidden md:block" src={bannerCurrent?.image} />
          </>
        )
        : null}
      <div class="flex flex-col items-center absolute text-white">
        <p class="text-[28px] font-medium leading-[19px] text-white text-center mb-4 max-md:leading-8 max-md:px-[15px] max-md:py-0">
          {title}
        </p>
        <a class="text-xs font-normal leading-6 underline" href="/">Home</a>
      </div>
    </div>
  );
}
