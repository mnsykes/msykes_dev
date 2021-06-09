import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function projects() {
	return (
		<Layout>
			<main>
				<div>
					<h1>Projects Page</h1>
				</div>
				<section>
					<h3>Projects</h3>
					<div>
						<ProjectCard />
					</div>
					<div>
						<ProjectCard />
					</div>
				</section>
			</main>
		</Layout>
	);
}
