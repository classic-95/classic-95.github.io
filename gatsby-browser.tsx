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
	return (
		<Container>
			<GlobalStyle />
			<CommonHeader
				lang={element.props.path.includes("/en/") ? "en" : "ko"}
				path={element.props.path}
			/>
			{element}
		</Container>
	);
};
