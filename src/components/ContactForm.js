import React from "react";

export default function ContactForm() {
	return (
		<div>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" placeholder="Enter your name" />
			</form>
		</div>
	);
}
