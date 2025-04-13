import { motion } from "framer-motion";
import { useState } from "react";
import SimpleAnimatedText from "~/components/animated/fade-in-out-animated-text";
import { bottomRightImageVariant } from "~/lib/animated-variants";

const AboutMe = () => {
	const [imageLoaded, setImageLoaded] = useState<boolean>();
	return (
		<div className="flex flex-col sm:justify-center sm:items-center h-screen space-y-5 relative">
			<div className="flex sm:flex-row flex-col justify-between sm:w-2/3 w-full sm:space-x-20 space-y-5 items-center">
				<div>
					<motion.div
						className={`flex sm:w-80 sm:h-80 w-44 h-44 rounded-full bg-pink items-center justify-center`}
						variants={bottomRightImageVariant}
						initial="hidden"
						animate="visible"
						whileHover="hover"
						onAnimationComplete={() => setImageLoaded(true)}
					>
						<motion.img
							alt="joan"
							className="sm:w-72 sm:h-72 w-40 h-40"
							src="./assets/me.png"
						/>
					</motion.div>
				</div>
				{imageLoaded && (
					<div className="flex flex-col space-y-5 sm:px-0 px-10 ">
						<SimpleAnimatedText
							text="I have over 3 years experience in the Software industry."
							className="sm:text-3xl text-base"
						/>
						<SimpleAnimatedText
							text="I specialize in crafting mobile and web applications from idea to
						deployment. With a background in full-stack development and a deep
						love for UX, I build interfaces that not only work flawlessly but
						feel right."
							className="text-black font-light sm:text-lg text-xs sm:w-[75%] font-ttcommons"
						/>
					</div>
				)}
			</div>
			<div className="flex w-full absolute sm:bottom-0 bottom-24 justify-end">
				<motion.img
					alt="birds"
					className="sm:w-96 sm:h-96 w-56 h-56"
					src="./assets/birds.png"
					variants={bottomRightImageVariant}
					initial="hidden"
					animate="visible"
					whileHover="hover"
				/>
			</div>
		</div>
	);
};

export default AboutMe;
