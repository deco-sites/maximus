import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import { Layout as cardLayout } from "$store/components/product/ProductCard.tsx";
import Filters from "$store/components/search/Filters.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";

import InfoPagination from "$store/components/search/InfoPagination.tsx";
//import Paginations from "$store/islands/PaginationCustom.tsx";
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

export interface Props {
  page: ProductListingPage | null;
  layout?: Layout;
  cardLayout?: cardLayout;
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
  const { itemListElement, numberOfItems } = breadcrumb;

  const title = itemListElement[numberOfItems - 1]?.name;

  return (
    <>
      <div
        class={`max-w-[1206px] mx-auto container px-4 sm:py-10 border-t-[#EBEBEB] ${
          breadcrumb.numberOfItems > 0 ? "border-t" : "border-0"
        } ${title ? "mt-6" : "mt-32"}`}
      >
        {title
          ? (
            <h3 class="hidden max-md:block text-2xl font-semibold leading-[29px] text-center text-[#333333] mb-4 mt-8">
              {title}
            </h3>
          )
          : ""}
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
              {title
                ? (
                  <h1 class="hidden md:block text-2xl font-semibold leading-[29px] text-center text-[#333333] mb-4">
                    {title}
                  </h1>
                )
                : ""}
              <div class="hidden md:flex items-center justify-between">
                {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}

                
              </div>
            </div>
            <ProductGallery products={products} layout={cardLayout} />

            
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

function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return (
    <>
      <Result {...props} page={page} />
    </>
  );
}

export default SearchResult;
