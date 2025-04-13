import { ReactNode, useState } from "react";
import BookLine from "../shape/book-line";
import AnimatedMenu from "../animated/animated-menu";
import H1 from "../text/H1";
import H3 from "../text/H3";
import { Menu01Icon } from "hugeicons-react";
import { motion } from "framer-motion";
import BurgerMenu from "../sheet/burger-menu";

const MainLayout = ({
	children,
	heading,
	subHeading,
}: {
	children: ReactNode;
	heading?: string;
	subHeading?: string;
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const topMargin = "sm:pt-20 pt-4";
	const rightMargin = "sm:pr-16 pr-2";

	return (
		<div className="h-screen w-full relative overflow-hidden bg-main">
			<div
				className={`absolute top-0 left-0 w-full h-[20%] flex flex-col justify-start ${topMargin} z-10 sm:block hidden`}
			>
				<BookLine variant="horizontal" heading={<H1 label={heading ?? ""} />} />
				{!!subHeading && (
					<BookLine
						variant="horizontal"
						heading={<H3 label={subHeading ?? ""} />}
						isSub
					/>
				)}
			</div>
			<div className="sm:hidden flex flex-row items-center w-full justify-between h-[15%] px-2">
				<div className="flex-col space-y-2">
					<H1 label={heading ?? ""} />
				</div>

				<motion.div
					className="h-12 w-12 rounded-full flex justify-center items-center text-white bg-gold cursor-pointer"
					whileHover={{
						scale: 1.1,
						boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
					}}
					whileTap={{ scale: 0.95 }}
					transition={{
						type: "spring",
						stiffness: 400,
						damping: 15,
					}}
					onClick={() => setOpen(!open)}
				>
					<motion.div
						whileHover={{ rotate: 180 }}
						transition={{ duration: 0.4 }}
					>
						<Menu01Icon />
					</motion.div>
				</motion.div>
			</div>

			<div
				className={`absolute top-0 right-0 h-full flex flex-row justify-end ${rightMargin} z-20 sm:block hidden`}
			>
				<BookLine variant="vertical" />
			</div>

			<AnimatedMenu />

			<div className={`absolute left-0 w-full pb-8 sm:z-30`}>{children}</div>

			<BurgerMenu open={open} setOpen={() => setOpen(!open)} />
		</div>
	);
};

export default MainLayout;
