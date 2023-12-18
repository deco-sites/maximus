import type { ProductListingPage } from "apps/commerce/types.ts";
import CategoryText from "$store/islands/CategoryTextHeader.tsx";

export interface IText {
  url?: string;
  text: string;
  collection?: boolean
}

export interface Props {
  page: ProductListingPage | null;
  texts?: IText[];
}

export default function CategoryTextHeader(
  { page, texts }: Props,
) {
  const { breadcrumb } = page;
  const { itemListElement, numberOfItems } = breadcrumb;

  const format = (str: string) => {
    if (!str) return;

    return str.toLowerCase().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "")
      .replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "");
  };

  /* text category */
  const urlCurrent = numberOfItems === 2
    ? `/${format(itemListElement[0]?.name)}/${format(itemListElement[1]?.name)}`
    : `/${format(itemListElement[0]?.name)}`;

  const seo = texts?.find((item: IText) => item.url === urlCurrent || item.collection);

  return (
    <>
      {seo
        ? (
          <div class="w-full max-w-[1236px] mx-auto my-4 max-md:px-3">
            <CategoryText text={seo.text} />
          </div>
        )
        : <></>}
    </>
  );
}
