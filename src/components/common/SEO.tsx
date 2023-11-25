import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
	title?: string;
	description?: string;
	pathname?: string;
	created_at?: string;
	updated_at?: string;
	image?: string;
	children?: any;
}

type QueryType = {
	site: {
		siteMetadata: {
			author: string;
			description: string;
			siteUrl: string;
			title: string;
		};
	};
	file: {
		childImageSharp: {
			fixed: { src: string };
		};
	};
};

const SEO = ({ title, description, pathname, created_at, updated_at, image, children }: Props) => {
	const { site, file } = useStaticQuery<QueryType>(graphql`
		{
			site {
				siteMetadata {
					author
					description
					siteUrl
					title
				}
			}
			file(relativePath: { eq: "preview.png" }) {
				childImageSharp {
					fixed(quality: 100) {
						src
					}
				}
			}
		}
	`);

	const seo = {
		author: site.siteMetadata.author,
		title: title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title,
		description: description || site.siteMetadata.description,
		image: `${site.siteMetadata.siteUrl}${image || file.childImageSharp.fixed.src}`,
		url: `${site.siteMetadata.siteUrl}${pathname || ""}`,
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
							name: seo.author,
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
			<meta
				name="google-site-verification"
				content="2NEjQXuPpAZn1qBwWaCQCW049bja-eAPjfpGZg-aTF4"
			/>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3926462216067158"
				crossOrigin="anonymous"
			/>
			<meta
				name="naver-site-verification"
				content="c9c69a7d089e0de9420276fed17efd10e80d8dce"
			/>
			{children}
		</>
	);
};

export default SEO;
