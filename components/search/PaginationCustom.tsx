import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  pageInfo: {
    currentPage: number;
    nextPage: string | undefined;
    previousPage: string | undefined;
    records?: number | undefined;
    recordPerPage?: number | undefined;
  };
}

export const VTEX_PAGE_LIMIT = 50;

export default function PaginationCustom(
  { pageInfo }: Props,
) {
  if (!pageInfo.records || !pageInfo.recordPerPage) return;

  const pageFormated = pageInfo.nextPage
    ? pageInfo.nextPage.split("page=")[0]
    : "?";

  let links = [];
  const totalPages = Math.min(
    Math.ceil(pageInfo.records / pageInfo.recordPerPage),
    VTEX_PAGE_LIMIT,
  );

  for (let i = 1; i <= totalPages; i++) {
    if (
      (i < 5 && pageInfo.currentPage < 4) ||
      (i > pageInfo.currentPage - 3 && i < pageInfo.currentPage + 2)
    ) {
      links.push({
        "label": i,
        "href": `${pageFormated}page=${i}`,
      });
    }
  }

  if (pageInfo.currentPage === VTEX_PAGE_LIMIT) {
    const page = pageInfo.currentPage - 3;
    links = [{ label: page, href: `${pageFormated}page=${page}` }, ...links];
  }

  return (
    <div class="flex justify-center my-4">
      <div class="flex items-center">
        <a
          aria-label="previous page link"
          rel="prev"
          href={pageInfo.previousPage ?? "#"}
          class={`mr-1 ${
            pageInfo.currentPage === 1 ? "hidden" : "flex"
          } items-center justify-center text-neutral-800 w-8 h-8 hover:bg-white rounded-[5px] border border-solid border-[#EAEAEA] hover:border-black`}
        >
          <Icon id="ChevronLeft" size={20} strokeWidth={1} />
        </a>
        <div class="flex items-center">
          {links?.map((item) => (
            <a
              class={`${
                pageInfo.currentPage === item.label
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-800 border-[#EAEAEA] hover:border-black"
              } flex w-8 h-8 border justify-center items-center mx-[5px] my-0 rounded-[5px] border-solid text-sm font-normal leading-6`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        {pageInfo.nextPage && pageInfo.currentPage !== VTEX_PAGE_LIMIT
          ? (
            <a
              aria-label="next page link"
              rel="next"
              href={pageInfo.nextPage}
              class="ml-1 flex items-center justify-center text-neutral-800 w-8 h-8 hover:bg-white rounded-[5px] border border-solid border-[#EAEAEA] hover:border-black"
            >
              <Icon id="ChevronRight" size={20} strokeWidth={1} />
            </a>
          )
          : null}
      </div>
    </div>
  );
}
