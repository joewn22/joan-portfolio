import { ReactNode, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import CarouselNavButtons from "../animated/carousel-buttons";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { projects } from "~/lib/data";
import LinkPreview from "../link/dynamic-link-preview";
import { AndroidIcon, AppleIcon, LaptopIcon } from "hugeicons-react";
import { tagVariants } from "~/lib/animated-variants";

const HorizontalCarousel = ({
	slideContent,
	containerStyle,
}: {
	slideContent: ReactNode;
	containerStyle?: string;
}) => {
	const OPTIONS: EmblaOptionsType = { align: "start" };
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

	const chunkArray = <T,>(array: T[], size: number): T[][] => {
		return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
			array.slice(i * size, i * size + size)
		);
	};

	const projectChunks = useMemo(() => chunkArray(projects, 3), [projects]);

	return (
		<div className="embla w-full overflow-hidden flex flex-col gap-5 min-h-[60vh] relative justify-center">
			<div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
				<div className={cn("embla__container flex", containerStyle)}>
					{projectChunks.map((chunk, chunkIndex) => (
						<div
							key={chunkIndex}
							className="embla__slide flex-[0_0_100%] min-w-0"
						>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-1 min-h-[50vh]">
								{chunk.map((proj, index) => (
									<div
										className="flex flex-col space-y-2 border border-gold rounded shadow-lg p-2 w-full h-[25rem]"
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

										<div className="flex flex-row items-center justify-between">
											<motion.p
												className="sm:text-lg text-sm font-ttcommons text-forest"
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
											<p className="sm:text-sm text-[10px] font-ttcommons font-light">
												{proj.description}
											</p>
										</motion.div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="embla__buttons">
				<div className="flex w-full md:justify-end justify-center">
					<CarouselNavButtons emblaApi={emblaApi} />
				</div>
			</div>
		</div>
	);
};

export default HorizontalCarousel;
