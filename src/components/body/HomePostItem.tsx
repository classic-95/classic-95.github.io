import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useMemo } from "react";
import styled from "styled-components";
import palette from "../../libs/styles/palette";
import media from "../../libs/styles/media";
import dateFormatter from "../../libs/formatter";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 28px 0;
	border-bottom: 1px solid ${palette.gray[3]};

	.thumbnail {
		width: 180px;

		${media.custom(767)} {
			width: 100px;
		}
	}

	&:hover {
		h4 {
			color: ${palette.viloet[6]};
			transition: color 0.2s;
		}
		span {
			color: black;
			transition: color 0.2s;
		}
		.more {
			color: ${palette.viloet[6]};
			transition: color 0.2s;
		}
	}
`;

const LabelContainer = styled.div`
	flex: 1;
	margin-right: 78px;

	${media.custom(767)} {
		margin-right: 60px;
	}
`;

const TitleLabel = styled.h4`
	font-size: 1.125em;
	margin-bottom: 10px;
	overflow: hidden;
	white-space: normal;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	word-break: keep-all;

	${media.custom(1023)} {
		font-size: 1em;
		margin-bottom: 2px;
	}
`;

const Label = styled.span`
	font-size: 0.875em;
	line-height: 1.375rem;
	color: #666;
	overflow: hidden;
	white-space: normal;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	word-break: keep-all;

	${media.custom(1023)} {
		font-size: 0.75em;
	}

	${media.custom(767)} {
		-webkit-line-clamp: 2;
	}
`;

const DateLabel = styled(Label)`
	margin-bottom: 16px;
	${media.custom(1023)} {
		margin-bottom: 9px;
	}
`;

const MoreLabel = styled.span`
	font-size: 0.75em;
	color: ${palette.viloet[2]};
`;

interface Props {
	slug: string;
	post: {
		created_at: string;
		description: string;
		title: string;
		thumbnail: any;
	};
}

export default function HomePostItem({ slug, post }: Props) {
	const image = useMemo(
		() => (post.thumbnail ? getImage(post.thumbnail) : null),
		[post.thumbnail],
	);

	return (
		<Link to={slug}>
			<Container>
				<LabelContainer>
					<TitleLabel>{post.title}</TitleLabel>
					<Label>{post.description}</Label>
					<DateLabel className="date">{dateFormatter(post.created_at)}</DateLabel>
					<MoreLabel className="more">{"더보기 >"}</MoreLabel>
				</LabelContainer>
				{image && <GatsbyImage className="thumbnail" image={image} alt="post thumbnail" />}
			</Container>
		</Link>
	);
}
