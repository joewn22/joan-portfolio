import { motion } from "framer-motion";
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
import { cn, getHighlightedWords } from "~/lib/utils";

const Projects = () => {
	return (
		<motion.div
			className="flex flex-col justify-center sm:items-center h-screen"
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
								className="flex-[0_0_100%] min-w-0 embla__slide flex-col space-y-8 bottom-0"
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
									<div className="flex flex-row space-x-2">
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

								<div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-16 gap-4">
									{exp.keyHighlights.map((kh, khIndex) => (
										<motion.div
											className="sm:w-56 sm:h-56 w-48 h-48 p-px rounded-sm border border-[#B4735F]"
											key={khIndex}
											variants={highlightCardVariants}
											custom={khIndex}
											initial="hidden"
											animate="visible"
											whileHover="hover"
										>
											<div className="flex flex-col h-full rounded-md p-4 space-y-4">
												<div className="flex flex-row items-center space-x-2">
													<motion.img
														src={kh.icons}
														alt={kh.icons}
														className={cn(kh.id === 3 ? "w-10 h-8" : "w-7 h-7")}
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
													<p className="sm:text-base text-sm font-medium font-ttcommons">
														{kh.title}
													</p>
												</div>
												<HighlightedText
													text={kh.description}
													highlightWords={getHighlightedWords(kh.id)}
													highlightClassName="text-brown"
												/>
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
