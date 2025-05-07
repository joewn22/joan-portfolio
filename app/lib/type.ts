export interface Menu {
	name: string;
	type: "hom" | "proj" | "me" | "cont" | "edu";
	href: string;
}

export interface PDF {
	title: string;
	href: string;
}

export interface KeyHighlights {
	id: number;
	icons: string;
	title: string;
	description: string;
}

export interface WorkExperience {
	id: number;
	heading: string;
	href?: string;
	techStack: string[];
	description: string;
	keyHighlights: KeyHighlights[];
}

export interface Projects {
	id: number;
	heading: string;
	type: "web" | "mobile";
	urls: {
		android?: string;
		ios?: string;
		web?: string;
		figma?: string;
	};
	description: string;
	imageUrl?: string;
	stack: string[];
}
