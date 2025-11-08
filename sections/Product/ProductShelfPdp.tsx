export { default } from "$store/components/product/ProductShelfPdp.tsx";

export const LoadingFallback = () => (
	<div class="w-full max-w-[1246px] mr-auto ml-auto container py-8 lg:py-10">
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
			{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
				<div class="animate-pulse space-y-3" key={i}>
					<div class="bg-[#e5e7eb] h-[234px] w-full rounded"></div>
					<div class="bg-[#e5e7eb] h-4 w-3/4 rounded"></div>
					<div class="bg-[#e5e7eb] h-4 w-1/2 rounded"></div>
				</div>
			))}
		</div>
	</div>
);
