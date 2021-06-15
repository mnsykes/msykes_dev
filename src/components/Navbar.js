import React from "react";
import { Link } from "gatsby";
import { navContainer, logo, rocket, navLinks, navLink } from "./compstyles/nav.module.scss";

export default function Navbar() {
	return (
		<nav className={navContainer}>
			<div className={logo}>
				<span role="img" aria-label="img" className={rocket}>
					🚀
				</span>
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
