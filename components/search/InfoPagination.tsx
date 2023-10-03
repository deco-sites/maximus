export interface Props {
    currentPage: number;
    nextPage: string | undefined;
    previousPage: string | undefined;
    records?: number | undefined;
    recordPerPage?: number | undefined;
  }

export default function InfoPagination({ pageInfo }: { pageInfo: Props },) {
console.log("pageInfo",pageInfo);


  return (
    <div class="w-full flex justify-center bg-white border-t border-b border-[#ebebeb]">
      infoss
    </div>
  );
}
