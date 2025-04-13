import { motion } from "framer-motion";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import { useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { buttonVariants, iconVariants } from "~/lib/animated-variants";

const CarouselNavButtons = ({
	emblaApi,
}: {
	emblaApi: EmblaCarouselType | undefined;
}) => {
	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="flex flex-row gap-5 items-center">
			<motion.div
				className="flex justify-center items-center h-10 w-10 rounded-full border border-gold cursor-pointer"
				variants={buttonVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap"
				onClick={onPrevButtonClick}
			>
				<motion.div variants={iconVariants} custom="prev">
					<ArrowLeft01Icon className="text-brown" />
				</motion.div>
			</motion.div>

			<motion.div
				className="flex justify-center items-center h-10 w-10 rounded-full border border-gold cursor-pointer"
				variants={buttonVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap"
				onClick={onNextButtonClick}
			>
				<motion.div variants={iconVariants} custom="next">
					<ArrowRight01Icon className="text-brown" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default CarouselNavButtons;
