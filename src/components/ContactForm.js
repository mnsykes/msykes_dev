import React from "react";
import {
	container,
	contact,
	inputWrapper,
	inputGroup,
	input,
	textWrapper,
	message,
	submitBtn
} from "./compstyles/form.module.scss";

export default function ContactForm() {
	return (
		<div className={container}>
			<form
				className={contact}
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<div className={inputWrapper}>
					<div className={inputGroup}>
						<label htmlFor="name">Name</label>
						<input type="text" className={input} id="name" placeholder="Name" />
					</div>
					<div className={inputGroup}>
						<label htmlFor="email">Email</label>
						<input type="email" className={input} id="email" placeholder="Email" />
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
		</div>
	);
}
