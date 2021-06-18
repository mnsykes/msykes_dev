import React from "react";
import Layout from "../components/Layout";
import {
	container,
	aboutTitle,
	aboutGrid,
	aboutText,
	emojiList
} from "../styles/about.module.scss";

export default function about() {
	return (
		<Layout>
			<div className={container}>
				<div className={aboutGrid}>
					<div className={aboutText}>
						<h1 className={aboutTitle}>About Me</h1>
						<br />
						<p>
							I'm a new developer looking for my first job. After spending the last 20 years or so
							working unfulfilling jobs I decided it was time that I finally find a career that
							would be fulfilling. The last year and a half has been spent completing my Bachelor's
							Degree in Information Technology and trying to learn as much as I can about
							development.
						</p>
						<br />
						<p>
							When I'm not watching tutorials or trying to learn something new you'll find me
							spending time with my family.{" "}
						</p>
					</div>
					<div className={emojiList}>
						<ul>
							<li>
								<p>
									<span role="img" aria-label="img">
										💻
									</span>{" "}
									Aspiring Web Developer
								</p>
							</li>
							<li>
								<p>
									<span role="img" aria-label="img">
										💑
									</span>{" "}
									Husband
								</p>
							</li>
							<li>
								<p>
									<span role="img" aria-label="img">
										👨‍👧‍👧
									</span>{" "}
									Father of Two
								</p>
							</li>
							<li>
								<p>
									<span role="img" aria-label="img">
										🐕
									</span>{" "}
									Dog Dad
								</p>
							</li>
							<li>
								<p>
									<span role="img" aria-label="img">
										☕
									</span>{" "}
									Black Coffee Drinker
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
}
