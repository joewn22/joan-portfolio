import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import LinkPreview from "../link/dynamic-link-preview";

interface DynamicTextProps {
	text: string;
	className?: string;
	lineSpacing?: "small" | "medium" | "large";
}

const DynamicText: React.FC<DynamicTextProps> = ({
	text,
	className = "",
	lineSpacing = "medium",
}) => {
	const parts = text.split("<br/>");

	const spacingClasses = {
		small: "space-y-2",
		medium: "space-y-4",
		large: "space-y-6",
	};

	const renderFormattedText = (text: string) => {
		const parts = text.split(
			/(<i>[\s\S]*?<\/i>|<b>[\s\S]*?<\/b>|<a href="[\s\S]*?">[\s\S]*?<\/a>|<ul>[\s\S]*?<\/ul>|<ol>[\s\S]*?<\/ol>)/
		);
		return parts.map((part, index) => {
			if (part.startsWith("<i>") && part.endsWith("</i>")) {
				return <i key={index}>{renderFormattedText(part.slice(3, -4))}</i>;
			} else if (part.startsWith("<b>") && part.endsWith("</b>")) {
				return (
					<strong className="font-medium" key={index}>
						{renderFormattedText(part.slice(3, -4))}
					</strong>
				);
			} else if (part.startsWith('<a href="') && part.endsWith("</a>")) {
				const hrefMatch = part.match(/href="(.*?)"/);
				const linkText = part.match(/>(.+?)</);
				if (hrefMatch && linkText) {
					return (
						<span key={index}>
							<LinkPreview
								href={hrefMatch[1]}
								children={renderFormattedText(linkText[1])}
							/>
							{/* <span>
								<ArrowUpRight className="bg-red-800 w-4 h-4" />
							</span> */}
						</span>
					);
				}
			} else if (part.startsWith("<ul>") && part.endsWith("</ul>")) {
				const items = part.slice(4, -5).split("<li>").filter(Boolean);
				return (
					<ul key={index} className="list-disc list-outside ml-2">
						{items.map((item, i) => (
							<li key={i}>{renderFormattedText(item.replace("</li>", ""))}</li>
						))}
					</ul>
				);
			} else if (part.startsWith("<ol>") && part.endsWith("</ol>")) {
				const items = part.slice(4, -5).split("<li>").filter(Boolean);
				return (
					<ol key={index} className="list-decimal list-outside ml-2">
						{items.map((item, i) => (
							<li key={i}>{renderFormattedText(item.replace("</li>", ""))}</li>
						))}
					</ol>
				);
			}
			return part;
		});
	};

	return (
		<div className={`${className} ${spacingClasses[lineSpacing]}`}>
			{parts.map((part, index) => (
				<p className="sm:text-lg text-sm font-light font-ttcommons" key={index}>
					{renderFormattedText(part)}
				</p>
			))}
		</div>
	);
};

export default DynamicText;
