import SlideToOneCarousel from "~/components/carousel/horizontal";
import DynamicText from "~/components/text/Dynamic";
import HighlightedText from "~/components/text/Highlighted";
import { experiences } from "~/lib/data";

const Projects = () => {
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
			case 5:
				return ["cargo", "bookings", "pin", "drops", "autofill"];
			case 6:
				return ["real-time", "chat", "boosting", "delivery", "speed"];
			case 7:
				return ["Designed", "refined", "user", "flows"];
			case 8:
				return [
					"multilingual",
					"system",
					"improving",
					"accessibility",
					"across",
					"global",
					"markets",
				];
			case 9:
				return [
					"Collaborated",
					"with",
					"stakeholders",
					"align",
					"product",
					"decisions",
				];
			case 10:
				return ["agile", "sprints", "reviews", "delivery", "milestones"];
			case 11:
				return ["Managed", "the", "product", "lifecycle"];
			case 12:
				return ["features", "products", "engineers"];
			default:
				return [""];
		}
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-5">
			<SlideToOneCarousel
				parentStyle="flex flex-col w-9/12 top-[6rem]"
				slideContent={
					<>
						{experiences.map((exp, index) => (
							<div
								className="flex-[0_0_100%] min-w-0 embla__slide flex-col space-y-8"
								key={index}
							>
								<div className="flex flex-col space-y-4">
									<p className="text-2xl font-ttcommons">{exp.heading}</p>
									<div className="flex flex-row space-x-2">
										{exp.techStack.map((stack, index) => (
											<div
												className="flex w-auto h-auto p-2 border border-brown rounded-sm font-light text-md font-ttcommons"
												key={index}
											>
												{stack}
											</div>
										))}
									</div>
								</div>
								<DynamicText className="w-[80%]" text={exp.description} />

								<p className="text-xl font-medium font-ttcommons">
									Key Highlights
								</p>
								<div className="grid grid-cols-4 gap-16">
									{exp.keyHighlights.map((kh, index) => (
										<div
											className="w-56 h-56 p-px rounded-sm border border-[#B4735F]"
											key={index}
										>
											<div className="flex flex-col h-full rounded-md p-4 space-y-4">
												<div className="flex flex-row items-center space-x-2">
													<img
														src={kh.icons}
														alt={kh.icons}
														className="w-7 h-7"
													/>
													<p className="text-base font-medium font-ttcommons">
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
	);
};

export default Projects;
