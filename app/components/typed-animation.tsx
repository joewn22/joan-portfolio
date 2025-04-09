import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
	const [displayedText1, setDisplayedText1] = useState("");
	const [displayedText2, setDisplayedText2] = useState("");
	const [isFirstLineDone, setIsFirstLineDone] = useState(false);
	const [isSecondLineDone, setIsSecondLineDone] = useState(false);

	const fullText1 = "Hello, my name is Joan";
	const fullText2 = "Developer & Designer";

	useEffect(() => {
		if (displayedText1.length < fullText1.length) {
			const timeout = setTimeout(() => {
				setDisplayedText1(fullText1.substring(0, displayedText1.length + 1));
			}, 100); // Adjust speed as needed

			return () => clearTimeout(timeout);
		} else {
			setIsFirstLineDone(true);
		}
	}, [displayedText1]);

	useEffect(() => {
		if (isFirstLineDone && displayedText2.length < fullText2.length) {
			const timeout = setTimeout(() => {
				setDisplayedText2(fullText2.substring(0, displayedText2.length + 1));
			}, 100); // Adjust speed as needed

			return () => clearTimeout(timeout);
		} else if (isFirstLineDone && displayedText2.length === fullText2.length) {
			setIsSecondLineDone(true);
		}
	}, [displayedText2, isFirstLineDone]);

	return (
		<div>
			<div className="flex items-center">
				<p className="text-black font-normal text-4xl h-12">
					{displayedText1}
					{!isFirstLineDone && (
						<motion.span
							animate={{ opacity: [0, 1, 0] }}
							transition={{ repeat: Infinity, duration: 0.8 }}
							className="inline-block ml-1 w-1 h-8 bg-black"
						/>
					)}
				</p>
			</div>

			{isFirstLineDone && (
				<div className="flex justify-center">
					<p className="text-black font-light text-2xl h-8">
						{displayedText2}
						{!isSecondLineDone && (
							<motion.span
								animate={{ opacity: [0, 1, 0] }}
								transition={{ repeat: Infinity, duration: 0.8 }}
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
