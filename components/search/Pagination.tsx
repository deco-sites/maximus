import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  currentPage: number;
  nextPage: string | undefined;
  previousPage: string | undefined;
  records?: number | undefined;
  recordPerPage?: number | undefined;
}

export default function CategoryBannerHeader(
  { pageInfo }: { pageInfo: Props },
) {
  if (!pageInfo.records || !pageInfo.recordPerPage) return;
  const href = window.location.href; 

  const pageFormated = href.indexOf("?") != -1 ? "&page=" : "?page=";

  let newUrl = "";

  if (href.indexOf("page=") != -1) {
    const beforeUrl = window.location.href.split("page=")[0];
    newUrl = beforeUrl + pageFormated;
  } else {
    newUrl = href + pageFormated;
  }

  const links = [];
  const totalPages = Math.ceil(pageInfo.records / pageInfo.recordPerPage);

  for (let i = 1; i <= totalPages; i++) {
    links.push({
      "label": i,
      "href": `${newUrl}${i}`,
    });
  }

  return (
    <div class="flex justify-center my-4">
      <div class="join">
        <a
          aria-label="previous page link"
          rel="prev"
          href={pageInfo.previousPage ?? "#"}
          class="btn btn-ghost join-item"
        >
          <Icon id="ChevronLeft" size={24} strokeWidth={2} />
        </a>
        <div class="flex items-center">
          {links?.map((item) => (
            <a
              class={`${
                item.label < 5 ? "flex" : "hidden"
              } w-8 h-8 bg-white border justify-center items-center mx-[5px] my-0 rounded-[5px] border-solid border-[#EAEAEA] text-sm font-normal leading-6 text-neutral-800`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          aria-label="next page link"
          rel="next"
          href={pageInfo.nextPage ?? "#"}
          class="btn btn-ghost join-item"
        >
          <Icon id="ChevronRight" size={24} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
