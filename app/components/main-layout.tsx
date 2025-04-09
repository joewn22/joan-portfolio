import { ReactNode } from "react";
import BookLayout from "./book-layout";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-screen bg-main">
			<BookLayout>{children}</BookLayout>
		</div>
	);
};

export default MainLayout;
