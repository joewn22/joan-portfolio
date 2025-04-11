import MainLayout from "~/components/layout/main-layout";
import AboutMe from "~/pages/About-Me";

const Page = () => {
	return (
		<MainLayout heading="About me">
			<AboutMe />
		</MainLayout>
	);
};

export default Page;
