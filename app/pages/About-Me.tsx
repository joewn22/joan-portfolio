import SimpleAnimatedText from "~/components/animated/fade-in-out-animated-text";
import Circle from "~/components/shape/circle";

const AboutMe = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-5">
			<div className="flex flex-row justify-between w-2/3 space-x-20 items-center">
				<div>
					<div
						className={`flex w-80 h-80 rounded-full bg-pink items-center justify-center`}
					>
						<img src="/assets/me.png" className="h-72 w-72" />
					</div>
				</div>
				<div className="flex flex-col space-y-5">
					<SimpleAnimatedText />
					<p className="text-black font-light text-lg w-[75%] font-ttcommons">
						I specialize in crafting mobile and web applications from idea to
						deployment. With a background in full-stack development and a deep
						love for UX, I build interfaces that not only work flawlessly but
						feel right.
					</p>
				</div>
			</div>
			<div className="flex w-full absolute bottom-0 justify-end">
				<img alt="birds" className="w-96 h-96" src="./assets/birds.png" />
			</div>
		</div>
	);
};

export default AboutMe;
