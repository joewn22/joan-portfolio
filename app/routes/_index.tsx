import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/main-layout";
import Home from "~/pages/Home";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
}
