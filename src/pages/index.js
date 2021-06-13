import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import "../styles/main.scss";

// markup
const IndexPage = () => {
	return (
		<Layout>
			<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
			<h1 className="gradient">Hey, thanks for stopping by!</h1>
			<h2>I'm Matt and I'm looking for my first job as a developer</h2>
			<h3>
				Probably the coolest developer in the world
				<span role="img" aria-label="img"></span>😎
			</h3>
			<span role="img" aria-label="img">
				🌻🥑🦋✨🌙
			</span>
			<button id="testBtn">I'm so cool</button>
		</Layout>
	);
};

export default IndexPage;
