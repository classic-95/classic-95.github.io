import path from "path";
import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import { ContinuedPost } from "./src/types/Common";

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({ actions, node, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === "Mdx") {
		const slug = createFilePath({ node, getNode, basePath: "" }).replace("/ko/", "/");
		const isEn = slug.includes("/en/");
		createNodeField({
			name: "slug",
			node,
			value: `${isEn ? "/en" : ""}/posts${slug.replace("/en/", "/")}`,
		});
	}
};

type QueryType = {
	ko: {
		edges: {
			previous: ContinuedPost;
			node: {
				id: string;
				fields: {
					slug: string;
				};
				internal: {
					contentFilePath: string;
				};
			};
			next: ContinuedPost;
		}[];
	};
	en: {
		edges: {
			previous: ContinuedPost;
			node: {
				id: string;
				fields: {
					slug: string;
				};
				internal: {
					contentFilePath: string;
				};
			};
			next: ContinuedPost;
		}[];
	};
};

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const postTemplate = path.resolve("src/components/post/PostTemplate.tsx");

	const result = await graphql<QueryType>(`
		{
			ko: allMdx(
				filter: {
					fields: { slug: { regex: "/^((?!/en/).)*$/" } }
					frontmatter: { is_private: { eq: false } }
				}
				sort: { frontmatter: { created_at: ASC } }
			) {
				edges {
					next {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					node {
						id
						fields {
							slug
						}
						internal {
							contentFilePath
						}
					}
					previous {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
			en: allMdx(
				filter: {
					fields: { slug: { regex: "/^.*(/en/).*/" } }
					frontmatter: { is_private: { eq: false } }
				}
				sort: { frontmatter: { created_at: ASC } }
			) {
				edges {
					next {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					node {
						id
						fields {
							slug
						}
						internal {
							contentFilePath
						}
					}
					previous {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);

	if (result.errors || !result.data) {
		reporter.panicOnBuild("Error loading MDX result: ", result.errors);
		return;
	}

	[...result.data.ko.edges, ...result.data.en.edges].forEach((edge) =>
		createPage({
			path: edge.node.fields.slug,
			component: `${postTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
			context: { id: edge.node.id, prev: edge.previous, next: edge.next },
		}),
	);
};
