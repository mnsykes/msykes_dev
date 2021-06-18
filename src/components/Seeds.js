import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Memoji() {
	return (
		<div>
			<StaticImage
				src="../images/seeds.jpg"
				alt="Image of Seeds of Solidarity homepage"
				placeholder="blurred"
			/>
		</div>
	);
}
