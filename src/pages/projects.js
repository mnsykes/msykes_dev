import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Seeds from "../components/Seeds";
import Ecbl from "../components/Ecbl";
import Diary from "../components/Diary";
import { projectCard, imgArea, descArea, cardImage, gitLink } from "../styles/projects.module.scss";

export default function projects() {
	return (
		<div>
			<Layout>
				<h1>Projects</h1>
				<h2>
					Here are a few class projects that I have completed with links to their GitHub repos
				</h2>
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
						<h3>ECBL: Final Project for Intro to HTML course</h3>
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
						<div className={gitLink}>
							<a href="" target="_blank" rel="noreferrer noopener">
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</a>
						</div>
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
						<h3>Diary App</h3>
						<h3>Stack: HTML, CSS, JavaScript</h3>
						<br />
						<p>
							This is a simple diary app, but it essentially functions the same way a to-do app
							would (because doesn't everybody have to include a to-do app in their portfolio? ✔).
							Type an entry into the text area, hit submit, and your entry is stored in the box
							below. That's all there is to it.
						</p>
						<div className={gitLink}>
							<a href="" target="_blank" rel="noreferrer noopener">
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</a>
						</div>
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
						<h3>Seeds of Solidarity: Final Project for Web Development Course</h3>
						<h3>Stack: HTML, Sass, jQuery, Bootstrap 4</h3>
						<div className={gitLink}>
							<a href="" target="_blank" rel="noreferrer noopener">
								<span>
									<FontAwesomeIcon icon={faGithub} />
								</span>
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
