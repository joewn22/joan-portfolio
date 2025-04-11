import { useState, useEffect } from "react";

const FAB = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isFloating, setIsFloating] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 100);

		setTimeout(() => setIsFloating(true), 1200);

		const interval = setInterval(() => {
			setIsFloating((prev) => !prev);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex w-full absolute bottom-0 justify-end overflow-hidden">
			<img
				alt="birds"
				src="./assets/birds.png"
				className={`
          w-96 h-96
          transition-all duration-1000 ease-out
          ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
					}
          ${isFloating ? "translate-y-0" : "translate-y-4"}
        `}
			/>
		</div>
	);
};

export default FAB;
