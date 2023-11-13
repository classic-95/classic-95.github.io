import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import HomePostItem from "./HomePostItem";
import media from "../../libs/styles/media";

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

export default function HomeBody() {
	const data = useStaticQuery(graphql`
		query AllMdx {
			allMdx(sort: { frontmatter: { created_at: DESC } }, limit: 100) {
				nodes {
					id
					fields {
						slug
					}
					frontmatter {
						author
						created_at
						description
						thumbnail {
							childImageSharp {
								gatsbyImageData(width: 160)
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
				{(data.allMdx.nodes as Array<any>).map((node) => (
					<HomePostItem key={node.id} slug={node.fields.slug} post={node.frontmatter} />
				))}
			</InnerContainer>
		</Container>
	);
}
