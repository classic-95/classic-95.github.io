import React from "react";
import HomeBody from "../../components/body/HomeBody";
import SEO from "../../components/common/SEO";

export default function HomePage() {
	return <HomeBody lang="en" />;
}

export const Head = () => <SEO title="Home" />;
