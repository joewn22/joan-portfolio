import { useState, useEffect, ReactNode } from "react";

const BookLine = ({
	variant,
	heading,
	hasSub,
	isSub,
}: {
	variant: "vertical" | "horizontal";
	heading?: ReactNode;
	hasSub?: boolean;
	isSub?: boolean;
}) => {
	return variant === "horizontal" ? (
		<div
			className={`flex flex-col space-y-${isSub ? "0" : "2"} mb-${
				hasSub ? "0" : "4"
			}`}
		>
			<div className="pl-52">{heading}</div>
			<div className={`bg-lines h-px w-screen`} />
		</div>
	) : (
		<div className={`bg-lines h-screen w-px mx-2`} />
	);
};

export default BookLine;
