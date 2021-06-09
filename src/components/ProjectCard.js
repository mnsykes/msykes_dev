import React from "react";
import { card, top, bottom, textDesc, projectLinks } from "./compstyles/projectCard.module.scss";

export default function ProjectCard() {
	return (
		<div className={card}>
			<div className={top}>image here</div>
			<div className={bottom}>
				<div className={textDesc}>text about project</div>
				<div className={projectLinks}>
					<a
						href="https://github.com/mnsykes/webDatabase20/tree/master/myFinalProject"
						target="_blank"
						rel="noopener noreferrer"
					>
						Database
					</a>
				</div>
			</div>
		</div>
	);
}
