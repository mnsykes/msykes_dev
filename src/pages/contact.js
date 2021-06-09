import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

export default function contact() {
	return (
		<Layout>
			<main>
				<div>
					<h1>Hire Me!!!</h1>
					<ContactForm />
				</div>
			</main>
		</Layout>
	);
}
