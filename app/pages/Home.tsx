import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TypingAnimation from "~/components/animated/typed-animation";
import { bottomRightImageVariant } from "~/lib/animated-variants";

const Home = () => {
	const [isComplete, setIsComplete] = useState<boolean>(false);

	const mainText = "Hello, my name is Joan";
	const subText = "Developer & Designer";

	return (
		<div className="flex flex-col sm:justify-center items-center h-screen space-y-5 relative">
			<div className="w-full h-1/2 flex justify-center items-center">
				<TypingAnimation
					mainText={mainText}
					subText={subText}
					setIsComplete={setIsComplete}
				/>
			</div>

			<div className="flex w-full absolute sm:bottom-0 bottom-24 justify-end">
				<AnimatePresence>
					{isComplete && (
						<motion.img
							alt="birds"
							className="sm:w-96 sm:h-96 w-56 h-56"
							src="https://i.postimg.cc/yN7QMzzn/birds.png"
							variants={bottomRightImageVariant}
							initial="hidden"
							animate="visible"
							whileHover="hover"
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Home;
