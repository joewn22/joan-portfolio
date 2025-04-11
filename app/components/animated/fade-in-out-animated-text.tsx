import { useState, useEffect } from "react";

const SimpleAnimatedText = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	return (
		<p
			className={`
        text-black text-3xl w-3/5
        transition-all duration-1000 ease-out
        ${
					isVisible
						? "opacity-100 transform translate-y-0"
						: "opacity-0 transform translate-y-4"
				}
      `}
		>
			I have over 3 years of experience in the Software industry.
		</p>
	);
};

export default SimpleAnimatedText;
