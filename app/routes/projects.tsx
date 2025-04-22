import { MetaFunction } from "@remix-run/react";
import MainLayout from "~/components/layout/main-layout";
import Projects from "~/pages/Projects";

export const meta: MetaFunction = () => {
	return [{ title: "Projects" }];
};

const Page = () => {
	return (
		<MainLayout heading="Projects" subHeading="">
			<Projects />
		</MainLayout>
	);
};

export default Page;
