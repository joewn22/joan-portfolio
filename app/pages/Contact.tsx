import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SimpleAnimatedText from "~/components/animated/fade-in-out-animated-text";
import ChildContainer from "~/components/layout/child-container";
import { bottomRightImageVariant } from "~/lib/animated-variants";

const ContactMe = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	return (
		<ChildContainer>
			<div className="w-full h-1/2 flex flex-col space-y-4 justify-center items-center relative">
				<SimpleAnimatedText
					className="sm:text-2xl text-base content-center text-center"
					text="Whether you're looking for a developer to bring your vision to life or need help polishing a product, I’m open to freelance work, collaborations, or just a good chat."
				/>
				<span
					className={`sm:text-lg text-xs transition-all duration-1000 ease-out
        ${
					isVisible
						? "opacity-100 transform translate-y-0"
						: "opacity-0 transform translate-y-4"
				}
      `}
				>
					Email:{" "}
					<a
						href="mailto:kagiso.joan@gmail.com"
						target="_blank"
						className="sm:text-lg text-xs underline cursor-pointer"
					>
						{" "}
						kagiso.joan@gmail.com
					</a>
				</span>
			</div>
			<div className="flex w-full absolute sm:bottom-8 bottom-24 justify-end">
				<motion.img
					alt="birds"
					className="sm:w-96 sm:h-96 w-56 h-56"
					src="https://i.postimg.cc/yN7QMzzn/birds.png"
					variants={bottomRightImageVariant}
					initial="hidden"
					animate="visible"
					whileHover="hover"
				/>
			</div>
		</ChildContainer>
	);
};

export default ContactMe;
