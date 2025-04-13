import { useEffect, useState } from "react";
import SimpleAnimatedText from "~/components/animated/fade-in-out-animated-text";
import ChildContainer from "~/components/layout/child-container";

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
			<SimpleAnimatedText
				className="text-2xl"
				text="Got a bold idea, a product challenge, or just want to chat tech?"
			/>
			<span
				className={`        transition-all duration-1000 ease-out
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
					className="text-lg underline cursor-pointer"
				>
					{" "}
					kagiso.joan@gmail.com
				</a>
			</span>
		</ChildContainer>
	);
};

export default ContactMe;
