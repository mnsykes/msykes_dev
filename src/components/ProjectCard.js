import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import { projectTitle, card, imgArea, descArea, cardImage, gitLink } from "./compstyles/projects.module.scss";

export default function ProjectCard() {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allMarkdownRemark {
				nodes {
					id
					html
					frontmatter {
						slug
						stack
						title
						git
						url
						thumbs {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	`);
	console.log(data);
	const projects = data.allMarkdownRemark.nodes;

	return (
		<div>
			<div className={projectTitle}>
				<h1>Projects</h1>
			</div>
			{projects.map((project) => (
				<div className={card}>
					<div className={imgArea}>
						<a href={project.frontmatter.url}>
							<GatsbyImage
								image={project.frontmatter.thumbs.childImageSharp.gatsbyImageData}
								alt={project.frontmatter.title}
								className={cardImage}
							/>
						</a>
					</div>
					<div className={descArea}>
						<h3>
							Project title: {project.frontmatter.title}{" "}
							<span>
								<a href={project.frontmatter.git}>
									<FontAwesomeIcon icon={faGithub} className={gitLink} />
								</a>{" "}
							</span>
						</h3>
						<h3>Stack: {project.frontmatter.stack}</h3>
						<br />
						<div dangerouslySetInnerHTML={{ __html: project.html }} />
					</div>
				</div>
			))}
		</div>
	);
}
