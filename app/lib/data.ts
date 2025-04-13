import { Menu, WorkExperience } from "./type";

export const menu: Menu[] = [
	{ name: "Home", type: "hom", href: "/" },
	{ name: "About me", type: "me", href: "/about-me" },
	{ name: "Education", type: "edu", href: "/education" },
	{ name: "Projects", type: "proj", href: "/projects" },
	{ name: "Contact me", type: "cont", href: "/contact-me" },
];

export const experiences: WorkExperience[] = [
	{
		id: 1,
		heading: "Intro to Mobile Applications",
		techStack: ["React Native", "Expo", ".NET", "C#", "API Integration"],
		description:
			'I took ownership of several end-to-end features on <a href="https://zoiehealth.com/">Zoie Health</a> —a React Native mobile app focused on women’s health and wellness. <br/> The app was already up and running, which made it the perfect environment to quickly learn, adapt, and contribute meaningfully from day one.',
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
	{
		id: 2,
		heading: "Contributor to Lead Engineer",
		techStack: [
			"WebSocktes",
			"Kotlin",
			"SwiftUI",
			".NET",
			"C#",
			"Figma",
			"Firebase",
			"Azure DevOps",
		],
		description:
			'In 2023, I stepped into a mid-level role at Bridge Labs and took the lead on my first fully native mobile app —  <a href="https://apps.apple.com/za/app/appload/id6451194589">Appload</a>, a logistics platform that connects clients with service providers in real time. <br/> Initially a core contributor, I later became the Lead Engineer, driving sprint planning, code reviews, product design, and feature development.',
		keyHighlights: [
			{
				id: 9,
				icons: "/assets/order.png",
				title: "Order Management",
				description:
					"Built a scalable order flow for cargo bookings with pin drops, distance calculation, and autofill—powered by Google Maps SDK.",
			},
			{
				id: 10,
				icons: "/assets/real-time.png",
				title: "Real-Time Messaging",
				description:
					"Enabled real-time chat between clients, transporters, and support boosting delivery speed and operational clarity.",
			},
			{
				id: 11,
				icons: "/assets/design.png",
				title: "Product Design",
				description:
					"Designed and refined core user flows, ensuring the interface aligned with user needs and business goals.",
			},
			{
				id: 12,
				icons: "/assets/local.png",
				title: "Localization Support",
				description:
					"Delivered a scalable multilingual system using resource framework, improving accessibility and user satisfaction across global markets.",
			},
		],
	},
	{
		id: 3,
		heading: "Honorable Mentions",
		techStack: [
			"PostgreSQL",
			"Agile Delivery & Sprint Planning",
			"Nats.io",
			"App Store Optimization (ASO)",
		],
		description:
			'In 2024, I led product and frontend development on <a href="https://apps.apple.com/za/app/ahc-peak/id6692624993">PEAK</a>, an EdTech platform focused on learner success. I balanced user needs, product goals, and technical execution—shaping the experience from design to delivery. <br/> I also led the frontend of <a href="https://apps.apple.com/za/app/sava-mobile/id6670749596">SAVA</a>, a FinTech mobile app, handling API integration and building a clean, high-performing UI tailored for financial workflows. For both projects, I created the app store visuals for Google Play and the App Store—highlighting core features and enhancing discoverability.',
		keyHighlights: [
			{
				id: 13,
				icons: "/assets/strategy.png",
				title: "Strategy & Design",
				description:
					"Collaborated with stakeholders to build user-first experiences and align product decisions with learning outcomes.",
			},
			{
				id: 14,
				icons: "/assets/lead.png",
				title: "Team Leadership",
				description:
					"Directed a cross-functional engineering team through agile sprints, reviews, and delivery milestones.",
			},
			{
				id: 15,
				icons: "/assets/rocket.png",
				title: "Ownership",
				description:
					"Managed the product lifecycle—from early concept and wireframes to final deployment across Google Play and App Store.",
			},
			{
				id: 16,
				icons: "/assets/product.png",
				title: "Product Vision",
				description:
					"Identified core user needs and mapped out features to guide the products and engineers.",
			},
		],
	},
];
