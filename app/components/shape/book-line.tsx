import { ReactNode } from "react";

const BookLine = ({
	variant,
	heading,
	isSub,
	hasSub,
}: {
	variant: "vertical" | "horizontal";
	heading?: ReactNode;
	isSub?: boolean;
	hasSub?: boolean;
}) => {
	return variant === "horizontal" ? (
		<div
			className={`flex flex-col ${isSub ? "space-y-1 mt-0" : "space-y-4 mb-4"}`}
		>
			<span
				className={`${
					isSub && hasSub ? "pl-48 -mt-3 text-green-800" : "pl-48"
				}`}
			>
				{heading}
			</span>
			<div className={`bg-lines h-px w-screen`} />
		</div>
	) : (
		<div className={`bg-lines h-screen w-px mx-2`} />
	);
};

export default BookLine;
