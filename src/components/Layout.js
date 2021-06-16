import React from "react";
import { container, headArea, mainArea, footArea } from "./compstyles/layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/main.scss";

export default function Layout({ children }) {
	return (
		<div className={container}>
			<header className={headArea}>
				<Navbar />
			</header>
			<main className={mainArea}>{children}</main>
			<footer className={footArea}>
				<Footer />
			</footer>
		</div>
	);
}
