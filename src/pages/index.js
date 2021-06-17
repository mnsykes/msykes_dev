import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Memoji from "../components/Memoji";
import Maybe from "../components/Maybe";
import { yesFace, maybeFace, btnGroup, button, yes, no, maybe } from "../styles/home.module.scss";
import "../styles/main.scss";

// markup
export default function IndexPage() {
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
				<div className={yesFace}>
					<Memoji />
				</div>
				<div className={maybeFace}>
					<Maybe />
				</div>
				<section className={btnGroup}>
					<div>
						<h2>Want to learn more about me?</h2>
					</div>
					<div className={button}>
						<Link to="/about" className={yes}>
							Heck Yeah!{" "}
							<span role="img" aria-label="img">
								🚀
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
			</div>
		</Layout>
	);
}
