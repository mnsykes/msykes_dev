import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const Card = styled.div`
	border-bottom: 4px solid yellow;
	background: blue;
`;
const PageTitle = styled.h1`
	text-align: left;
	text-transform: uppercase;
	font-weight: bold;
	padding: 1rem;
	color: white;
`;

// Make markdown files for each page
export default function TitleCard() {
	const getTitles = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					menuLinks {
						name
						link
					}
				}
			}
		}
	`);

	const titles = getTitles.site.siteMetadata.menuLinks;
	const titleList = titles.map((title) => <PageTitle>{title.name}</PageTitle>);

	return (
		<div>
			<Card>
				<PageTitle>{titleList}</PageTitle>
			</Card>
		</div>
	);
}
