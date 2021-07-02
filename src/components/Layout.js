import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BodyContent from "./BodyContent";
import breakpoint from "../styles/breakpoints";

const GlobalStyle = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

  body,
  html {
		height: 100vh;
		width: 100vw;
    color: #fff;
    background: #264c70;
    font-family: "Roboto", sans-serif;
	
  }

		a {
		text-decoration: none;
	}

	p {
		line-height: 2em;
	}

	ul {
		list-style: none;
	}
`;

const LayoutContainer = styled.div`
	min-height: 100vh;
	position: relative;
	margin: 0 auto;
	max-width: 70vw;

	@media ${breakpoint.device.xs} {
		max-width: 95vw;
	}
	@media ${breakpoint.device.sm} {
		max-width: 90vw;
	}
	@media ${breakpoint.device.md} {
		max-width: 85vw;
	}
	@media ${breakpoint.device.lg} {
		max-width: 75vw;
	}
`;

export default function Layout({ children }) {
	return (
		<LayoutContainer>
			<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />

			<GlobalStyle />

			<Navbar />
			<BodyContent>{children}</BodyContent>

			<Footer />
		</LayoutContainer>
	);
}
