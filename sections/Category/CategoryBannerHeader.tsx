export interface IBanner {
  url?: string;
  image?: string;
  imageMobile?: string;
}

export interface Props {
  banners?: IBanner[];
  title?: string;
  urlCurrent: string;
}

export default function CategoryBannerHeader(
  { title, banners, urlCurrent }: Props,
) {
  console.log("banners", banners);
  const bannerCurrent = banners?.find((item:IBanner) => item.url === urlCurrent);

  return (
    <>
    {bannerCurrent ?
      <div class="w-full max-w-[1236px] mx-auto mb-6 mt-9 max-md:px-3 relative flex items-center justify-center max-md:mt-[128px]">
      <img
        class="hidden max-md:block"
        src={bannerCurrent?.imageMobile}
        alt="banner de categoria"
      />
      <img class="hidden md:block" src={bannerCurrent?.image} />
      <div class="flex flex-col items-center absolute text-white">
        <p class="text-[28px] font-medium leading-[19px] text-white text-center mb-4">
          {title}
        </p>
        <a href="/">Home</a>
      </div>
    </div>
    :
    <></>}
    </>
    
  );
}
