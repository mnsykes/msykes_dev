import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const SocialLink = styled.a`
	color: #6e5494;
	font-size: 2rem;
	padding: 0 1rem;

	:link {
		color: blue;
	}

	:hover {
		color: #4078c0;
	}

	:visited {
	}
`;
export default function SocialLinks() {
	return (
		<div>
			<SocialLink href="https://github.com/mnsykes">
				<FontAwesomeIcon icon={faGithub} />
			</SocialLink>
			<SocialLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BCHuEGhCYS2CyndWSuCi2bQ%3D%3D">
				<FontAwesomeIcon icon={faLinkedin} />
			</SocialLink>
		</div>
	);
}
