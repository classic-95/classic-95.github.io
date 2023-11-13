import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import palette from "../../libs/styles/palette";
import media from "../../libs/styles/media";

const Container = styled.div`
	width: 100%;
	border-bottom: 1px solid #e6e6e6;

	${media.custom(1199)} {
		padding: 0 34px;
	}

	${media.custom(767)} {
		padding: 0 20px;
	}
`;

const InnerContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	height: 80px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${media.custom(1023)} {
		height: 68px;
	}
	${media.custom(767)} {
		height: 60px;
	}
`;

const Label = styled.h1`
	font-size: 1.25em;
	color: ${palette.viloet[6]};
`;

export default function CommonHeader() {
	return (
		<Container>
			<InnerContainer>
				<Link to="/">
					<Label>잡학다식 블로그</Label>
				</Link>
			</InnerContainer>
		</Container>
	);
}
