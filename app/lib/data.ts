import { Menu, Projects, WorkExperience } from "./type";

export const menu: Menu[] = [
	{ name: "Home", type: "hom", href: "/" },
	{ name: "About me", type: "me", href: "/about-me" },
	{ name: "Education", type: "edu", href: "/education" },
	{ name: "Projects", type: "proj", href: "/projects" },
	{ name: "Contact me", type: "cont", href: "/contact-me" },
];

export const projects: Projects[] = [
	{
		id: 1,
		heading: "Appload App",
		type: "mobile",
		urls: {
			ios: "https://apps.apple.com/za/app/appload/id6451194589",
			android:
				"https://play.google.com/store/apps/details?id=com.apploadmobile.app&hl=en_ZA",
		},
		description:
			"A real-time logistics platform connecting clients to transporters with ease. Appload streamlines delivery coordination with live updates, offers, and location tracking. Designed and scaled as a fully native iOS and Android experience for efficiency on the go.",
	},
	{
		id: 2,
		heading: "SAVA Mobile App",
		type: "mobile",
		urls: {
			ios: "https://apps.apple.com/za/app/sava-mobile/id6670749596",
			android:
				"https://play.google.com/store/apps/details?id=com.africa.sava.mobile",
		},
		description:
			"A fintech app built for expense management and smart company card controls. Users can instantly manage limits, freeze cards, and track spend in real time. Crafted for mobile-first financial teams with secure cross-platform tech.",
	},
	{
		id: 3,
		heading: "PEAK Mobile App",
		type: "mobile",
		urls: {
			ios: "https://apps.apple.com/za/app/ahc-peak/id6692624993",
			android:
				"https://play.google.com/store/apps/details?id=com.ahc.peak.mobile",
		},
		description:
			"A mobile-first learning management platform built to help companies onboard and upskill their teams. PEAK enables employees to access training content anytime, anywhere—driving engagement, retention, and workplace performance from day one.",
	},
	{
		id: 4,
		heading: "SAVA Website",
		type: "web",
		urls: {
			web: "https://sava.africa/",
		},
		description:
			"A sleek dashboard that gives businesses real-time insight into company spending. The web platform simplifies finance ops through clean UI, data visualizations, and secure admin controls.",
		imageUrl:
			"https://i.postimg.cc/BvWPBmRW/Screenshot-2025-04-22-at-08-54-23.png",
	},
	{
		id: 5,
		heading: "Forge Web App",
		type: "web",
		urls: {
			web: "https://forgebybrave.ai/",
		},
		description:
			"An AI-powered platform built for marketing teams to ideate, collaborate, and launch campaigns. With strategy boards, briefs, and creative planning tools, Forge helps teams move from idea to execution faster.",
		imageUrl:
			"https://i.postimg.cc/XJ4ZTpVQ/Screenshot-2025-04-22-at-08-54-05.png",
	},
	{
		id: 6,
		heading: "Zoie Health",
		type: "mobile",
		urls: {
			ios: "https://zoiehealth.com",
		},
		description:
			"A mobile-first women’s health platform offering cycle tracking, emergency services, and community support. Zoie is built to give users confidence and control in their health journey, personalized to each user’s needs.",
	},
];

export const experiences: WorkExperience[] = [
	{
		id: 1,
		heading: "Zoie Health",
		techStack: ["React Native", "Expo", ".NET", "C#", "API Integration"],
		href: "https://zoiehealth.com",
		description: `A React Native mobile application built to support women’s health and wellness. The platform integrates personalized features that empower users to manage their health journey with confidence. Launched on an existing foundation, this solution was enhanced with new features that improved accessibility, engagement, and safety.`,
		keyHighlights: [
			{
				id: 1,
				icons: "https://i.postimg.cc/gJk7ZbSr/emergency-response.png",
				title: "Emergency Response",
				description:
					"Seamlessly integrated with the AURA API and Google Location Services, this feature allows users to instantly request emergency assistance from within the app.",
			},
			{
				id: 2,
				icons: "https://i.postimg.cc/PqH9dw1W/cycle-tracker.png",
				title: "Cycle Tracker",
				description:
					"An intelligent, personalized cycle tracking tool powered by a C# .NET backend, enabling dynamic and secure health tracking for each user.",
			},
			{
				id: 3,
				icons: "https://i.postimg.cc/hG0wvt0H/emoji-chat.png",
				title: "Community Chat",
				description:
					"A real-time community space enhanced with emoji-based reactions to boost user interaction and foster emotional connection.",
			},
			{
				id: 4,
				icons: "https://i.postimg.cc/tJ8vwZXV/gamification.png",
				title: "Gamification Engine",
				description:
					"Introduced a reward system with badges and daily streaks to increase user retention and incentivize health engagement.",
			},
		],
	},
	{
		id: 2,
		heading: "Appload App",
		techStack: [
			"WebSocktes",
			"Kotlin",
			"SwiftUI",
			"Figma",
			"Firebase",
			"Azure DevOps",
		],
		href: "https://apps.apple.com/za/app/appload/id6451194589",
		description:
			"A fully native mobile logistics platform designed to seamlessly connect clients with service providers in real time. Built with scalability and user experience at its core, the solution empowers clients to post orders, track service responses, and manage deliveries end-to-end. Since its inception, the app has evolved through multiple sprints, with strategic oversight across engineering, design, and product planning to meet the dynamic needs of the logistics industry.",
		keyHighlights: [
			{
				id: 5,
				icons: "https://i.postimg.cc/jS0kh7gp/order.png",
				title: "Order Management",
				description:
					"Built a scalable order flow for cargo bookings with pin drops, distance calculation, and autofill—powered by Google Maps SDK.",
			},
			{
				id: 6,
				icons: "https://i.postimg.cc/R0Gs9bSm/real-time.png",
				title: "Real-Time Messaging",
				description:
					"Enabled real-time chat between clients, transporters, and support boosting delivery speed and operational clarity.",
			},
			{
				id: 7,
				icons: "https://i.postimg.cc/HkXFG28W/design.png",
				title: "Product Design",
				description:
					"Designed and refined core user flows, ensuring the interface aligned with user needs and business goals.",
			},
			{
				id: 8,
				icons: "https://i.postimg.cc/8Pr0WHHd/local.png",
				title: "Localization Support",
				description:
					"Delivered a scalable multilingual system using resource framework, improving accessibility and user satisfaction across global markets.",
			},
		],
	},
	{
		id: 3,
		heading: "SAVA Mobile App",
		techStack: [
			"WebSocktes",
			"Kotlin",
			"SwiftUI",
			"Figma",
			"Firebase",
			"Azure DevOps",
		],
		href: "https://apps.apple.com/za/app/sava-mobile/id6670749596",
		description:
			"A fully native mobile logistics platform designed to seamlessly connect clients with service providers in real time. Built with scalability and user experience at its core, the solution empowers clients to post orders, track service responses, and manage deliveries end-to-end. Since its inception, the app has evolved through multiple sprints, with strategic oversight across engineering, design, and product planning to meet the dynamic needs of the logistics industry.",
		keyHighlights: [
			{
				id: 5,
				icons: "https://i.postimg.cc/jS0kh7gp/order.png",
				title: "Order Management",
				description:
					"Built a scalable order flow for cargo bookings with pin drops, distance calculation, and autofill—powered by Google Maps SDK.",
			},
			{
				id: 6,
				icons: "https://i.postimg.cc/R0Gs9bSm/real-time.png",
				title: "Real-Time Messaging",
				description:
					"Enabled real-time chat between clients, transporters, and support boosting delivery speed and operational clarity.",
			},
			{
				id: 7,
				icons: "https://i.postimg.cc/HkXFG28W/design.png",
				title: "Product Design",
				description:
					"Designed and refined core user flows, ensuring the interface aligned with user needs and business goals.",
			},
			{
				id: 8,
				icons: "https://i.postimg.cc/8Pr0WHHd/local.png",
				title: "Localization Support",
				description:
					"Delivered a scalable multilingual system using resource framework, improving accessibility and user satisfaction across global markets.",
			},
		],
	},
	{
		id: 4,
		heading: "PEAK Mobile App",
		techStack: [
			"WebSocktes",
			"Kotlin",
			"SwiftUI",
			"Figma",
			"Firebase",
			"Azure DevOps",
		],
		href: "https://apps.apple.com/za/app/ahc-peak/id6692624993",
		description:
			"A fully native mobile logistics platform designed to seamlessly connect clients with service providers in real time. Built with scalability and user experience at its core, the solution empowers clients to post orders, track service responses, and manage deliveries end-to-end. Since its inception, the app has evolved through multiple sprints, with strategic oversight across engineering, design, and product planning to meet the dynamic needs of the logistics industry.",
		keyHighlights: [
			{
				id: 5,
				icons: "https://i.postimg.cc/jS0kh7gp/order.png",
				title: "Order Management",
				description:
					"Built a scalable order flow for cargo bookings with pin drops, distance calculation, and autofill—powered by Google Maps SDK.",
			},
			{
				id: 6,
				icons: "https://i.postimg.cc/R0Gs9bSm/real-time.png",
				title: "Real-Time Messaging",
				description:
					"Enabled real-time chat between clients, transporters, and support boosting delivery speed and operational clarity.",
			},
			{
				id: 7,
				icons: "https://i.postimg.cc/HkXFG28W/design.png",
				title: "Product Design",
				description:
					"Designed and refined core user flows, ensuring the interface aligned with user needs and business goals.",
			},
			{
				id: 8,
				icons: "https://i.postimg.cc/8Pr0WHHd/local.png",
				title: "Localization Support",
				description:
					"Delivered a scalable multilingual system using resource framework, improving accessibility and user satisfaction across global markets.",
			},
		],
	},
	{
		id: 4,
		heading: "SAVA Website",
		techStack: [
			"WebSocktes",
			"Kotlin",
			"SwiftUI",
			"Figma",
			"Firebase",
			"Azure DevOps",
		],
		href: "https://sava.africa/",
		description:
			"A fully native mobile logistics platform designed to seamlessly connect clients with service providers in real time. Built with scalability and user experience at its core, the solution empowers clients to post orders, track service responses, and manage deliveries end-to-end. Since its inception, the app has evolved through multiple sprints, with strategic oversight across engineering, design, and product planning to meet the dynamic needs of the logistics industry.",
		keyHighlights: [
			{
				id: 5,
				icons: "https://i.postimg.cc/jS0kh7gp/order.png",
				title: "Order Management",
				description:
					"Built a scalable order flow for cargo bookings with pin drops, distance calculation, and autofill—powered by Google Maps SDK.",
			},
			{
				id: 6,
				icons: "https://i.postimg.cc/R0Gs9bSm/real-time.png",
				title: "Real-Time Messaging",
				description:
					"Enabled real-time chat between clients, transporters, and support boosting delivery speed and operational clarity.",
			},
			{
				id: 7,
				icons: "https://i.postimg.cc/HkXFG28W/design.png",
				title: "Product Design",
				description:
					"Designed and refined core user flows, ensuring the interface aligned with user needs and business goals.",
			},
			{
				id: 8,
				icons: "https://i.postimg.cc/8Pr0WHHd/local.png",
				title: "Localization Support",
				description:
					"Delivered a scalable multilingual system using resource framework, improving accessibility and user satisfaction across global markets.",
			},
		],
	},
	{
		id: 4,
		heading: "Forge Web App",
		techStack: [
			"WebSocktes",
			"Kotlin",
			"SwiftUI",
			"Figma",
			"Firebase",
			"Azure DevOps",
		],
		href: "https://forgebybrave.ai/",
		description:
			"A fully native mobile logistics platform designed to seamlessly connect clients with service providers in real time. Built with scalability and user experience at its core, the solution empowers clients to post orders, track service responses, and manage deliveries end-to-end. Since its inception, the app has evolved through multiple sprints, with strategic oversight across engineering, design, and product planning to meet the dynamic needs of the logistics industry.",
		keyHighlights: [
			{
				id: 5,
				icons: "https://i.postimg.cc/jS0kh7gp/order.png",
				title: "Order Management",
				description:
					"Built a scalable order flow for cargo bookings with pin drops, distance calculation, and autofill—powered by Google Maps SDK.",
			},
			{
				id: 6,
				icons: "https://i.postimg.cc/R0Gs9bSm/real-time.png",
				title: "Real-Time Messaging",
				description:
					"Enabled real-time chat between clients, transporters, and support boosting delivery speed and operational clarity.",
			},
			{
				id: 7,
				icons: "https://i.postimg.cc/HkXFG28W/design.png",
				title: "Product Design",
				description:
					"Designed and refined core user flows, ensuring the interface aligned with user needs and business goals.",
			},
			{
				id: 8,
				icons: "https://i.postimg.cc/8Pr0WHHd/local.png",
				title: "Localization Support",
				description:
					"Delivered a scalable multilingual system using resource framework, improving accessibility and user satisfaction across global markets.",
			},
		],
	},
	// {
	// 	id: 3,
	// 	heading: "Honorable Mentions",
	// 	techStack: [
	// 		"PostgreSQL",
	// 		"Agile Delivery & Sprint Planning",
	// 		"Nats.io",
	// 		"App Store Optimization (ASO)",
	// 	],
	// 	description:
	// 		'In 2024, I led product and frontend development on <a href="https://apps.apple.com/za/app/ahc-peak/id6692624993">PEAK</a>, an EdTech platform focused on learner success. I balanced user needs, product goals, and technical execution—shaping the experience from design to delivery. <br/> I also led the frontend of <a href="https://apps.apple.com/za/app/sava-mobile/id6670749596">SAVA</a>, a FinTech mobile app, handling API integration and building a clean, high-performing UI tailored for financial workflows. For both projects, I created the app store visuals for Google Play and the App Store—highlighting core features and enhancing discoverability.',
	// 	keyHighlights: [
	// 		{
	// 			id: 9,
	// 			icons: "https://i.postimg.cc/qR516h6Z/strategy.png",
	// 			title: "Strategy & Design",
	// 			description:
	// 				"Collaborated with stakeholders to build user-first experiences and align product decisions with learning outcomes.",
	// 		},
	// 		{
	// 			id: 10,
	// 			icons: "https://i.postimg.cc/L4WWn7z6/lead.png",
	// 			title: "Team Leadership",
	// 			description:
	// 				"Directed a cross-functional engineering team through agile sprints, reviews, and delivery milestones.",
	// 		},
	// 		{
	// 			id: 11,
	// 			icons: "https://i.postimg.cc/500PtqyC/rocket.png",
	// 			title: "Ownership",
	// 			description:
	// 				"Managed the product lifecycle—from early concept and wireframes to final deployment across Google Play and App Store.",
	// 		},
	// 		{
	// 			id: 12,
	// 			icons: "https://i.postimg.cc/9QdggQsr/product.png",
	// 			title: "Product Vision",
	// 			description:
	// 				"Identified core user needs and mapped out features to guide the products and engineers.",
	// 		},
	// 	],
	// },
];
