import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Flash의 블로그",
		author: "flash",
		siteUrl: "https://classic-95.com",
		description: "누구나 쉽게 따라할 수 있는, 남녀노소 모두를 위한 개발 블로그",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		{
			resolve: "gatsby-plugin-feed",
			options: {
				query: `
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
							}
						}
					}
				`,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map(
								(edge: {
									node: {
										frontmatter: { created_at: string };
										excerpt: string;
										fields: { slug: string };
										body: string;
									};
								}) => {
									return {
										...edge.node.frontmatter,
										description: edge.node.excerpt.substring(0, 400),
										date: edge.node.frontmatter.created_at,
										url: site.siteMetadata.siteUrl + edge.node.fields.slug,
										guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
										custom_elements: [{ "content:encoded": edge.node.body }],
										copyright: `© 2023-${new Date().getFullYear()} flash All rights reserved.`,
									};
								},
							);
						},
						query: `
						  {
							allMdx(
							  sort: {frontmatter: {created_at: DESC}}
							  limit: 1000
							) {
							  edges {
								node {
								  excerpt
								  body
								  fields { slug }
								  frontmatter {
									title
									created_at
								  }
								}
							  }
							}
						  }
						`,
						output: "/feed.xml",
						title: "Flash의 블로그",
						site_url: `https://classic-95.com?utm_source=blog-feed&utm_medium=feed&utm_campaign=feed`,
						description: "누구나 쉽게 따라할 수 있는, 남녀노소 모두를 위한 개발 블로그",
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 860,
						},
					},
					"gatsby-remark-autolink-headers",
				],
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./contents/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: "./contents/posts/",
			},
			__key: "posts",
		},
		{
			resolve: "gatsby-omni-font-loader",
			options: {
				enableListener: true,
				preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
				web: [
					{
						name: "Noto Sans KR",
						file: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600&display=swap",
					},
				],
			},
		},
	],
};

export default config;
