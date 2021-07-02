import React from "react";
import styled from "styled-components";

const Card = styled.div`
	width: 100%;
`;
const PageTitle = styled.h1`
	text-align: left;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.5rem;
	padding: 1rem 0;
	color: white;
	background: linear-gradient(45deg, #f3ec78, #af4261);
	background-clip: text;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	-webkit-text-fill-color: transparent;
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
