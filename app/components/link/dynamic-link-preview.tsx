import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import { Loader2 } from "lucide-react";
import { Projects } from "~/lib/type";

interface LinkPreviewProps {
	proj: Projects;
}

interface LinkPreviewData {
	url?: string;
	title?: string;
	siteName?: string;
	description?: string;
	images?: string[];
	favicons?: string[];
	error?: string;
}

interface GlimpseData {
	url: string;
	title: string;
	description: string;
	image: string;
}

export default function LinkPreview({ proj }: LinkPreviewProps) {
	const fetcher = useFetcher<LinkPreviewData>();

	// Prepare data for Glimpse
	const previewData: GlimpseData | null =
		fetcher.data && !fetcher.data.error
			? {
					url: proj.urls.ios ?? "",
					title: fetcher.data.title || fetcher.data.siteName || "",
					description: fetcher.data.description || "",
					image: fetcher.data.images?.[0] || fetcher.data.favicons?.[0] || "",
			  }
			: null;

	useEffect(() => {
		if (proj?.type !== "web" && proj?.urls?.ios) {
			fetcher.load(`/api/preview?url=${encodeURIComponent(proj?.urls?.ios)}`);
		}
	}, [proj]);

	return (
		<div className="w-full">
			{fetcher.state === "loading" && !previewData && (
				<div className="flex w-full h-20 justify-center items-center">
					<Loader2 className="animate-spin text-gold" />
				</div>
			)}
			{fetcher.state !== "loading" && previewData ? (
				<img
					className="object-cover m-0 w-full h-[12rem]"
					src={previewData.image}
					alt={proj.heading}
				/>
			) : (
				<img
					className="object-cover m-0 w-full h-[12rem]"
					src={proj.imageUrl}
					alt={proj.heading}
				/>
			)}
		</div>
	);
}
