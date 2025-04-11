import { ReactNode } from "react";
import BookLine from "../shape/book-line";
import AnimatedMenu from "../animated/animated-menu";
import H1 from "../text/H1";
import H3 from "../text/H3";

const MainLayout = ({
	children,
	heading,
	subHeading,
}: {
	children: ReactNode;
	heading?: string;
	subHeading?: string;
}) => {
	const topMargin = "sm:pt-20 pt-10";
	const rightMargin = "sm:pr-16 pr-2";

	return (
		<div className="h-screen w-full relative overflow-hidden bg-main">
			{/* header */}
			<div
				className={`absolute top-0 left-0 w-full h-[20%] flex flex-col justify-start ${topMargin} z-10`}
			>
				<BookLine
					variant="horizontal"
					heading={<H1 label={heading ?? ""} />}
					hasSub
				/>
				<BookLine
					variant="horizontal"
					heading={<H3 label={subHeading ?? ""} />}
					isSub
				/>
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

export default MainLayout;
