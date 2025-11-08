export const handler = {
	GET() {
		return new Response("ok", {
			headers: {
				"cache-control": "no-store",
			},
		});
	},
};


