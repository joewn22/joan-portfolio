import { MetaFunction } from "@remix-run/react";
import MainLayout from "~/components/layout/main-layout";
import ContactMe from "~/pages/Contact";

export const meta: MetaFunction = () => {
	return [{ title: "Contact Me" }];
};

const Page = () => {
	return (
		<MainLayout heading="Let’s work together ">
			<ContactMe />
		</MainLayout>
	);
};

export default Page;
