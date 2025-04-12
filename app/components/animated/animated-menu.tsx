import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "~/lib/type";
import useNavStore from "~/store/nav-store";
import { useLocation, useNavigate } from "@remix-run/react";

const AnimatedMenu = () => {
	const { activeMenu, setActiveMenu } = useNavStore();
	const [hoveredItem, setHoveredItem] = useState("");

	const navigate = useNavigate();
	const path = useLocation();

	const leftMargin = "pl-12";

	const menu: Menu[] = [
		{ name: "Home", type: "hom", href: "/" },
		{ name: "About me", type: "me", href: "/about-me" },
		{ name: "Education", type: "edu", href: "/education" },
		{ name: "Projects", type: "proj", href: "/projects" },
		{ name: "Contact me", type: "cont", href: "/contact-me" },
	];

	useEffect(() => {
		if (path.pathname) {
			setActiveMenu(menu.find((men) => men.href === path.pathname) ?? menu[0]);
		}
	}, [path.pathname]);

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
					<motion.div
						className={`h-6 w-6 blur-sm rounded-full ${
							activeMenu?.type === val.type ? "bg-gold" : "border border-gold"
						}`}
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 25 }}
					/>

					<AnimatePresence>
						{(activeMenu?.type === val.type || hoveredItem === val.type) && (
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
	);
};

export default AnimatedMenu;
