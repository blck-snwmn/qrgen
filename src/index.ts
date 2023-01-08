import QRCode from "qrcode";

export interface Env {
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const { searchParams: q } = new URL(request.url)
		const svg = await QRCode.toString(q.get("text") ?? "hello world")
		return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
	},
};
