import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Memoji() {
	return (
		<div>
			<StaticImage src="../images/diary.jpg" alt="me" placeholder="blurred" />
		</div>
	);
}
