import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Logo = styled.h1`
	padding-top: 1.5rem;
	background: linear-gradient(45deg, #f3ec78, #af4261);
	background-clip: text;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	-webkit-text-fill-color: transparent;

	&:hover {
		background: linear-gradient(to left, #f3ec78, #af4261);
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}
`;

const Navigation = styled.nav`
	display: flex;
	height: 10vh;
	position: relative;
	justify-content: space-between;
	text-transform: uppercase;
	border-bottom: 3px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(45deg, #f3ec78, #af4261);
	margin: 0 auto 3rem auto;
	padding: 0 5vw;
	z-index: 2;
	align-self: center;

	@media (max-width: 992px) {
		height: 8vh;
	}
`;

const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;

	@media (max-width: 992px) {
		display: flex;
	}
`;

const Navbox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 992px) {
		flex-direction: column;
		width: 70%;
		justify-content: flex-start;
		position: fixed;
		padding-top: 5vh;
		background: linear-gradient(180deg, #f3ec78, #af4261);
		transition: all 0.3s ease-in;
		top: 8vh;
		left: ${(props) => (props.open ? "-100%" : "0")};
	}
`;

const Hamburger = styled.div`
	background-color: #111;
	width: 30px;
	height: 3px;
	transition: all 0.3s linear;
	align-self: center;
	position: relative;
	transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

	&::before,
	&::after {
		width: 30px;
		height: 3px;
		background-color: #111;
		content: "";
		position: absolute;
		transition: all 0.3s linear;
	}

	&::before {
		transform: ${(props) => (props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)")};
		top: -10px;
	}

	&::after {
		opacity: ${(props) => (props.open ? "0" : "1")};
		transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
		top: 10px;
	}
`;

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<Navigation>
			<div>
				<Link to="/">
					<Logo>M_Sykes.Dev</Logo>
				</Link>
			</div>
			<Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
				{navbarOpen ? <Hamburger open /> : <Hamburger />}
			</Toggle>
			{navbarOpen ? (
				<Navbox>
					<NavLinks />
				</Navbox>
			) : (
				<Navbox open>
					<NavLinks />
				</Navbox>
			)}
		</Navigation>
	);
}
