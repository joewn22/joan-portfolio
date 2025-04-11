import { ReactNode } from "react";

const ChildContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-5">
			{children}
		</div>
	);
};

export default ChildContainer;
