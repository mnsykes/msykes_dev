import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import "../styles/main.scss";

// markup
const IndexPage = () => {
	return (
		<Layout>
			<div className="content">
				<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
				<h1>
					I'm Matt, and I'm looking for my first job as a developer
					<span role="img" aria-label="img">
						😎
					</span>
				</h1>
				<br />
				<br />
				<h2>I've studied HTML, CSS, JavaScript, ,jQuery, Python, XML, and ColdFusion at UMass</h2>
				<h2>And I've taught myself some Sass, Django, Gatsby, and React during my free time</h2>

				<br />
				<br />
			</div>
		</Layout>
	);
};

export default IndexPage;
