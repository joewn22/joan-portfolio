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
	techStack: string[];
	description: string;
	keyHighlights: KeyHighlights[];
}
