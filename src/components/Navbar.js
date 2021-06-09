import React from "react";
import { Link } from "gatsby";
import { navContainer, logo, rocket, navLinks, link } from "./compstyles/nav.module.scss";

export default function Navbar() {
	return (
		<nav className={navContainer}>
			<div className={logo}>
				<span role="img" aria-label="img" className={rocket}>
					🚀
				</span>
			</div>
			<div className={navLinks}>
				<Link to="/" className={link}>
					Home
				</Link>
				<Link to="/contact" className={link}>
					Contact
				</Link>
				<Link to="/projects" className={link}>
					Projects
				</Link>
				<Link to="/uses" className={link}>
					Uses
				</Link>
			</div>
		</nav>
	);
}
