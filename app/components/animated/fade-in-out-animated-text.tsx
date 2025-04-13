import { useState, useEffect } from "react";
import { cn } from "~/lib/utils";

const SimpleAnimatedText = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	return (
		<p
			className={cn(
				`
        text-black sm:w-3/5
        transition-all duration-1000 ease-out
        ${
					isVisible
						? "opacity-100 transform translate-y-0"
						: "opacity-0 transform translate-y-4"
				}
      `,
				className
			)}
		>
			{text}
		</p>
	);
};

export default SimpleAnimatedText;
