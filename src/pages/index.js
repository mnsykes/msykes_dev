import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TitleCard from "../components/TitleCard";
import Memoji from "../components/Memoji";
import styled from "styled-components";

const HomeWrapper = styled.div`
	margin: 0 auto;
	max-width: 100%;
`;

const Face = styled.div`
	border-bottom: 4px solid $yellow;
	background: $blue;
	display: flex;
	margin: 0 auto;
	background: blue;
`;

const MyFace = styled.div`
	max-width: 10rem;
	height: auto;
`;

const HomeBody = styled.div`
	margin: 0 auto;

	h3 {
		color: green;
	}
`;

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
			<HomeWrapper>
				<Helmet htmlAttributes={{ lang: "en" }} title="Matthew Sykes - Front End Developer" />
				<Face>
					<MyFace>
						<Memoji />
					</MyFace>
					<TitleCard title="Hey, I'm Matt" />
				</Face>
				<HomeBody>
					<h3>
						I am a recent graduate of UMass Lowell with a Bachelor's Degree in Information
						Technology and I'm looking for my first job as a developer. Whatever I lack in
						experience, I more than make up for with my drive to succeed and my passion for
						learning. I know I will be succesful in this field given the opportunity.
					</h3>
					<br />
					<h3>
						Please check out the rest of my site and if you like what you see, drop a line using my{" "}
						<ContactLink to="/contact">contact form</ContactLink>
					</h3>
				</HomeBody>
			</HomeWrapper>
		</Layout>
	);
}
