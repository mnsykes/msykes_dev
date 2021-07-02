import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import TitleCard from "./TitleCard";

const Card = styled.div`
	margin: 0 auto 4rem auto;
	background: white;
	border: 3px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(45deg, #f3ec78, #af4261);
`;

const ImgArea = styled.div`
	background: linear-gradient(45deg, #f3ec78, #af4261);
`;

const CardImage = styled(GatsbyImage)`
	:hover {
		opacity: 0.8;
	}
`;

const Description = styled.div`
	padding: 0.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: linear-gradient(45deg, #f3ec78, #af4261);

	h3 {
		font-weight: bold;
		text-align: left;
	}

	a {
		padding-right: 2rem;
		font-size: 2.5rem;
	}
`;

const DescriptionArea = styled.div`
	padding: 1rem 0.5rem 1.5rem 0.5rem;
	background: #223344;
`;

const GitLink = styled(FontAwesomeIcon)`
	margin-left: 1rem;
	font-size: 2rem;
	color: red;
`;

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

	const projects = data.allMarkdownRemark.nodes;
	const projectList = projects.map((project) => (
		<Card>
			<ImgArea>
				<a href={project.frontmatter.url} target="_blank" rel="noreferrer noopener">
					<CardImage
						image={project.frontmatter.thumbs.childImageSharp.gatsbyImageData}
						alt={project.frontmatter.title}
					/>
				</a>
			</ImgArea>
			<Description>
				<a href={project.frontmatter.git} target="_blank" rel="noreferrer noopener">
					<GitLink icon={faGithub} />
				</a>{" "}
				<div>
					<h3>Project title: {project.frontmatter.title} </h3>
					<h3>Stack: {project.frontmatter.stack}</h3>
				</div>
			</Description>
			<DescriptionArea>
				<div dangerouslySetInnerHTML={{ __html: project.html }} />
			</DescriptionArea>
		</Card>
	));

	return (
		<div>
			<TitleCard title="Projects" />
			{projectList}
		</div>
	);
}
