export const bottomRightImageVariant = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.8,
			duration: 0.8,
			ease: "easeOut",
		},
	},
	hover: {
		y: -8,
		rotate: 2,
		transition: {
			yoyo: Infinity,
			duration: 1.5,
			ease: "easeInOut",
		},
	},
};

export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

export const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const highlightVariants = {
	hover: {
		color: "#2B533B",
		scale: 1.03,
		transition: { duration: 0.2 },
	},
};

export const circleVariants = {
	hover: {
		scale: 1.1,
		backgroundColor: "#1E3C2B",
		transition: { duration: 0.2 },
	},
};

export const slideVariants = {
	initial: { opacity: 0, y: 20 },
	enter: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};

export const highlightCardVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 * i,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
	hover: {
		y: -5,
		boxShadow: "0 10px 20px rgba(180, 115, 95, 0.1)",
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

export const tagVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: (i: number) => ({
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.05 * i,
			duration: 0.3,
			ease: "easeOut",
		},
	}),
	hover: {
		scale: 1.05,
		backgroundColor: "rgba(180, 115, 95, 0.07)",
		transition: {
			duration: 0.2,
		},
	},
};

export const buttonVariants = {
	initial: {
		scale: 1,
		backgroundColor: "transparent",
	},
	hover: {
		scale: 1.1,
		backgroundColor: "rgba(180, 115, 95, 0.1)",
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
	tap: {
		scale: 0.95,
	},
};

export const iconVariants = {
	initial: { x: 0 },
	hover: (id: "prev" | "next") => ({
		x: id === "prev" ? -3 : 3,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 10,
		},
	}),
};
