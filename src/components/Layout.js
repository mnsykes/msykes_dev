import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BodyContent from "./BodyContent";

const GlobalStyle = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

  body,
  html {
    color: #fff;
    background: #223344;
    font-family: "Roboto", sans-serif;
  }

		a {
		text-decoration: none;
	}

	p {
		line-height: 1.5em;
	}

	ul {
		list-style: none;
	}
`;

const LayoutContainer = styled.div`
	max-width: 80vw;
	margin: 0 auto;

	@media (max-width: 768px) {
		max-width: 95vw;
	}
`;

export default function Layout({ children }) {
	return (
		<LayoutContainer>
			<GlobalStyle />
			<Navbar />
			<BodyContent>{children}</BodyContent>

			<Footer />
		</LayoutContainer>
	);
}
