import React from "react";
import {
	container,
	topBar,
	circles,
	one,
	two,
	three,
	window,
	content
} from "./compstyles/layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className={container}>
			<div className={topBar}>
				<div className={circles}>
					<div className={one}></div>
					<div className={two}></div>
					<div className={three}></div>
				</div>
			</div>
			<div className={window}>
				<Navbar />
				<main className={content}>{children}</main>

				<Footer />
			</div>
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
