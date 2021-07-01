import React from "react";
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
export default function TitleCard(props) {
	return (
		<div>
			<Card>
				<PageTitle>{props.title}</PageTitle>
			</Card>
		</div>
	);
}
