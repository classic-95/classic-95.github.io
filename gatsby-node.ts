import path from "path";
import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({ actions, node, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === "Mdx") {
		const slug = createFilePath({ node, getNode, basePath: "" });
		createNodeField({
			name: "slug",
			node,
			value: `/posts${slug}`,
		});
	}
};

type QueryType = {
	allMdx: {
		nodes: {
			id: string;
			fields: {
				slug: string;
			};
			internal: {
				contentFilePath: string;
			};
		}[];
	};
};

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const postTemplate = path.resolve("src/components/post/PostTemplate.tsx");

	const result = await graphql<QueryType>(`
		{
			allMdx {
				nodes {
					id
					fields {
						slug
					}
					internal {
						contentFilePath
					}
				}
			}
		}
	`);

	if (result.errors || !result.data) {
		reporter.panicOnBuild("Error loading MDX result: ", result.errors);
		return;
	}

	result.data.allMdx.nodes.forEach((node) =>
		createPage({
			path: node.fields.slug,
			component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
			context: { id: node.id },
		}),
	);
};
