import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { card, imgArea, descArea, cardImage, gitLink } from "../styles/projects.module.scss";

export default function projects() {
	return (
		<Layout>
			<ProjectCard />
		</Layout>
	);
}
