import TypingAnimation from "~/components/animated/typed-animation";

const Home = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-5 relative">
			<TypingAnimation />

			<div className="flex w-full absolute bottom-0 justify-end">
				<img alt="birds" className="w-96 h-96" src="./assets/birds.png" />
			</div>
		</div>
	);
};

export default Home;
