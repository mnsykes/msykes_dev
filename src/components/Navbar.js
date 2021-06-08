import React from "react";
import { Link } from "gatsby";
import { rocket, link } from "./compstyles/nav.module.scss";

export default function Navbar() {
	return (
		<nav>
			<div>
				<span role="img" aria-label="img" className={rocket}>
					🚀
				</span>
				<Link to="/" className={link}>
					Home
				</Link>
				<Link to="/contact" className={link}>
					Contact
				</Link>
			</div>
		</nav>
	);
}
