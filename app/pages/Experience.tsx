import HorizontalCarousel from "~/components/carousel/horizontal";
import ChildContainer from "~/components/layout/child-container";
import HighlightedText from "~/components/text/Highlighted";
import { experiences } from "~/lib/data";

const Experience = () => {
	function getHighlightedWords(keyHighlightId: number) {
		switch (keyHighlightId) {
			case 1:
				return ["AURA API", "Google Location Services"];
			case 2:
				return ["personalized", "cycle", "tracker", "custom", "APIs"];
			case 3:
				return ["real-time", "emoji", "reactions"];
			case 4:
				return ["drove", "user", "retention"];
			default:
				return [""];
		}
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-5">
			<div className="flex flex-col w-9/12">
				<HorizontalCarousel
					slideContent={
						<>
							{experiences.map((exp, index) => (
								<div className="flex flex-col space-y-8" key={index}>
									<div className="flex flex-col space-y-4">
										<p className="text-2xl">{exp.heading}</p>
										<div className="flex flex-row space-x-2">
											{exp.techStack.map((stack, index) => (
												<div
													className="flex w-auto h-auto p-2 border border-brown rounded-sm font-light text-md"
													key={index}
												>
													{stack}
												</div>
											))}
										</div>
									</div>
									<p className="text-lg font-light">{exp.description}</p>

									<p className="text-xl font-medium">Key Highlights</p>
									<div className="grid grid-cols-4 gap-16">
										{exp.keyHighlights.map((kh, index) => (
											<div
												className="w-80 h-48 p-px rounded-sm bg-gradient-to-t from-[#B4735F] to-[#816A34]"
												key={index}
											>
												<div className="flex flex-col h-full bg-main rounded-md p-4 space-y-4">
													<div className="flex flex-row items-center space-x-2">
														<img
															src={kh.icons}
															alt={kh.icons}
															className="w-7 h-7"
														/>
														<p className="text-base font-semibold">
															{kh.title}
														</p>
													</div>
													<HighlightedText
														text={kh.description}
														highlightWords={getHighlightedWords(kh.id)}
														highlightClassName="text-brown"
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</>
					}
				/>
			</div>
		</div>
	);
};

export default Experience;
