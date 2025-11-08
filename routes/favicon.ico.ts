export const handler = {
	async GET() {
		const fileUrl = new URL("../static/favicon-32x32.png", import.meta.url);
		const bytes = await Deno.readFile(fileUrl);
		return new Response(bytes, {
			status: 200,
			headers: {
				"content-type": "image/png",
				"cache-control": "public, max-age=86400, immutable",
			},
		});
	},
};


