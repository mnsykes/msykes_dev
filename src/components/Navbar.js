import React from "react";
import { Link } from "gatsby";
import { navContainer, logo, rocket, navLinks } from "./compstyles/nav.module.scss";

export default function Navbar() {
	return (
		<nav className={navContainer}>
			<div className={logo}>
				<span role="img" aria-label="img" className={rocket}>
					🚀
				</span>
			</div>
			<div className={navLinks}>
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/uses">Uses</Link>
			</div>
		</nav>
	);
}
