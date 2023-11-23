import React, { useCallback, useRef } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";
import useToggle from "../../libs/hooks/useToggle";
import media from "../../libs/styles/media";
import { LanguageType } from "../../types/Common";
import HeaderLanguage from "./HeaderLanguage";
import HeaderLanguageMenu from "./HeaderLanguageMenu";

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
	align-items: center;
	justify-content: space-between;

	${media.custom(1023)} {
		height: 68px;
	}
	${media.custom(767)} {
		height: 60px;
	}

	.header-logo {
		height: 35px;
	}
`;

const RightContainer = styled.div`
	position: relative;
`;

interface Props {
	lang: LanguageType;
	path: string;
}

type QueryType = {
	file: {
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData;
		};
	};
};

export default function CommonHeader({ lang, path }: Props) {
	const data = useStaticQuery<QueryType>(graphql`
		{
			file(relativePath: { eq: "preview.png" }) {
				childImageSharp {
					gatsbyImageData(height: 35, quality: 100)
				}
			}
		}
	`);
	const [menuVisible, toggleMenu] = useToggle(false);
	const ref = useRef<HTMLDivElement>(null);

	const onOutsideClick = useCallback(
		(e: React.MouseEvent | MouseEvent) => {
			if (!ref.current) return;
			if (ref.current.contains(e.target as any)) return;
			toggleMenu();
		},
		[toggleMenu],
	);

	return (
		<Container>
			<InnerContainer>
				<Link to={lang === "ko" ? "/" : "/en"}>
					<GatsbyImage
						className="header-logo"
						image={data.file.childImageSharp.gatsbyImageData}
						alt="header-logo"
					/>
				</Link>
				<RightContainer>
					<div ref={ref}>
						<HeaderLanguage lang={lang} onClick={toggleMenu} />
					</div>
					<HeaderLanguageMenu
						visible={menuVisible}
						ko_to={lang === "ko" ? "#" : path.replace("/en/", "/")}
						en_to={lang === "en" ? "#" : `/en${path}`}
						onClose={onOutsideClick}
					/>
				</RightContainer>
			</InnerContainer>
		</Container>
	);
}
