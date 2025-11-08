export { default } from "$store/components/product/ProductDetails.tsx";

export const LoadingFallback = () => (
	<div class="container py-5">
		<div class="grid grid-cols-1 sm:grid-cols-[50vw_25vw] gap-6 sm:justify-center">
			<div class="space-y-4">
				<div class="animate-pulse bg-[#e5e7eb] w-full h-[408px] rounded" />
				<div class="flex gap-2">
					{Array.from({ length: 4 }).map((_, i) => (
						<div class="animate-pulse bg-[#e5e7eb] w-[64px] h-[64px] rounded" key={i} />
					))}
				</div>
			</div>
			<div class="space-y-4 px-4 sm:pr-0 sm:pl-6">
				<div class="animate-pulse bg-[#e5e7eb] h-6 w-3/4 rounded" />
				<div class="animate-pulse bg-[#e5e7eb] h-4 w-1/2 rounded" />
				<div class="animate-pulse bg-[#e5e7eb] h-10 w-full rounded" />
				<div class="animate-pulse bg-[#e5e7eb] h-24 w-full rounded" />
			</div>
		</div>
	</div>
);
