"use client";
import { cn } from "~/lib/utils";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";
import CarouselNavButtons from "../animated/carousel-buttons";

const SlideToOneCarousel = ({
	slideContent,
	parentStyle,
}: {
	slideContent: ReactNode;
	parentStyle?: string;
}) => {
	const OPTIONS: EmblaOptionsType = {
		align: "start",
		slidesToScroll: 1,
		containScroll: "trimSnaps",
		loop: false,
	};
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

	return (
		<div className={cn("relative mx-auto", parentStyle)}>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">{slideContent}</div>
			</div>
			<div className="embla__buttons pt-2">
				<div className="flex w-full md:justify-end justify-center">
					<CarouselNavButtons emblaApi={emblaApi} />
				</div>
			</div>
		</div>
	);
};

export default SlideToOneCarousel;
