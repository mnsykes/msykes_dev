import React from "react";
import { Link } from "gatsby";
import { navContainer, logo, logoLink, navLinks, navLink } from "./compstyles/nav.module.scss";

export default function Navbar() {
	return (
		<nav className={navContainer}>
			<div className={logo}>
				<Link to="/">
					<h1 className={logoLink}>MS</h1>
				</Link>
			</div>
			<div className={navLinks}>
				<Link to="/" className={navLink}>
					Home
				</Link>
				<Link to="/about" className={navLink}>
					About
				</Link>
				<Link to="/projects" className={navLink}>
					Projects
				</Link>
				<Link to="/contact" className={navLink}>
					Contact
				</Link>
			</div>
		</nav>
	);
}
