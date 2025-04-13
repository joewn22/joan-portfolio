import useNavStore from "~/store/nav-store";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { useState } from "react";
import { menu } from "~/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "@remix-run/react";

const BurgerMenu = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: () => void;
}) => {
	const { activeMenu } = useNavStore();
	const [hoveredItem, setHoveredItem] = useState("");

	const navigate = useNavigate();

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent
				side="left"
				className="max-h-[100vh] w-1/2 overflow-y-auto space-y-5 bg-main"
			>
				<SheetHeader>
					<SheetTitle className="font-normal">Menu</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col space-y-5 h-[80%] py-10">
					{menu.map((val, index) => (
						<motion.div
							className="flex gap-2 items-center cursor-pointer"
							key={index}
							onClick={() => {
								navigate(val.href);
							}}
							onHoverStart={() => setHoveredItem(val.type)}
							onHoverEnd={() => setHoveredItem("")}
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 400, damping: 25 }}
							style={{ pointerEvents: "auto" }}
						>
							<motion.div
								className={`h-6 w-6 blur-sm rounded-full ${
									activeMenu?.type === val.type
										? "bg-gold"
										: "border border-gold"
								}`}
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 25 }}
							/>

							<AnimatePresence>
								{(activeMenu?.type === val.type ||
									hoveredItem === val.type) && (
									<motion.p
										className="text-forest text-sm font-ttcommons font-light"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -10 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 25,
											opacity: { duration: 0.15 },
										}}
									>
										{val.name}
									</motion.p>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default BurgerMenu;
