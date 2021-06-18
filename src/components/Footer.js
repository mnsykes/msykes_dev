import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { footerArea } from "./compstyles/footer.module.scss";

export default function Footer() {
	return (
		<footer className={footerArea}>
			<h3>Matthew Sykes &copy;2021</h3>
			<br />
			<a href="https://github.com/mnsykes">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BCHuEGhCYS2CyndWSuCi2bQ%3D%3D">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</footer>
	);
}
