import { ReactNode } from "react";
import BookLine from "./book-line";
import AnimatedMenu from "./animated-menu";

const BookLayout = ({ children }: { children: ReactNode }) => {
	const topMargin = "sm:pt-20 pt-10";
	const rightMargin = "sm:pr-16 pr-2";

	return (
		<div className="h-screen w-full relative overflow-hidden">
			{/* header */}
			<div
				className={`absolute top-0 left-0 w-full h-[20%] flex flex-col justify-start ${topMargin} z-10`}
			>
				<BookLine variant="horizontal" />
				<BookLine variant="horizontal" />
				<BookLine variant="horizontal" />
			</div>

			{/* aside */}
			<div
				className={`absolute top-0 right-0 h-full flex flex-row justify-end ${rightMargin} z-20`}
			>
				<BookLine variant="vertical" />
				<BookLine variant="vertical" />
			</div>

			{/* menu */}
			<AnimatedMenu />

			<div className={`absolute left-0 w-full pb-8 z-30`}>{children}</div>
		</div>
	);
};

export default BookLayout;
