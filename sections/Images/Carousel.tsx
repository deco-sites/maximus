export { default } from "$store/components/ui/BannerCarousel.tsx";

export const LoadingFallback = () => (
	<div class="max-w-[1246px] mr-auto ml-auto grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]">
		<div class="col-span-full row-span-full">
			<div class="animate-pulse bg-[#e5e7eb] w-full h-[229px] sm:h-[454px] rounded"></div>
		</div>
	</div>
);
