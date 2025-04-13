import React from "react";

type HighlightedTextProps = {
	text: string;
	highlightWords: string[];
	highlightClassName?: string;
};

const HighlightedText: React.FC<HighlightedTextProps> = ({
	text,
	highlightWords,
	highlightClassName = "text-yellow-500 font-semibold",
}) => {
	const regex = new RegExp(`\\b(${highlightWords.join("|")})\\b`, "gi");
	const parts = text.split(regex);

	return (
		<span className="sm:text-base text-xs font-ttcommons">
			{parts.map((part, index) =>
				highlightWords.includes(part) ? (
					<span key={index} className="text-brown font-ttcommons">
						{part}
					</span>
				) : (
					<span key={index}>{part}</span>
				)
			)}
		</span>
	);
};

export default HighlightedText;
