import { VTEX_PAGE_LIMIT } from "./PaginationCustom.tsx";

export interface Props {
  currentPage: number;
  nextPage: string | undefined;
  previousPage: string | undefined;
  records?: number | undefined;
  recordPerPage?: number | undefined;
}

export default function InfoPagination({ pageInfo }: { pageInfo: Props }) {
  const records = Math.min(
    pageInfo.records,
    VTEX_PAGE_LIMIT * pageInfo.recordPerPage,
  );
  const pages = Math.ceil(records / pageInfo.recordPerPage);
  const productsPage = pages > pageInfo.currentPage
    ? 24
    : records - (pageInfo.recordPerPage * (pageInfo.currentPage - 1));
  return (
    <div class="w-full">
      {pageInfo.records && pageInfo.recordPerPage && (
        <p class="text-sm font-normal text-center mt-[25px]">
          Página {pageInfo.currentPage} de {pages}, exibindo {productsPage}{" "}
          produto{(productsPage > 1) ? "s" : ""} de um total de {records}.
        </p>
      )}
    </div>
  );
}
