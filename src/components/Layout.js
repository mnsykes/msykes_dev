import React from "react";
import { container, content } from "./compstyles/layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className={container}>
			<Navbar />
			<main className={content}>{children}</main>

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
