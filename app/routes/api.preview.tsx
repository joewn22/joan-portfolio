import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getLinkPreview } from "link-preview-js";

export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const targetUrl = url.searchParams.get("url");

	if (!targetUrl) {
		return json({ error: "URL parameter is required" }, { status: 400 });
	}

	try {
		const previewData = await getLinkPreview(targetUrl);
		console.log("previewData: ", previewData);
		return json(previewData);
	} catch (error) {
		console.error("Error fetching link preview:", error);
		return json({ error: "Failed to fetch link preview" }, { status: 500 });
	}
}
