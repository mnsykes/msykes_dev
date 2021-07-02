import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TitleCard from "../components/TitleCard";
// import Memoji from "../components/Memoji";
import styled from "styled-components";

// const MyFace = styled(Memoji)`
// 	background: red;
// `;

const ContactLink = styled(Link)`
	font-weight: bold;

	:hover {
		text-decoration: underline;
	}
`;

// markup
export default function IndexPage() {
	return (
		<Layout>
			<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
			{/* <MyFace /> */}
			<TitleCard title="Hey, I'm Matt" />
			<h3>
				I am a recent graduate of UMass Lowell with a Bachelor's Degree in Information Technology
				and I'm looking for my first job as a developer. Whatever I lack in experience, I more than
				make up for with my drive to succeed and my passion for learning. I know I will be succesful
				in this field given the opportunity.
			</h3>
			<br />
			<h3>
				Please check out the rest of my site and if you like what you see, drop a line using my{" "}
				<ContactLink to="/contact">contact form</ContactLink>
			</h3>
		</Layout>
	);
}
