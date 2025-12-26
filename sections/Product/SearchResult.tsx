export function LoadingFallback() {
  return (
    <div class="w-full flex justify-center items-center py-40 sm:py-80">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  );
}

export { default } from "$store/components/search/SearchResult.tsx";
