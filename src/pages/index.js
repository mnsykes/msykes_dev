import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TitleCard from "../components/TitleCard";
import styled from "styled-components";

const ContactLink = styled(Link)`
	color: #f8d96a;
	font-weight: bold;
	text-transform: uppercase;

	:hover {
		color: #4078c0;
	}
`;

export default function IndexPage() {
	return (
		<Layout>
			<TitleCard title="Hey, I'm Matt" />
			<p>
				I am a recent graduate of UMass Lowell with a Bachelor's Degree in Information Technology
				and I'm looking for my first job as a developer. Whatever I lack in experience, I more than
				make up for with my drive to succeed and my passion for learning. I know I will be succesful
				in this field given the opportunity.
			</p>
			<br />
			<p>
				Please check out the rest of my site and if you like what you see, drop a line using my{" "}
				<ContactLink to="/contact">contact form</ContactLink>
			</p>
		</Layout>
	);
}
