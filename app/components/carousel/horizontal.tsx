"use client";
import { useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";
import { cn } from "~/lib/utils";

const HorizontalCarousel = ({
	slideContent,
	containerStyle,
}: {
	slideContent: ReactNode;
	containerStyle?: string;
}) => {
	const OPTIONS: EmblaOptionsType = { align: "start" };
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="embla flex flex-col w-full relative justify-center">
			<div className="embla__viewport" ref={emblaRef}>
				<div className={cn(containerStyle)}>{slideContent}</div>
			</div>
			<div className="embla__buttons">
				<div className="flex w-full md:justify-end justify-center px-10">
					<div className="flex flex-row gap-5 border border-[#B0B2B3] md:w-[7%] w-[50%] h-10 md:h-6 items-center justify-between px-2">
						<ArrowLeft02Icon onClick={onPrevButtonClick} />
						<ArrowRight02Icon onClick={onNextButtonClick} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalCarousel;
