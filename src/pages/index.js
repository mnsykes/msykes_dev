import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Memoji from "../components/Memoji";
import { homeWrapper, face, myFace, title, cta, ctaLink } from "../styles/home.module.scss";
import "../styles/main.scss";

// markup
export default function IndexPage() {
	return (
		<Layout>
			<div className={homeWrapper}>
				<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
				<div className={face}>
					<div className={myFace}>
						<Memoji />
					</div>
					<div className={title}>
						<h1>Hey,</h1>
						<h1>I'm Matt</h1>
					</div>
				</div>
				<div className={cta}>
					<h3>
						I am a recent graduate of UMass Lowell with a Bachelor's Degree in Information
						Technology and I'm looking for my first job as a developer. Whatever I lack in
						experience, I more than make up for with my drive to succeed and my passion for
						learning. I know I will be succesful in this field given the opportunity.
					</h3>
					<br />
					<h3>
						Please check out the rest of my site and if you like what you see, drop a line using my{" "}
						<Link to="/contact" className={ctaLink}>
							contact form
						</Link>
					</h3>
				</div>
			</div>
		</Layout>
	);
}
