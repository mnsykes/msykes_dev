import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import Seeds from "../components/Seeds";
// import Ecbl from "../components/Ecbl";
// import Diary from "../components/Diary";
import ProjectCard from "../components/ProjectCard";
import { card, imgArea, descArea, cardImage, gitLink } from "../styles/projects.module.scss";

export default function projects() {
	return (
		<Layout>
			<ProjectCard />
		</Layout>
	);
}
