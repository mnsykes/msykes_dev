import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/Layout";
import Memoji from "../components/Memoji";
import { content, face, btnGroup, drawBorder, btn } from "../styles/home.module.scss";
import "../styles/main.scss";

// markup
export default function IndexPage() {
	return (
		<Layout>
			<div className={content}>
				<FontAwesomeIcon icon={faGithub} />
				<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
				<div className={face}>
					<Memoji />
				</div>
				<h1>
					I'm Matt, and I'm looking for my first job as a developer
					<span role="img" aria-label="img">
						😎
					</span>
				</h1>
				<div>
					<h2>Want to hire me?</h2>
				</div>
				<section className={btnGroup}>
					<div className={drawBorder}>
						<Link to="/about" className={btn}>
							Heck Yeah!{" "}
							<span role="img" aria-label="img">
								🚀
							</span>
						</Link>
					</div>
					<div className={drawBorder}>
						<Link to="/about" className={btn}>
							No Way!{" "}
							<span role="img" aria-label="img">
								🙅‍♂️
							</span>
						</Link>
					</div>
					<div className={drawBorder}>
						<Link to="/about" className={btn}>
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
