import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getHighlightedWords(keyHighlightId: number) {
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
