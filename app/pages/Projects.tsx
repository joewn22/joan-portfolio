import { motion } from "framer-motion";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { useState } from "react";
import SlideToOneCarousel from "~/components/carousel/horizontal";
import DynamicText from "~/components/text/Dynamic";
import HighlightedText from "~/components/text/Highlighted";
import {
	containerVariants,
	highlightCardVariants,
	slideVariants,
	tagVariants,
} from "~/lib/animated-variants";
import { experiences } from "~/lib/data";
import { KeyHighlights } from "~/lib/type";
import { cn, getHighlightedWords } from "~/lib/utils";

const Projects = () => {
	const [activeHighlight, setActiveHighlight] = useState<
		KeyHighlights | undefined
	>();
	return (
		<motion.div
			className="flex flex-col sm:justify-center sm:items-center h-screen"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<SlideToOneCarousel
				parentStyle="flex flex-col sm:w-9/12 w-[95%] sm:top-[6rem]"
				slideContent={
					<>
						{experiences.map((exp, index) => (
							<motion.div
								className="flex-[0_0_100%] min-w-0 embla__slide flex-col space-y-8 bottom-0 px-2"
								key={index}
								variants={slideVariants}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<div className="flex flex-col space-y-4">
									<motion.p
										className="sm:text-2xl text-lg font-ttcommons"
										initial={{ opacity: 0, y: 10 }}
										animate={{
											opacity: 1,
											y: 0,
											transition: { duration: 0.5, delay: 0.1 },
										}}
									>
										{exp.heading}
									</motion.p>
									<div className="sm:flex sm:flex-row sm:space-x-2 hidden">
										{exp.techStack.map((stack, stackIndex) => (
											<motion.div
												className="flex w-auto h-auto p-2 border border-brown rounded-sm font-light sm:text-md text-xs font-ttcommons cursor-pointer"
												key={stackIndex}
												variants={tagVariants}
												custom={stackIndex}
												initial="hidden"
												animate="visible"
												whileHover="hover"
											>
												{stack}
											</motion.div>
										))}
									</div>
								</div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: { duration: 0.5, delay: 0.3 },
									}}
								>
									<DynamicText className="sm:w-[80%]" text={exp.description} />
								</motion.div>

								<motion.p
									className="sm:text-xl text-lg font-medium font-ttcommons"
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.5, delay: 0.4 },
									}}
								>
									Key Highlights
								</motion.p>

								<div className="sm:grid sm:grid-cols-4 flex flex-col gap-4 sm:gap-16">
									{exp.keyHighlights.map((kh, khIndex) => (
										<motion.div
											className={cn(
												`sm:w-56 sm:h-56 w-full p-px rounded-sm border border-[#B4735F]`,
												activeHighlight !== kh ? "h-12" : "h-[10rem]"
											)}
											key={khIndex}
											variants={highlightCardVariants}
											custom={khIndex}
											initial="hidden"
											animate="visible"
											whileHover="hover"
										>
											<div className="flex flex-col h-full rounded-md sm:p-4 p-2 space-y-4">
												<div className="flex flex-row items-center w-full justify-between">
													<div className="flex flex-row items-center space-x-2">
														<motion.img
															src={kh.icons}
															alt={kh.icons}
															className={cn(
																kh.id === 3 ? "w-10 h-8" : "w-7 h-7"
															)}
															initial={{ opacity: 0, rotateY: 90 }}
															animate={{
																opacity: 1,
																rotateY: 0,
																transition: {
																	duration: 0.5,
																	delay: 0.1 * khIndex + 0.5,
																},
															}}
														/>
														<p
															className={cn(
																"sm:text-base text-xs font-medium font-ttcommons"
															)}
														>
															{kh.title}
														</p>
													</div>
													{activeHighlight !== kh && (
														<ArrowDown01Icon
															className="sm:hidden block cursor-pointer"
															onClick={() => setActiveHighlight(kh)}
														/>
													)}
													{activeHighlight === kh && (
														<ArrowUp01Icon
															className="sm:hidden block cursor-pointer"
															onClick={() => setActiveHighlight(undefined)}
														/>
													)}
												</div>

												{activeHighlight === undefined && (
													<HighlightedText
														text={kh.description}
														highlightWords={getHighlightedWords(kh.id)}
														highlightClassName="hidden sm:block"
													/>
												)}

												{activeHighlight?.description === kh.description && (
													<HighlightedText
														text={kh.description}
														highlightWords={getHighlightedWords(kh.id)}
														highlightClassName="sm:hidden block"
													/>
												)}
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</>
				}
			/>
		</motion.div>
	);
};

export default Projects;
