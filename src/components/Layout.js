import React from "react";
import { container } from "./compstyles/layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className={container}>
			<Navbar />
			<main>{children}</main>

			<Footer />
		</div>
	);
}
// 	export default function Layout({ children }) {
// 		return (
// 			<div className={container}>
// 				<header className={headArea}>
// 					<Navbar />
// 				</header>
// 				<main className={mainArea}>{children}</main>
// 				<footer className={footArea}>
// 					<Footer />
// 				</footer>
// 			</div>
// 		);
// }
