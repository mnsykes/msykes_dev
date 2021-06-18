import React from "react";
import { Link } from "gatsby";
import { navContainer, logo, navLinks, navLink, bar } from "./compstyles/nav.module.scss";

export default function Navbar() {
	return (
		<nav className={navContainer}>
			<div className={logo}>
				<Link to="/">
					<h1>MS</h1>
					<div className={bar}></div>
				</Link>
			</div>
			<div className={navLinks}>
				<Link to="/" className={navLink}>
					Home
				</Link>
				<Link to="/about" className={navLink}>
					About
				</Link>
				<Link to="/contact" className={navLink}>
					Contact
				</Link>
			</div>
		</nav>
	);
}
