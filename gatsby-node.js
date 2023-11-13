const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === "Mdx") {
		const path = createFilePath({ node, getNode, basePath: "" });
		createNodeField({
			name: "slug",
			node,
			value: `/posts${path}`,
		});
	}
};
