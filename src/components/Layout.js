import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Window from "./Window";

const GlobalStyle = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

  body,
  html {
    height: 100vh;
    color: #333;
    background: rgb(199, 199, 199);
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

export default function Layout({ children }) {
	return (
		<div>
			<GlobalStyle />
			<Window>
				<Navbar />
				{children}
			</Window>

			<Footer />
		</div>
	);
}
