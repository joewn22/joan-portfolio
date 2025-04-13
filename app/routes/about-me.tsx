import { MetaFunction } from "@remix-run/react";
import MainLayout from "~/components/layout/main-layout";
import AboutMe from "~/pages/About-Me";

export const meta: MetaFunction = () => {
	return [{ title: "About Me" }];
};

const Page = () => {
	return (
		<MainLayout heading="About me">
			<AboutMe />
		</MainLayout>
	);
};

export default Page;
