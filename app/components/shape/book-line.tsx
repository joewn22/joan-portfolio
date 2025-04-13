import { ReactNode } from "react";

const BookLine = ({
	variant,
	heading,
	isSub,
}: {
	variant: "vertical" | "horizontal";
	heading?: ReactNode;
	isSub?: boolean;
}) => {
	const style = isSub && heading ? `space-y-1 -mt-3 mb-3` : `space-y-4 mb-4`;

	return variant === "horizontal" ? (
		<div className={`flex flex-col ${style}`}>
			<span className="sm:pl-[13rem] pl-3">{heading}</span>
			<div className={`bg-lines h-px w-screen`} />
		</div>
	) : (
		<div className={`bg-lines h-screen w-px mx-2`} />
	);
};

export default BookLine;
