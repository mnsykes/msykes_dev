import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const FooterArea = styled.div`
	padding-bottom: 3rem;
	text-align: center;
	position: relative;
	bottom: 0;
	background: goldenrod;
`;

const FooterTitle = styled.h3`
	color: #fff;
	text-transform: uppercase;
	color: yellow;
`;

export default function Footer() {
	return (
		<FooterArea>
			<div>
				<FooterTitle>Matthew Sykes &copy;2021</FooterTitle>
				<SocialLinks />
			</div>
			<br />
			<div>
				<FooterTitle>Made with: </FooterTitle>
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
