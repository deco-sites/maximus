export interface Props {
  currentPage: number;
  nextPage: string | undefined;
  previousPage: string | undefined;
  records?: number | undefined;
  recordPerPage?: number | undefined;
}

export default function InfoPagination({ pageInfo }: { pageInfo: Props }) {  

  return (
    <div class="w-full">
      {pageInfo.records && pageInfo.recordPerPage && (
        <p class="text-sm font-normal text-center mt-[25px]">
          Página {pageInfo.currentPage} de{" "}
          {Math.ceil(pageInfo.records / pageInfo.recordPerPage)}, exibindo{" "}
          {pageInfo.recordPerPage} produtos de um total de {pageInfo.records}.
        </p>
      )}
    </div>
  );
}
