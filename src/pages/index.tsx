import React from "react";
import CommonHeader from "../components/header/CommonHeader";
import CommonPageContainer from "../components/common/CommonPageContainer";
import HomeBody from "../components/body/HomeBody";
import SEO from "../components/common/SEO";

export default function HomePage() {
	return (
		<CommonPageContainer>
			<CommonHeader />
			<HomeBody />
		</CommonPageContainer>
	);
}

export const Head = () => <SEO title="Flash의 블로그" />;
