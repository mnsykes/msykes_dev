import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const FooterArea = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	height: 10vh;
	justify-content: space-between;
	text-transform: uppercase;
	border-top: 3px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(45deg, #f3ec78, #af4261);
	margin: 3rem auto 0 auto;
	padding: 2vw;
	align-self: center;

	@media (max-width: 992px) {
		height: 8vh;
	}
`;

const FooterTitle = styled.h3`
	color: #f8d96a;
	text-transform: uppercase;
`;

export default function Footer() {
	return (
		<FooterArea>
			<div>
				<FooterTitle>Matthew Sykes &copy;2021</FooterTitle>
				<br />
				<SocialLinks />
			</div>
			<br />
			<div>
				<FooterTitle>Made with: </FooterTitle>
				<br />
				<a href="https://www.gatsbyjs.com/">
					<StaticImage
						src="../images/icon.png"
						alt="Gatsby logo"
						placeholder="blurred"
						width={50}
						height={50}
					/>
				</a>
			</div>
		</FooterArea>
	);
}
