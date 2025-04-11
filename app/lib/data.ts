import { WorkExperience } from "./type";

export const experiences: WorkExperience[] = [
	{
		id: 1,
		heading: "Intro to Mobile Applications",
		techStack: ["React Native", "Expo", ".NET", "C#"],
		description:
			"I took ownership of several end-to-end features on Zoie Health —a React Native mobile app focused on women’s health and wellness. The app was already up and running, which made it the perfect environment to quickly learn, adapt, and contribute meaningfully from day one.",
		keyHighlights: [
			{
				id: 1,
				icons: "/assets/emergency-response.png",
				title: "Emergency Response",
				description:
					"Integrated the AURA API with Google Location Services to allow users to request emergency help directly from their app.",
			},
			{
				id: 2,
				icons: "/assets/cycle-tracker.png",
				title: "Cycle Tracker",
				description:
					"Developed a personalized cycle tracker, integrating a C# .NET backend and custom APIs for dynamic, user-specific data.",
			},
			{
				id: 3,
				icons: "/assets/emoji-chat.png",
				title: "Community Chat",
				description:
					"Engineered real-time emoji reactions to boost engagement in user conversations.",
			},
			{
				id: 4,
				icons: "/assets/gamification.png",
				title: "Gamification Engine",
				description:
					"Built a badge and reward system that encouraged daily app usage and drove user retention.",
			},
		],
	},
	// {
	// 	id: 2,
	// 	heading: "Intro to Mobile Applications",
	// 	techStack: ["React Native", "Expo", ".NET", "C#"],
	// 	description:
	// 		"I took ownership of several end-to-end features on Zoie Health —a React Native mobile app focused on women’s health and wellness. The app was already up and running, which made it the perfect environment to quickly learn, adapt, and contribute meaningfully from day one.",
	// 	keyHighlights: [
	// 		{
	// 			id: 5,
	// 			icons: "/assets/emergency-response.png",
	// 			title: "Emergency Response",
	// 			description:
	// 				"Integrated the AURA API with Google Location Services to allow users to request emergency help directly from their app.",
	// 		},
	// 		{
	// 			id: 6,
	// 			icons: "/assets/cycle-tracker.png",
	// 			title: "Cycle Tracker",
	// 			description:
	// 				"Developed a personalized cycle tracker, integrating a C# .NET backend and custom APIs for dynamic, user-specific data.",
	// 		},
	// 		{
	// 			id: 7,
	// 			icons: "/assets/emoji-chat.png",
	// 			title: "Community Chat",
	// 			description:
	// 				"Engineered real-time emoji reactions to boost engagement in user conversations.",
	// 		},
	// 		{
	// 			id: 8,
	// 			icons: "/assets/gamification.png",
	// 			title: "Gamification Engine",
	// 			description:
	// 				"Built a badge and reward system that encouraged daily app usage and drove user retention.",
	// 		},
	// 	],
	// },
];
