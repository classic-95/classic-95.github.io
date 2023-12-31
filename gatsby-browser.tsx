import React from "react";
import { GatsbyBrowser } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import CommonHeader from "./src/components/header/CommonHeader";

const Container = styled.div`
	width: 100%;
`;

const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Noto Sans KR";
		padding: 0;
		margin: 0;

		div {
			box-sizing: border-box;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6, 
	p {
		margin: 0;
	}
`;

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
	const { path, pageContext } = element.props;
	const lang = path.includes("/en/") ? "en" : "ko";
	const transition = pageContext.frontmatter
		? pageContext.frontmatter.transition || "#"
		: lang === "ko"
		? `/en${path}`
		: path.replace("/en/", "/");

	return (
		<Container>
			<GlobalStyle />
			<CommonHeader
				lang={lang}
				ko_to={lang === "ko" ? "#" : transition}
				en_to={lang === "en" ? "#" : transition}
			/>
			{element}
		</Container>
	);
};
