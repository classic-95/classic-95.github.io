import React from "react";

interface Props {
	title?: string;
	description?: string;
	pathname?: string;
	created_at?: string;
	updated_at?: string;
	image?: string;
	children?: any;
}

const TITLE = "Flash의 블로그";
const DESCRIPTION = "누구나 쉽게 따라할 수 있는, 남녀노소 모두를 위한 개발 블로그";
const URL = "https://classic-95.com";

const SEO = ({ title, description, pathname, created_at, updated_at, image, children }: Props) => {
	const seo = {
		title: title || TITLE,
		description: description || DESCRIPTION,
		image: `${URL}${image || "/icon.png"}`,
		url: `${URL}${pathname || ""}`,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:card" content="summary" />
			<meta property="twitter:image" content={seo.image} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:site_name" content={seo.title} />
			<meta property="og:image" content={seo.image} />
			<meta name="robots" content="index,follow" />
			<link rel="apple-touch-icon" href="/favicon.ico" />
			{created_at !== undefined && (
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "http://schema.org",
						"@type": "BlogPosting",
						author: {
							"@type": "Person",
							name: "flash",
							logo: null,
						},
						url: seo.url,
						headline: seo.title,
						description: seo.description,
						datePublished: created_at,
						dateModified: updated_at || created_at,
						image: seo.image,
					})}
				</script>
			)}
			{/* 
			<meta name="twitter:image" content={seo.image} />
			 */}
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3926462216067158"
				crossOrigin="anonymous"
			/>
			{children}
		</>
	);
};

export default SEO;
