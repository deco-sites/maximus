import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import { Layout as cardLayout } from "$store/components/product/ProductCard.tsx";
import Filters from "$store/components/search/Filters.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SearchControls from "$store/islands/SearchControls.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";

import InfoPagination from "$store/components/search/InfoPagination.tsx";
import Paginations from "$store/islands/PaginationCustom.tsx";

import BannerTitle from "$store/sections/Category/CategoryBannerHeader.tsx";
import TextSeo from "$store/sections/Category/CategoryTextHeader.tsx";
import Categories from "$store/sections/Category/CategoryBannersSlider.tsx";

import Sort from "$store/components/search/Sort.tsx";

export interface Layout {
  /**
   * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
   */
  variant?: "aside" | "drawer";
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
}

export interface IBanner {
  url?: string;
  image?: LiveImage;
  imageMobile?: LiveImage;
}

export interface IText {
  url?: string;
  /** @format textarea */
  text?: string;
}

export interface Props {
  page: ProductListingPage | null;
  layout?: Layout;
  cardLayout?: cardLayout;
  banners?: IBanner[];
  texts?: IText[];
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Result({
  page,
  layout,
  cardLayout,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  return (
    <>
      <div
        class={`max-w-[1206px] mx-auto container px-4 sm:py-10 mt-6 border-t-[#EBEBEB] ${
          breadcrumb.numberOfItems > 0 ? "border-t" : "border-0"
        }`}
      >
        <h3 class="hidden">{breadcrumb.itemListElement[0]?.name}</h3>
        <h1 class="hidden max-md:block text-2xl font-semibold leading-[29px] text-center text-[#333333] mb-4 mt-8">
          TECIDOS
        </h1>
        <SearchControls
          sortOptions={sortOptions}
          filters={filters}
          breadcrumb={breadcrumb}
          displayFilter={layout?.variant === "drawer"}
        />

        <div class="flex flex-row">
          {layout?.variant === "aside" && filters.length > 0 && (
            <aside class="hidden sm:block w-min min-w-[250px]">
              <h3 class="text-[22px] font-medium leading-[19px] text-neutral-800 mb-[35px]">
                Filtros
              </h3>
              <Filters filters={filters} />
            </aside>
          )}
          <div class="flex-grow">
            <div class="ml-0 md:ml-10 py-3">
              <h1 class="hidden md:block text-2xl font-semibold leading-[29px] text-center text-[#333333] mb-4">
                TECIDOS
              </h1>
              <div class="hidden md:flex items-center justify-between">
                {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}

                <Paginations pageInfo={pageInfo} />
              </div>
            </div>
            <ProductGallery products={products} layout={cardLayout} />

            <Paginations pageInfo={pageInfo} />
            <InfoPagination pageInfo={pageInfo} />
          </div>
        </div>
      </div>
      <SendEventOnLoad
        event={{
          name: "view_item_list",
          params: {
            // TODO: get category name from search or cms setting
            item_list_name: "",
            item_list_id: "",
            items: page.products?.map((product) =>
              mapProductToAnalyticsItem({
                ...(useOffer(product.offers)),
                product,
                breadcrumbList: page.breadcrumb,
              })
            ),
          },
        }}
      />
    </>
  );
}

function SearchResult({ page, banners, texts, ...props }: Props) {
  const { breadcrumb } = page;
  const { itemListElement, numberOfItems } = breadcrumb;
  console.log("pageInfo>><>", itemListElement);
  console.log("tamanho>><>", numberOfItems);
  console.log("TITLE>><>", itemListElement[0]?.name);
  console.log("image>><>", banners);

  const format = (str: string) => {
    if (!str) return;

    return str.toLowerCase().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "")
      .replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "");
  };

  const urlCurrent = numberOfItems === 2
    ? `/${format(itemListElement[0]?.name)}/${format(itemListElement[1]?.name)}`
    : `/${format(itemListElement[0]?.name)}`;

  console.log("urlCurrent", urlCurrent);

  if (!page) {
    return <NotFound />;
  }

  return (
    <>
      {numberOfItems
        ? (
          <div>
            <BannerTitle
              banners={banners}
              urlCurrent={urlCurrent}
              title={itemListElement[0]?.name}
            />
            <TextSeo
              urlCurrent={urlCurrent}
              texts={texts}
            />
            <Categories />
          </div>
        )
        : null}

      <Result {...props} page={page} />
    </>
  );
}

export default SearchResult;
