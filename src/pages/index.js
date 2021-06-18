import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Memoji from "../components/Memoji";
import { content, face, cta, ctaLink } from "../styles/home.module.scss";
import "../styles/main.scss";

// markup
export default function IndexPage() {
	return (
		<Layout>
			<div className={content}>
				<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
				<div className={face}>
					<Memoji />
				</div>
				<h1>I'm Matt, and I'm an Aspiring Front End Developer</h1>
				<br />
				<div className={cta}>
					<h2>
						I just graduated from UMass Lowell with a Bachelor's Degree in Information Technology
						and I'm looking for my first job as a developer. Please check out the rest of my site
						and if you like what you see, drop a line using my{" "}
						<Link to="/contact" className={ctaLink}>
							contact form
						</Link>
					</h2>
				</div>
			</div>
		</Layout>
	);
}
