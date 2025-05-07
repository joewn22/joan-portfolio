import { motion } from "framer-motion";
import { AndroidIcon, AppleIcon, LaptopIcon } from "hugeicons-react";
import HorizontalCarousel from "~/components/carousel/horizontal";
import SlideToOneCarousel from "~/components/carousel/slide-to-one";
import LinkPreview from "~/components/link/dynamic-link-preview";
import { containerVariants, tagVariants } from "~/lib/animated-variants";
import { projects } from "~/lib/data";

const Projects = () => {
	return (
		<motion.div
			className="flex flex-col sm:justify-center items-center h-screen sm:pt-28"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="md:max-w-6xl lg:max-w-8xl mx-auto hidden md:block">
				<HorizontalCarousel slideContent="" containerStyle="flex flex-row" />
			</div>
			<div className="md:hidden block w-[95%] h-full">
				<SlideToOneCarousel
					parentStyle="h-full space-y-12"
					slideContent={
						<>
							{projects.map((proj, index) => (
								<div key={index} className="embla-slide flex-[0_0_100%]">
									<div
										className="flex flex-col space-y-2 border border-gold rounded shadow-lg p-2 max-w-6xl h-[25rem] "
										key={proj.id}
									>
										<div className="w-full h-1/2 bg-white mb-2">
											{proj.type === "web" ? (
												<img
													className="object-cover"
													src={proj.imageUrl}
													alt={proj.heading}
												/>
											) : (
												<LinkPreview href={proj.urls.ios ?? ""} />
											)}
										</div>

										<div className="flex flex-row items-center justify-between  ">
											<motion.p
												className="text-base font-ttcommons text-forest"
												initial={{ opacity: 0, y: 10 }}
												animate={{
													opacity: 1,
													y: 0,
													transition: { duration: 0.5, delay: 0.1 },
												}}
											>
												{proj.heading}
											</motion.p>
											<div className="flex flex-row items-center space-x-2">
												{proj.type === "web" ? (
													<a
														href={proj.urls.web}
														target="_blank"
														rel="noopener noreferrer"
													>
														<LaptopIcon size={20} />
													</a>
												) : (
													<>
														{proj.urls.ios && (
															<a
																href={proj.urls.ios}
																target="_blank"
																rel="noopener noreferrer"
															>
																<AppleIcon size={20} fill="black" />
															</a>
														)}
														{proj.urls.android && (
															<a
																href={proj.urls.android}
																target="_blank"
																rel="noopener noreferrer"
															>
																<AndroidIcon size={20} fill="black" />
															</a>
														)}
													</>
												)}
											</div>
										</div>
										<div className="flex flex-row space-x-4 items-center">
											{proj.stack.map((stack, stackIndex) => (
												<motion.div
													className="flex w-fit h-fit p-1 border border-brown rounded-sm font-light sm:text-md text-xs font-ttcommons cursor-pointer"
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
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{
												opacity: 1,
												y: 0,
												transition: { duration: 0.5, delay: 0.3 },
											}}
											className="overflow-hidden"
										>
											<p className="text-sm font-ttcommons font-light">
												{proj.description}
											</p>
										</motion.div>
									</div>
								</div>
							))}
						</>
					}
					slides={projects.length}
				/>
			</div>
		</motion.div>
	);
};

export default Projects;
