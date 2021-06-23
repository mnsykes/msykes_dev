import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import {
	projectTitle,
	card,
	imgArea,
	description,
	descArea,
	cardImage,
	gitLink
} from "./compstyles/projects.module.scss";

// function using graqhql to generate project cards from
// markdown files
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
	const projectList = projects.map((project) => (
		<div className={card}>
			<div className={imgArea}>
				<a href={project.frontmatter.url} target="_blank" rel="noreferrer noopener">
					<GatsbyImage
						image={project.frontmatter.thumbs.childImageSharp.gatsbyImageData}
						alt={project.frontmatter.title}
						className={cardImage}
					/>
				</a>
			</div>
			<div className={description}>
				<a href={project.frontmatter.git} target="_blank" rel="noreferrer noopener">
					<FontAwesomeIcon icon={faGithub} className={gitLink} />
				</a>{" "}
				<div>
					<h3>Project title: {project.frontmatter.title} </h3>
					<h3>Stack: {project.frontmatter.stack}</h3>
				</div>
			</div>
			<div className={descArea}>
				<div dangerouslySetInnerHTML={{ __html: project.html }} />
			</div>
		</div>
	));

	return (
		<div>
			<div className={projectTitle}>
				<h1>Projects</h1>
			</div>
			{projectList}
		</div>
	);
}
