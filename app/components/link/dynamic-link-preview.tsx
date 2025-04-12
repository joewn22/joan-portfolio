import React, { useState, useRef, useEffect } from "react";
import { Glimpse } from "react-glimpse/client";
import { useFetcher } from "@remix-run/react";
import { ArrowUpRight01Icon } from "hugeicons-react";

interface LinkPreviewProps {
	href: string;
	children: React.ReactNode;
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
	// Main state
	const [isVisible, setIsVisible] = useState(false);
	const [requested, setRequested] = useState(false);
	const fetcher = useFetcher<LinkPreviewData>();

	// Refs
	const containerRef = useRef<HTMLSpanElement>(null);
	const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
	const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

	// Track mouse position to prevent flickering
	const [mouseInside, setMouseInside] = useState(false);

	// Handle mouse entering the container
	const handleMouseEnter = () => {
		setMouseInside(true);

		// Clear any pending hide timer
		if (hideTimerRef.current) {
			clearTimeout(hideTimerRef.current);
			hideTimerRef.current = null;
		}

		// Set timer to show preview after a short delay
		if (!isVisible) {
			hoverTimerRef.current = setTimeout(() => {
				setIsVisible(true);

				// Fetch data if not already requested
				if (!requested && !fetcher.data) {
					setRequested(true);
					fetcher.load(`/api/preview?url=${encodeURIComponent(href)}`);
				}
			}, 300);
		}
	};

	// Handle mouse leaving the container
	const handleMouseLeave = () => {
		setMouseInside(false);

		// Clear any pending show timer
		if (hoverTimerRef.current) {
			clearTimeout(hoverTimerRef.current);
			hoverTimerRef.current = null;
		}

		// Set timer to hide preview after a delay
		hideTimerRef.current = setTimeout(() => {
			setIsVisible(false);
		}, 400);
	};

	// Clean up timers on unmount
	useEffect(() => {
		return () => {
			if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
			if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
		};
	}, []);

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

	return (
		<span
			ref={containerRef}
			className={`inline-flex relative ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<a
				href={href}
				target="_blank"
				className="text-forest underline font-medium"
			>
				{children}
			</a>

			{isVisible && (
				<div
					className="absolute z-50 left-0 top-full mt-1 transition-opacity duration-300"
					style={{
						opacity: mouseInside || fetcher.state === "loading" ? 1 : 0.98,
					}}
					onMouseEnter={() => setMouseInside(true)}
					onMouseLeave={() => setMouseInside(false)}
				>
					<div className="bg-main p-4 rounded shadow-lg w-64">
						{fetcher.state === "loading" ? (
							<div className="flex items-center justify-center h-24">
								<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-forest"></div>
							</div>
						) : previewData ? (
							<>
								<img
									className="m-0 h-[174px] w-full rounded-sm object-cover"
									src={previewData.image}
									width={316}
									height={174}
									alt=""
								/>
								<p
									className={`text-md mt-2 block font-medium leading-normal text-forest ${
										previewData.description ? "line-clamp-1" : "line-clamp-3"
									}`}
								>
									{previewData.title}
								</p>
								<p className="line-clamp-2 block text-sm leading-normal text-forest">
									{previewData.description}
								</p>
								<span className="flex items-center gap-1">
									<p className="line-clamp-1 block text-sm leading-normal text-forest">
										{previewData.url}
									</p>
									<ArrowUpRight01Icon
										width={12}
										height={12}
										className="text-forest"
									/>
								</span>
							</>
						) : (
							<p className="text-sm text-gray-500">No preview available</p>
						)}
					</div>
				</div>
			)}
		</span>
	);
}
