import React from "react";
import Layout from "../components/Layout";
import {
	contactForm,
	inputWrapper,
	inputGroup,
	input,
	textWrapper,
	message,
	submitBtn
} from "../components/compstyles/form.module.scss";

export default function contact() {
	return (
		<Layout>
			<form
				className={contactForm}
				name="getintouch"
				method="post"
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
				<div className={textWrapper}>
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
					<button className={submitBtn}>Submit</button>
				</div>
			</form>
		</Layout>
	);
}
