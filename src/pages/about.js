import React from "react";
import Layout from "../components/Layout";
import { aboutTitle, aboutGrid, aboutText, emojiList } from "../styles/about.module.scss";

export default function about() {
	return (
		<Layout>
			<h1 className={aboutTitle}>About Me</h1>
			<br />
			<div className={aboutGrid}>
				<div className={aboutText}>
					<p>
						I'm a new developer looking for my first job in the field. After spending the last 20
						years or so working dead-end jobs I decided it was time that I finally find a career
						that would be fulfilling. The last year and a half has been spent completing my
						Bachelor's Degree in Information Technology and trying to learn as much as I can about
						development.
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
}
