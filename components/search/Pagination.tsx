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
        <span class="btn btn-ghost join-item">
          Page {pageInfo.currentPage + 1}
        </span>
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
