import React from "react";
import Layout from "../components/Layout";
import {
	contactForm,
	inputWrapper,
	inputGroup,
	input,
	message,
	submitBtn
} from "../styles/form.module.scss";

export default function contact() {
	return (
		<Layout>
			<div>
				<h1>Get In Touch</h1>
				<br />
				<h2>Especially if you want to hire me!</h2>
				<form
					className={contactForm}
					name="contact-form"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<div className={inputWrapper}>
						<div className={inputGroup}>
							<label htmlFor="name">Name</label>
							<input type="text" className={input} id="name" name="name" placeholder="Name" />
						</div>
						<div className={inputGroup}>
							<label htmlFor="email">Email</label>
							<input type="email" className={input} id="email" name="email" placeholder="Email" />
						</div>
					</div>
					<div>
						<textarea
							name="message"
							className={message}
							id="message"
							cols="30"
							rows="10"
							placeholder="Message"
						/>
					</div>
					<div>
						<input type="hidden" name="form-name" value="contact-form" />
						<button type="submit" className={submitBtn}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}
