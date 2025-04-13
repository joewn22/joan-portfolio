import { MetaFunction } from "@remix-run/react";
import MainLayout from "~/components/layout/main-layout";
import Education from "~/pages/Education";

export const meta: MetaFunction = () => {
	return [{ title: "Education" }];
};

const Page = () => {
	return (
		<MainLayout
			heading="2019 - 2021  | The Beginning"
			subHeading="University of Johannesburg - BCom Information Systems"
		>
			<div className="overflow-y-auto">
				<Education />
			</div>
		</MainLayout>
	);
};

export default Page;
