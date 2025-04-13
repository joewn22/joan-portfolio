import MainLayout from "~/components/layout/main-layout";
import Projects from "~/pages/Projects";

const Page = () => {
	return (
		<MainLayout
			heading="2022 – 2025 | Bridge Labs (Startup)"
			subHeading="Lead Software Engineer "
		>
			<Projects />
		</MainLayout>
	);
};

export default Page;
