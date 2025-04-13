import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({
	setIsComplete,
	className,
	mainText,
	subText,
}: {
	setIsComplete: (isComplete: boolean) => void;
	className?: string;
	mainText: string;
	subText?: string;
}) => {
	const [displayedText1, setDisplayedText1] = useState("");
	const [displayedText2, setDisplayedText2] = useState("");
	const [isFirstLineDone, setIsFirstLineDone] = useState(false);
	const [isSecondLineDone, setIsSecondLineDone] = useState(false);

	useEffect(() => {
		if (displayedText1.length < mainText.length) {
			const timeout = setTimeout(() => {
				setDisplayedText1(mainText.substring(0, displayedText1.length + 1));
			}, 100);

			return () => clearTimeout(timeout);
		} else {
			setIsFirstLineDone(true);
		}
	}, [displayedText1]);

	useEffect(() => {
		if (subText) {
			if (isFirstLineDone && displayedText2.length < subText.length) {
				const timeout = setTimeout(() => {
					setDisplayedText2(subText.substring(0, displayedText2.length + 1));
				}, 100);

				return () => clearTimeout(timeout);
			} else if (isFirstLineDone && displayedText2.length === subText.length) {
				setIsSecondLineDone(true);
			}
		}
	}, [displayedText2, isFirstLineDone]);

	useEffect(() => {
		if (isSecondLineDone) {
			setIsComplete(true);
		}
	}, [isSecondLineDone]);

	return (
		<div className={className}>
			<div className="flex items-center">
				<p className="text-black font-normal sm:text-4xl text-xl h-12">
					{displayedText1}
					{!isFirstLineDone && (
						<motion.span
							animate={{ opacity: [0, 1, 0] }}
							transition={{ repeat: Infinity, duration: 0.5 }}
							className="inline-block ml-1 w-1 h-8 bg-black"
						/>
					)}
				</p>
			</div>

			{isFirstLineDone && (
				<div className="flex justify-center">
					<p className="text-black font-light sm:text-2xl text-base h-8">
						{displayedText2}
						{!isSecondLineDone && (
							<motion.span
								animate={{ opacity: [0, 1, 0] }}
								transition={{ repeat: Infinity, duration: 0.5 }}
								className="inline-block ml-1 w-1 h-6 bg-black"
							/>
						)}
					</p>
				</div>
			)}
		</div>
	);
};

export default TypingAnimation;
