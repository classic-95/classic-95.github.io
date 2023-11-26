import type { GatsbyConfig } from "gatsby";

type QueryType = {
	query: {
		allMdx: {
			nodes: {
				excerpt: string;
				fields: { slug: string };
				frontmatter: {
					title: string;
					description: string;
					created_at: string;
				};
			}[];
		};
		site: {
			siteMetadata: {
				siteUrl: string;
			};
		};
	};
};

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Classic95의 블로그",
		author: "Classic95",
		siteUrl: "https://classic-95.com",
		description: "누구나 쉽게 따라할 수 있는, 남녀노소 모두를 위한 개발 블로그",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: false,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "contents/images/logo.png",
			},
		},
		{
			resolve: "gatsby-plugin-feed",
			options: {
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }: QueryType) =>
							allMdx.nodes.map((node) => ({
								title: node.frontmatter.title,
								description: node.frontmatter.description,
								date: node.frontmatter.created_at,
								url: site.siteMetadata.siteUrl + node.fields.slug,
								guid: site.siteMetadata.siteUrl + node.fields.slug,
								custom_elements: [{ "content:encoded": node.excerpt }],
								copyright: `© 2023-${new Date().getFullYear()} Classic95 All rights reserved.`,
							})),
						query: `
						  	{
								allMdx(
									filter: {frontmatter: {is_private: {eq: false}}}
									sort: {frontmatter: {created_at: DESC}}
									limit: 1000
								) {
									nodes {
										excerpt(pruneLength: 1000)
										fields { 
											slug 
										}
										frontmatter {
											title
											description
											created_at
										}
									}
								}
								site {
									siteMetadata {
										siteUrl	
									}
								}
						  	}
						`,
						output: "/feed.xml",
						title: "Classic95의 블로그",
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
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-TSJBST6MQ3", // Google Analytics / GA
					// "AW-CONVERSION_ID", // Google Ads / Adwords / AW
					// "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				// gtagConfig: {
				// 	optimize_id: "OPT_CONTAINER_ID",
				// 	anonymize_ip: true,
				// 	cookie_expires: 0,
				// },
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
					// Setting this parameter is also optional
					// respectDNT: true,
					// Avoids sending pageview hits from custom paths
					// exclude: ["/preview/**", "/do-not-track/me/too/"],
					// Defaults to https://www.googletagmanager.com
					// origin: "YOUR_SELF_HOSTED_ORIGIN",
					// Delays processing pageview events on route update (in milliseconds)
					// delayOnRouteUpdate: 0,
				},
			},
		},
	],
};

export default config;
