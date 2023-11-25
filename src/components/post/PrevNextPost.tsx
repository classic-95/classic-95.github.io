import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../libs/styles/media";
import { ContinuedPost, LanguageType } from "../../types/Common";
import PrevNextPostItem from "./PrevNextPostItem";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: space-between;
	justify-content: space-between;
	margin: auto;
	${mediaQuery(767)} {
		flex-direction: column-reverse;
	}
`;

const ItemContainer = styled.div`
	width: 300px;

	${mediaQuery(767)} {
		width: 100%;
		& + & {
			margin-bottom: 1.5rem;
		}
	}
`;

interface Props {
	prev: ContinuedPost | null;
	next: ContinuedPost | null;
	lang: LanguageType;
}

export default function PrevNextPost({ prev, next, lang }: Props) {
	return (
		<Container>
			<ItemContainer>
				<PrevNextPostItem post={prev} right={false} lang={lang} />
			</ItemContainer>
			<ItemContainer>
				<PrevNextPostItem post={next} right lang={lang} />
			</ItemContainer>
		</Container>
	);
}
