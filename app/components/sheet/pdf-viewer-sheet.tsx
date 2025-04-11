import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetDescription,
	SheetTitle,
} from "../ui/sheet";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewerSheet = ({
	sheetTitle,
	open,
	setOpen,
	sheetSubTitle,
	pageNumber,
	href,
}: {
	open: boolean;
	setOpen: () => void;
	sheetTitle: string;
	sheetSubTitle?: string;
	pageNumber?: number;
	href: string;
}) => {
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent className="max-h-[100vh] overflow-y-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl space-y-5">
				<SheetHeader className="sticky">
					<SheetTitle>{sheetTitle}</SheetTitle>
					<SheetDescription>{sheetSubTitle}</SheetDescription>
				</SheetHeader>
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
					<div>
						<Viewer initialPage={pageNumber} fileUrl={href} />
					</div>
				</Worker>
			</SheetContent>
		</Sheet>
	);
};

export default PDFViewerSheet;
