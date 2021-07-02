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

	:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0%;
		content: ".";
		color: transparent;
		background: goldenrod;
		height: 1px;
		transition: all 0.4s ease-in;
	}

	:hover {
		color: goldenrod;
		::after {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		display: block;
		color: white;
		font-weight: bold;
		padding: 20px 0;
		font-size: 1.5rem;
		z-index: 6;

		:after {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			width: 0%;
			content: ".";
			color: transparent;
			background: #6e5494;
			height: 1px;
			transition: all 0.4s ease-in;
		}

		:hover {
			color: #6e5494;
			::after {
				width: 100%;
			}
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
