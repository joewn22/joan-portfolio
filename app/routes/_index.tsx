import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layout/main-layout";
import Home from "~/pages/Home";

export const meta: MetaFunction = () => {
	return [
		{ title: "Joan Matlou" },
		{
			name: "description",
			content:
				"Joan Matlou is a lead software engineer crafting thoughtful digital experiences across EdTech, FinTech, and mobile platforms — blending product vision with technical execution.",
		},
	];
};

export default function Index() {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
}
