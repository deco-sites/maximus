export { default } from "$store/components/search/SearchResult.tsx";

export const LoadingFallback = () => (
	<div class="max-w-[1206px] mx-auto container px-4 sm:py-10">
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
			{Array.from({ length: 12 }).map((_, i) => (
				<div class="animate-pulse space-y-3" key={i}>
					<div class="bg-[#e5e7eb] h-[280px] w-full rounded" />
					<div class="bg-[#e5e7eb] h-4 w-3/4 rounded" />
					<div class="bg-[#e5e7eb] h-4 w-1/2 rounded" />
				</div>
			))}
		</div>
	</div>
);
