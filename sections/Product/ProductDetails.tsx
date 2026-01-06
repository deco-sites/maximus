export { default } from "$store/components/product/ProductDetails.tsx";

export function LoadingFallback() {
  return (
    <div class="w-full flex justify-center items-center py-40 sm:py-96">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  );
}
