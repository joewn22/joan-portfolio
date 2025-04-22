import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getLinkPreview } from "link-preview-js";

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const targetUrl = url.searchParams.get("url");

	if (!targetUrl) {
		return null;
	}

	try {
		const previewData = await getLinkPreview(targetUrl);
		return json(previewData);
	} catch (error) {
		return null;
	}
}
