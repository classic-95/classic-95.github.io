import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";
import media from "../../libs/styles/media";
import HomePostItem from "./HomePostItem";

const Container = styled.div`
	width: 100%;
`;

const InnerContainer = styled.div`
	max-width: 860px;
	margin: auto;
	padding-top: 75px;

	${media.custom(1199)} {
		max-width: 928px;
		padding: 75px 34px 0;
	}

	${media.custom(1023)} {
		max-width: 928px;
		padding-top: 50px;
	}
`;

type QueryType = {
	allMdx: {
		nodes: {
			fields: {
				slug: string;
			};
			frontmatter: {
				created_at: string;
				description: string;
				thumbnail: {
					childImageSharp: {
						gatsbyImageData: IGatsbyImageData;
					};
				};
				title: string;
			};
		}[];
	};
};

export default function HomeBody() {
	const data = useStaticQuery<QueryType>(graphql`
		query AllMdx {
			allMdx(sort: { frontmatter: { created_at: DESC } }, limit: 100) {
				nodes {
					fields {
						slug
					}
					frontmatter {
						created_at
						description
						thumbnail {
							childImageSharp {
								gatsbyImageData(width: 180, quality: 100)
							}
						}
						title
					}
				}
			}
		}
	`);

	return (
		<Container>
			<InnerContainer>
				{data.allMdx.nodes.map((node) => (
					<HomePostItem
						key={node.fields.slug}
						slug={node.fields.slug}
						post={node.frontmatter}
					/>
				))}
			</InnerContainer>
		</Container>
	);
}
