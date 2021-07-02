import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import TitleCard from "../components/TitleCard";

export default function projects() {
	return (
		<Layout>
			<TitleCard title="Projects" />
			<ProjectCard />
		</Layout>
	);
}
