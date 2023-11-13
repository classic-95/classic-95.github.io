import React, { HtmlHTMLAttributes, ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";

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

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export default function CommonPageContainer({ children }: Props) {
	return (
		<Container>
			<GlobalStyle />
			{children}
		</Container>
	);
}
