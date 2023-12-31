import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import media from "../../libs/styles/media";
import HeaderLanguageMenuItem from "./HeaderLanguageMenuItem";

const Container = styled.div`
	position: absolute;
	top: 100%;
	margin-top: 0.5rem;
	right: -2px;
	.menu-wrapper {
		position: relative;
		z-index: 5;
		width: 6rem;
		background: white;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

		.mobile-only {
			display: none;
			${media.medium} {
				display: block;
			}
		}
	}
`;

interface Props {
	visible: boolean;
	ko_to?: string;
	en_to?: string;
	onClose: (e: React.MouseEvent | MouseEvent) => void;
}

export default function HeaderLanguageMenu({ visible, ko_to, en_to, onClose }: Props) {
	if (!visible) return null;
	return (
		<OutsideClickHandler onOutsideClick={onClose}>
			<Container onClick={onClose}>
				<div className="menu-wrapper">
					<HeaderLanguageMenuItem to={ko_to || "#"}>한국어</HeaderLanguageMenuItem>
					<HeaderLanguageMenuItem to={en_to || "#"}>English</HeaderLanguageMenuItem>
				</div>
			</Container>
		</OutsideClickHandler>
	);
}
