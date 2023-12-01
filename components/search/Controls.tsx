import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "apps/commerce/types.ts";

export type Props =
  & Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">
  & {
    displayFilter?: boolean;
  };

function SearchControls(
  { filters, breadcrumb, displayFilter, sortOptions }: Props,
) {
  const open = useSignal(false);

  return (
    <Drawer
      loading="lazy"
      open={open.value}
      onClose={() => open.value = false}
      aside={
        <>
          <div class="bg-base-100 flex flex-col h-full divide-y overflow-y-hidden">
            <div class="flex justify-between items-center">
              <div class="px-4 py-3">
                <span class="font-medium text-2xl">Filtrar</span>
              </div>
              <Button class="btn btn-ghost" onClick={() => open.value = false}>
                <Icon id="XMark" size={24} strokeWidth={2} />
              </Button>
            </div>
            <div class="flex-grow overflow-auto">
              <Filters filters={filters} />
            </div>
          </div>
        </>
      }
    >
      <div class="hidden max-md:flex flex-col justify-between md:mb-4 py-4 sm:mb-0 sm:p-0 sm:gap-4 sm:flex-row sm:h-[53px]">
        <div class="hidden flex-row items-center sm:p-0 mb-2">
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
        </div>

        <div class="flex flex-row items-center justify-between sm:gap-4">
          <Button
            class={displayFilter
              ? "w-[145px] bg-black rounded-sm border-0 text-white font-normal"
              : "w-[145px] sm:hidden bg-black rounded-sm border-0 text-white font-normal"}
            onClick={() => {
              open.value = true;
            }}
          >
            <Icon id="FilterList" width={16} height={16} />
            Filtros
          </Button>
          {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
        </div>
      </div>
    </Drawer>
  );
}

export default SearchControls;
