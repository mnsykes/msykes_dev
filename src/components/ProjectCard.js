import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";

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
			<h1>Markdown Files</h1>
			{projects.map((project) => (
				<div>
					<div>
						<a href={project.frontmatter.url}>
							<GatsbyImage
								image={project.frontmatter.thumbs.childImageSharp.gatsbyImageData}
								alt="images"
							/>
						</a>
					</div>
					<p>
						Project title: {project.frontmatter.title}{" "}
						<span>
							<a href={project.frontmatter.git}>
								<FontAwesomeIcon icon={faGithub} />
							</a>{" "}
						</span>
					</p>
					<p>Stack: {project.frontmatter.stack}</p>
					<div dangerouslySetInnerHTML={{ __html: project.html }} />
				</div>
			))}
		</div>
	);
}
