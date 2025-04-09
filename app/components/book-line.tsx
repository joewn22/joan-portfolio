const BookLine = ({ variant }: { variant: "vertical" | "horizontal" }) => {
	return variant === "horizontal" ? (
		<div className="bg-lines h-px w-screen mb-6" />
	) : (
		<div className="bg-lines h-sceen w-px mx-2" />
	);
};

export default BookLine;
