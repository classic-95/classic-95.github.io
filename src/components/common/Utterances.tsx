import React, { createRef, useLayoutEffect } from "react";
import Styled from "styled-components";

const src = "https://utteranc.es/client.js";

const Container = Styled.div`
    max-width: 860px;
    width: 100%;
    margin: auto;
`;

const Utterances = React.memo(() => {
	const containerRef = createRef<HTMLDivElement>();

	useLayoutEffect(() => {
		const utterances = document.createElement("script");

		const attributes = {
			src,
			repo: "classic-95/blog-comment",
			"issue-term": "pathname",
			label: "comment",
			theme: "github-light",
			crossOrigin: "anonymous",
			async: "true",
		};

		Object.entries(attributes).forEach(([key, value]) => {
			utterances.setAttribute(key, value);
		});

		containerRef.current?.appendChild(utterances);
	}, [containerRef]);

	return <Container ref={containerRef} />;
});

Utterances.displayName = "Utterances";

export default Utterances;
