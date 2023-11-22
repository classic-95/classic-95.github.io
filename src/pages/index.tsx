import React from "react";
import HomeBody from "../components/body/HomeBody";
import CommonPageContainer from "../components/common/CommonPageContainer";
import SEO from "../components/common/SEO";
import CommonHeader from "../components/header/CommonHeader";

export default function HomePage() {
	return (
		<CommonPageContainer>
			<CommonHeader />
			<HomeBody />
		</CommonPageContainer>
	);
}

export const Head = () => <SEO title="Classic95의 블로그" />;
