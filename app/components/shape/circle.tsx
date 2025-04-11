import { ReactNode } from "react";

const Circle = ({
	children,
	color,
	width,
	height,
}: {
	children?: ReactNode;
	color: string;
	width: number;
	height: number;
}) => {
	return (
		<div
			className={`flex w-${width} h-${height} rounded-full bg-${color} items-center justify-center`}
		>
			{children}
		</div>
	);
};

export default Circle;
