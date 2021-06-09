import * as React from "react";
import Layout from "../components/Layout";
import "../styles/main.scss";
// markup
const IndexPage = () => {
	return (
		<Layout>
			<h1>Hi, I'm Matthew Sykes</h1>
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
