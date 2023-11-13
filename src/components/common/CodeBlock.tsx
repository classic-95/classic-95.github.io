/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { Highlight, Prism, themes } from "prism-react-renderer";
import palette from "../../libs/styles/palette";

(typeof global !== "undefined" ? global : window).Prism = Prism;
await import("prismjs/components/prism-bash");
await import("prismjs/components/prism-python");
await import("prismjs/components/prism-java");
await import("prismjs/components/prism-diff");

const Pre = styled.div`
	text-align: left;
	overflow-x: scroll;
	padding: 1em;

	.token-line {
	}
`;

const Line = styled.div`
	display: flex;
	padding: 2px 0;

	&:hover {
		.no {
			color: ${palette.gray[0]};
		}
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const LineNo = styled.span`
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
	color: gray;
`;

const LineContent = styled.span`
	display: table-cell;
`;

const CodeBlock = (
	props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
) => {
	const matches = (props!.className || "").match(/language-(?<lang>.*)/);

	return (
		<Highlight
			code={((props.children || "") as string).trim()}
			language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""}
			theme={themes.vsDark}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre className={className} style={{ ...style }}>
					{tokens.map((line, i) => (
						<Line key={i} {...getLineProps({ line, key: i })}>
							<LineNo className="no">{i + 1}</LineNo>
							<LineContent>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</LineContent>
						</Line>
					))}
				</Pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;
