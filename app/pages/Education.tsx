import { useState } from "react";
import { motion } from "framer-motion";
import ChildContainer from "~/components/layout/child-container";
import PDFViewerSheet from "~/components/sheet/pdf-viewer-sheet";
import { PDF } from "~/lib/type";
import {
	bottomRightImageVariant,
	circleVariants,
	containerVariants,
	highlightVariants,
	itemVariants,
} from "~/lib/animated-variants";

const Education = () => {
	const [currentPdf, setCurrentPdf] = useState<PDF | null>();

	return (
		<ChildContainer>
			<motion.div
				className="flex flex-col sm:w-[75%] w-[95%] space-y-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.p
					className="text-black sm:text-lg text-sm font-light sm:w-[60%] font-ttcommons"
					variants={itemVariants}
				>
					My journey into tech began in my first year of university, where I
					went from scoring a{" "}
					<motion.span
						className="font-medium font-ttcommons"
						variants={highlightVariants}
						whileHover="hover"
					>
						humble 43%
					</motion.span>{" "}
					on my very first code challenge to topping the class with a standout{" "}
					<motion.span
						className="font-medium font-ttcommons"
						variants={highlightVariants}
						whileHover="hover"
					>
						83% in my Development Software 1B module
					</motion.span>
					.
				</motion.p>

				<motion.div className="flex flex-col" variants={itemVariants}>
					<p className="text-black sm:text-lg text-sm font-light w-[70%] font-ttcommons">
						I realized two things:
					</p>
					<div className="flex flex-row space-x-20 w-full">
						<motion.div
							className="flex flex-row items-center space-x-2"
							whileHover={{ x: 5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<motion.div
								className="flex justify-center items-center w-8 h-8 bg-forest text-white rounded-full"
								variants={circleVariants}
								whileHover="hover"
							>
								<p className="font-ttcommons">1</p>
							</motion.div>
							<p className="text-black font-ttcommons sm:text-lg text-sm">
								{" "}
								I'm pretty good at this
							</p>
						</motion.div>

						<motion.div
							className="flex flex-row items-center space-x-2"
							whileHover={{ x: 5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<motion.div
								className="flex justify-center items-center w-8 h-8 bg-forest text-white rounded-full"
								variants={circleVariants}
								whileHover="hover"
							>
								<p className="font-ttcommons">2</p>
							</motion.div>
							<p className="text-black font-ttcommons sm:text-lg text-sm">
								When I'm determined, I'm an unstoppable force.
							</p>
						</motion.div>
					</div>
				</motion.div>

				<motion.p
					className="text-black sm:text-lg text-sm font-light sm:w-[70%] font-ttcommons"
					variants={itemVariants}
				>
					That drive led me to be recognized as the{" "}
					<motion.span
						className="font-medium underline text-forest cursor-pointer font-ttcommons"
						onClick={() =>
							setCurrentPdf({
								title: "Top Computer Programming Talent of 2019",
								href: "/assets/tpt.pdf",
							})
						}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{" "}
						Top Computer Programming Talent of 2019 at the University of
						Johannesburg.
					</motion.span>{" "}
					on As part of this achievement, I had the incredible opportunity to
					represent my university at the
					<motion.span
						className="font-medium underline text-forest cursor-pointer font-ttcommons"
						onClick={() =>
							setCurrentPdf({
								title: "SITA NDP 2030 Hackathon in Durban",
								href: "/assets/sciis-newsletter.pdf",
							})
						}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{" "}
						SITA NDP 2030 Hackathon in Durban
					</motion.span>
					, where I competed alongside some of the sharpest young minds in the
					country.
				</motion.p>

				<motion.p
					className="text-black sm:text-lg text-sm font-light sm:w-[70%] font-ttcommons"
					variants={itemVariants}
				>
					These experiences grounded me in problem-solving, resilience, and a
					love for building tech that matters—skills I now bring into every
					project.
				</motion.p>
			</motion.div>

			<div className="flex w-full absolute sm:bottom-20 bottom-32 sm:right-36 justify-end">
				<motion.img
					alt="book"
					className="sm:w-64 sm:h-64 w-40 h-40"
					src="https://i.postimg.cc/Px3RbV9y/book.png"
					variants={bottomRightImageVariant}
					initial="hidden"
					animate="visible"
					whileHover="hover"
				/>
			</div>

			{currentPdf && (
				<PDFViewerSheet
					sheetTitle={currentPdf?.title}
					href={currentPdf?.href}
					open={currentPdf !== null}
					setOpen={() => setCurrentPdf(null)}
				/>
			)}
		</ChildContainer>
	);
};

export default Education;
