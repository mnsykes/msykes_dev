import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Seeds from "../components/Seeds";
import Ecbl from "../components/Ecbl";
import Diary from "../components/Diary";
import {
	container,
	projectCard,
	imgArea,
	descArea,
	cardImage,
	gitLink
} from "../styles/projects.module.scss";

export default function projects() {
	return (
		<Layout>
			<div className={container}>
				<h1>Projects</h1>
				<h2>
					Here are a few class projects that I have completed with links to their GitHub repos
				</h2>
				<br />
				<div className={projectCard}>
					<div className={imgArea}>
						<a
							href="https://admiring-johnson-83ee21.netlify.app/"
							target="_blank"
							rel="noreferrer nopener"
						>
							<Ecbl className={cardImage} />
						</a>
					</div>

					<div className={descArea}>
						<h3>
							ECBL{" "}
							<a href="https://github.com/mnsykes/ecbl" target="_blank" rel="noreferrer noopener">
								<span className={gitLink}>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</a>
						</h3>
						<h3>Final Project for Intro to HTML Course</h3>
						<h3>Stack: HTML, CSS, jQuery</h3>
						<br />
						<p>
							This was the final project for my intro to HTML course and it was the first website
							that I made. The site is for a fictitious basketball league. It was built with HTML
							and CSS. I was also taking an intro to JavaScript at the time so I included some of
							the jQuery that I had learned up to that point. The only links that are live on the
							site are for the Providence Roosters. All team pages would have been the same so I was
							only required to complete all the pages for one team as an example. Because the site
							was never meant to be anything except for an school project, I used player names and
							images from the 2019 Providence Friars basketball team. I'm currently in the process
							refactoring the site using GatsbyJS to make it a better showpiece for my skills. In
							it's current state it is completely unresponsive and breaks on smaller screens.
						</p>
					</div>
				</div>
				<div className={projectCard}>
					<div className={imgArea}>
						<a
							href="https://friendly-borg-85bda9.netlify.app/"
							target="_blank"
							rel="noreferrer nopener"
						>
							<Diary className={cardImage} />
						</a>
					</div>

					<div className={descArea}>
						<h3>
							Diary App{" "}
							<a href="https://github.com/mnsykes/diary" target="_blank" rel="noreferrer noopener">
								<span className={gitLink}>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</a>
						</h3>
						<h3>Stack: HTML, CSS, JavaScript</h3>
						<br />
						<p>
							This is a simple diary app, but it essentially functions the same way a to-do app
							would (because doesn't everybody have to include a to-do app in their portfolio?).
						</p>
						<br />
						<p>
							Type an entry into the text area, hit submit, and your entry is stored in the box
							below. That's all there is to it.
						</p>
					</div>
				</div>
				<div className={projectCard}>
					<div className={imgArea}>
						<a
							href="https://upbeat-perlman-79a42e.netlify.app/"
							target="_blank"
							rel="noreferrer nopener"
						>
							<Seeds className={cardImage} />
						</a>
					</div>

					<div className={descArea}>
						<h3>
							Seeds of Solidarity{" "}
							<a href="https://github.com/mnsykes/seeds" target="_blank" rel="noreferrer noopener">
								<span className={gitLink}>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</a>
						</h3>
						<h3>Final Project for Web Development Course</h3>
						<h3>Stack: HTML, Sass, jQuery, Bootstrap 4</h3>
						<br />
						<p>
							In this project we were tasked with redesigning a site of a non-profit organization.
							The one I chose is a farm called{" "}
							<a href="https://seedsofsolidarity.org/" target="_blank" rel="noreferrer noopener">
								Seeds of Solidarity
							</a>{" "}
							that's located in Western Massachusetts. They used a simple WordPress theme so for my
							redesign I attempted to make the site look a little more modern while still staying
							true to the simplicity of the original site. This project was for academic purposes.
						</p>
						<br />
						<p>
							I spent a lot of time looking at their site during my redesign and they seem like a
							really great organization. If you ever find yourself in the North Quabbin area of
							Massachusetts you should definitely stop by there and show your support.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
