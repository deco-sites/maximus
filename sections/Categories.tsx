import type { SectionProps } from "$live/mod.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { useId } from "$store/sdk/useId.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  page: ProductListingPage | null;
}

export async function loader(
  { page }: Props,
  _req: Request,
) {
 
  const data: any = await fetch(
    "https://tfcszo.myvtex.com/api/catalog_system/pub/category/tree/3",
  ).then(
    (r) => {
      if (r.ok) {        
        return r.clone().json();
      }
    },
  );

  return { page, data };
}

export default function Categories(
  { page, data }: SectionProps<typeof loader>,
) {
  const id = useId();

  const { breadcrumb } = page;
  const { itemListElement, numberOfItems } = breadcrumb;
  const nameCurrent = itemListElement[numberOfItems - 1]?.name;

  if(!nameCurrent) return

  let banners: any;
  const name1 = itemListElement[0]?.name;
  const name2 = itemListElement[1]?.name;

  if (numberOfItems == 2) {
    const n1 = data.find((item: any) => item.name == name1);
    banners = n1?.children?.find((item: any) => item.name == name2);
  } else {
    banners = data.find((item: any) => item.name == name1);
  }
  
  const format = (str: string) => {
    if (!str) return;

    return str.toLowerCase().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "")
      .replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "");
  };

  const listBanners = banners &&
    banners?.children?.map((banner: any, index: number) => {
      return (
        <Slider.Item
          index={index}
          class="flex flex-col gap-4 carousel-item w-[33.3%] md:w-[12.5%]"
        >
          <a
            href={banner.url}
            class="min-h-[145px] flex items-center justify-start flex-col"
          >
            <img
              loading="lazy"
              src={`/arquivos/${
                numberOfItems == 2
                  ? format(name1) + "-" + format(name2)
                  : format(nameCurrent)
              }-${format(banner.name)}.png`}
              alt="banner"
              class="w-[84px] h-[84px] relative overflow-hidden rounded-[50%] border-4 border-solid border-[#EBEBEB]"
            />

            <h5 class="text-center text-xs font-medium leading-[17px] tracking-[0px] text-[#585858] max-w-[80px] mt-2.5 mb-0 mx-auto">
              {banner.name}
            </h5>
          </a>
        </Slider.Item>
      );
    });
    

  return (
    <div id={id} class="w-full max-md:px-3 py-8">
      <div class="w-full max-w-[950px] mx-auto relative">
        <Slider class="flex justify-center items-center carousel carousel-end w-full">
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
