import React, { useState } from "react";
import { Link } from "gatsby";
import { logo, logoLink } from "./compstyles/nav.module.scss";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Navigation = styled.nav`
	display: flex;
	height: 10vh;
	background-color: #fff;
	position: relative;
	justify-content: space-between;
	text-transform: uppercase;
	border-bottom: 2px solid #33333320;
	margin: 0 auto 3rem auto;
	padding: 0 5vw;
	z-index: 2;
	align-self: center;

	@media (max-width: 768px) {
		position: sticky;
		height: 8vh;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
	}
`;

const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;
	padding: 0 10vw;

	@media (max-width: 768px) {
		display: flex;
	}
`;

const Navbox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		justify-content: flex-start;
		position: fixed;
		padding-top: 5vh;
		background-color: #fff;
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

	::before,
	::after {
		width: 30px;
		height: 3px;
		background-color: #111;
		content: "";
		position: absolute;
		transition: all 0.3s linear;
	}

	::before {
		transform: ${(props) => (props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)")};
		top: -10px;
	}

	::after {
		opacity: ${(props) => (props.open ? "0" : "1")};
		transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
		top: 10px;
	}
`;

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<Navigation>
			<div className={logo}>
				<Link to="/">
					<h1 className={logoLink}>MS</h1>
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
