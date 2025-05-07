import { cn } from "~/lib/utils";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useState, ReactNode, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import CarouselNavButtons from "../animated/carousel-buttons";

const SlideToOneCarousel = ({
	slideContent,
	slides,
	parentStyle,
	dotsStyle,
}: {
	slideContent: ReactNode;
	slides: number;
	parentStyle?: string;
	dotsStyle?: string;
}) => {
	const OPTIONS: EmblaOptionsType = {
		align: "start",
		slidesToScroll: 1,
		containScroll: "trimSnaps",
		loop: false,
	};
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const updateEmblaDots = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi?.selectedScrollSnap());
		//emblaApi.off("scroll", updateEmblaDots);
	}, []);

	useEffect(() => {
		if (emblaApi) {
			emblaApi.on("scroll", updateEmblaDots);
		}
	}, [emblaApi, updateEmblaDots]);

	return (
		<div className={cn("relative mx-auto", parentStyle)}>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">{slideContent}</div>
			</div>
			<div
				className={cn(
					"flex gap-2 w-full justify-center embla__dots mt-2",
					dotsStyle
				)}
			>
				<CarouselNavButtons emblaApi={emblaApi} />
			</div>
		</div>
	);
};

export default SlideToOneCarousel;
