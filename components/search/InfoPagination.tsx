export interface Props {
  currentPage: number;
  nextPage: string | undefined;
  previousPage: string | undefined;
  records?: number | undefined;
  recordPerPage?: number | undefined;
}

export default function InfoPagination({ pageInfo }: { pageInfo: Props }) {
  console.log('pageInfo',pageInfo)
  const pages = Math.ceil(pageInfo.records / pageInfo.recordPerPage)
  const productsPage = pages > pageInfo.currentPage ? 24 : pageInfo.records - (pageInfo.recordPerPage * (pageInfo.currentPage-1)) 
  return (
    <div class="w-full">
      {pageInfo.records && pageInfo.recordPerPage && (
        <p class="text-sm font-normal text-center mt-[25px]">
          Página {pageInfo.currentPage} de{" "}
          {pages}, exibindo{" "}
          {productsPage} produto{(productsPage > 1) ? 's' :''} de um total de {pageInfo.records}.
        </p>
      )}
    </div>
  );
}
