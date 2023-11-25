export type LanguageType = "en" | "ko";

export type ContinuedPost = {
	fields: {
		slug: string;
	};
	frontmatter: {
		title: string;
	};
} | null;
