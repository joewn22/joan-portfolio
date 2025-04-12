import { useState } from "react";
import ChildContainer from "~/components/layout/child-container";
import PDFViewerSheet from "~/components/sheet/pdf-viewer-sheet";
import { PDF } from "~/lib/type";

const Education = () => {
	const [currentPdf, setCurrentPdf] = useState<PDF | null>();

	return (
		<ChildContainer>
			<div className="flex flex-col w-[75%] space-y-8">
				<p className="text-black text-lg font-light w-[60%] font-ttcommons">
					My journey into tech began in my first year of university, where I
					went from scoring a{" "}
					<span className="font-medium font-ttcommons">humble 43%</span> on my
					very first code challenge to topping the class with a standout{" "}
					<span className="font-medium font-ttcommons">
						83% in my Development Software 1B module
					</span>
					.
				</p>

				<div className="flex flex-col">
					<p className="text-black text-lg font-light w-[70%] font-ttcommons">
						I realized two things:
					</p>
					<div className="flex flex-row space-x-20 w-full">
						<div className="flex flex-row items-center space-x-2">
							<div className="flex justify-center items-center w-8 h-8 bg-forest text-white rounded-full">
								<p className="font-ttcommons">1</p>
							</div>
							<p className="text-black font-ttcommons">
								{" "}
								I’m pretty good at this
							</p>
						</div>

						<div className="flex flex-row items-center space-x-2">
							<div className="flex justify-center items-center w-8 h-8 bg-forest text-white rounded-full">
								<p className="font-ttcommons">2</p>
							</div>
							<p className="text-black font-ttcommons">
								When I’m determined, I’m an unstoppable force.
							</p>
						</div>
					</div>
				</div>

				<p className="text-black text-lg font-light w-[70%] font-ttcommons">
					That drive led me to be recognized as the{" "}
					<span
						className="font-medium underline text-forest cursor-pointer font-ttcommons"
						onClick={() =>
							setCurrentPdf({
								title: "Top Computer Programming Talent of 2019",
								href: "/assets/tpt.pdf",
							})
						}
					>
						{" "}
						Top Computer Programming Talent of 2019 at the University of
						Johannesburg.
					</span>{" "}
					on As part of this achievement, I had the incredible opportunity to
					represent my university at the
					<span
						className="font-medium underline text-forest cursor-pointer font-ttcommons"
						onClick={() =>
							setCurrentPdf({
								title: "SITA NDP 2030 Hackathon in Durban",
								href: "/assets/sciis-newsletter.pdf",
							})
						}
					>
						{" "}
						SITA NDP 2030 Hackathon in Durban
					</span>
					, where I competed alongside some of the sharpest young minds in the
					country.
				</p>
				<p className="text-black text-lg font-light w-[70%] font-ttcommons">
					These experiences grounded me in problem-solving, resilience, and a
					love for building tech that matters—skills I now bring into every
					project.
				</p>
			</div>

			<div className="flex w-full absolute bottom-24 right-36 justify-end">
				<img alt="book" className="w-64 h-64" src="./assets/book.png" />
			</div>

			{currentPdf && (
				<PDFViewerSheet
					sheetTitle={currentPdf?.title}
					href={currentPdf?.href}
					open={currentPdf !== null}
					setOpen={() => setCurrentPdf(null)}
				/>
			)}
		</ChildContainer>
	);
};

export default Education;
