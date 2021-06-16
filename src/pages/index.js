import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { btnGroup, button, yes, no, maybe } from "../styles/home.module.scss";

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
				<h2>Want to learn more about me?</h2>
				<section className={btnGroup}>
					<div className={button}>
						<Link to="/about" className={yes}>
							Heck Yeah!{" "}
							<span role="img" aria-label="img">
								💥
							</span>
						</Link>
					</div>
					<div className={button}>
						<Link to="/about" className={no}>
							No Way!{" "}
							<span role="img" aria-label="img">
								🙅‍♂️
							</span>
						</Link>
					</div>
					<div className={button}>
						<Link to="/about" className={maybe}>
							Maybe...{" "}
							<span role="img" aria-label="img">
								🤞
							</span>
						</Link>
					</div>
				</section>

				<br />
				<br />
				<div>
					<h2>Some stuff I've made</h2>
					<div>
						<a
							href="https://friendly-borg-85bda9.netlify.app/"
							target="_blank"
							rel="noreferrer nopener"
						>
							Simple Diary App
						</a>
					</div>
					<div>
						<a
							href="https://admiring-johnson-83ee21.netlify.app/"
							target="_blank"
							rel="noreferrer noopener"
						>
							ECBL: The fake basketball league
						</a>
					</div>
					<div>
						<a
							href="https://upbeat-perlman-79a42e.netlify.app/"
							target="_blank"
							rel="noreferrer noopener"
						>
							Seeds of Solidary: Redesign
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
