import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useNavStore from "~/store/nav-store";
import { useLocation, useNavigate } from "@remix-run/react";
import { menu } from "~/lib/data";
import { cn } from "~/lib/utils";

const AnimatedMenu = () => {
	const { activeMenu } = useNavStore();
	const [hoveredItem, setHoveredItem] = useState("");

	const navigate = useNavigate();

	const leftMargin = "pl-12";

	return (
		<div
			className={`absolute top-0 left-0 h-full flex flex-col space-y-4 justify-center content-center ${leftMargin} z-40 sm:block hidden`}
		>
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
					<AnimatePresence>
						<motion.p
							className={cn(
								"font-ttcommons font-medium",
								activeMenu === val
									? "text-gold text-lg"
									: "text-grey opacity-50 text-sm"
							)}
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
					</AnimatePresence>
				</motion.div>
			))}
		</div>
	);
};

export default AnimatedMenu;
