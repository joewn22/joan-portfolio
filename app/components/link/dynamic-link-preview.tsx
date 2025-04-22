import React, { useState, useRef, useEffect } from "react";
import { Glimpse } from "react-glimpse/client";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { ArrowUpRight01Icon } from "hugeicons-react";
import { loader } from "~/routes/api.preview";

interface LinkPreviewProps {
	href: string;
	children?: React.ReactNode;
	className?: string;
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

export default function LinkPreview({
	href,
	children,
	className = "",
}: LinkPreviewProps) {
	const fetcher = useFetcher<LinkPreviewData>();

	// Prepare data for Glimpse
	const previewData: GlimpseData | null =
		fetcher.data && !fetcher.data.error
			? {
					url: href,
					title: fetcher.data.title || fetcher.data.siteName || "",
					description: fetcher.data.description || "",
					image: fetcher.data.images?.[0] || fetcher.data.favicons?.[0] || "",
			  }
			: null;

	useEffect(() => {
		if (href.length > 0) {
			fetcher.load(`/api/preview?url=${encodeURIComponent(href)}`);
		}
	}, [href]);

	return (
		<div className="w-full font-ttcommons">
			{previewData && (
				<>
					<img
						className="m-0 sm:h-[174px] h-20 w-full rounded-sm object-cover"
						src={previewData.image}
						alt=""
					/>
				</>
			)}
		</div>
	);
}
