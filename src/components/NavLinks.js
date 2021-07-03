import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
	font-weight: bold;
	display: inline-block;
	white-space: nowrap;
	margin: 0 1vw;
	transition: all 200ms ease-in;
	position: relative;

	&:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0%;
		content: " ";
		background: #af4261;
		height: 1px;
		transition: all 0.4s ease-in;
	}

	&:hover {
		color: #f3ec78;
		&::after {
			width: 100%;
		}
	}

	@media (max-width: 992px) {
		display: inline-block;
		width: 100%;
		color: white;
		font-weight: bold;
		padding: 1rem 3rem 1rem 3rem;
		font-size: 1.25rem;
		/* z-index: 6; */

		/* &:after {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			width: 0%;
			content: " ";
			background: #f3ec78;
			height: 1px;
			transition: all 0.4s ease-in;
		} */

		&:hover {
			color: #af4261;
			background: linear-gradient(45deg, #f3ec78, #af4261);
			transition: all 0.4s ease-in;
		}
	}
`;

export default function NavLinks() {
	const getLinks = useStaticQuery(graphql`
		query siteQuery {
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

	const links = getLinks.site.siteMetadata.menuLinks;
	const linkList = links.map((link) => (
		<NavLink key={link.name} to={link.link}>
			{link.name}
		</NavLink>
	));

	return <div>{linkList}</div>;
}
