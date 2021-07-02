import React from "react";
import Layout from "../components/Layout";
import TitleCard from "../components/TitleCard";
import styled from "styled-components";

const FormWrapper = styled.div`
	/* padding: 0.75rem 1.5rem; */
	padding: 0;
`;

const ContactForm = styled.form`
	margin: 0 auto;
	/* padding: 2rem 0; */
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: left;
	margin-bottom: 1.5rem;
`;

const Label = styled.label`
	font-weight: bold;
	text-transform: uppercase;
	font-size: 1.25rem;
	padding-bottom: 0.5rem;
	color: white;
`;

const Input = styled.input`
	font-size: 1rem;
	padding: 0.5rem;
	border: 3px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(45deg, #f3ec78, #af4261);
`;

const Message = styled.textarea`
	padding: 0.5rem;
	font-size: 1rem;
	max-width: 100%;
	min-width: 100%;
	margin-bottom: 1.5rem;
	border: 3px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(45deg, #f3ec78, #af4261);
`;

const SubmitBtn = styled.button`
	padding: 10px 5px;
	width: 100%;
	background: linear-gradient(45deg, #f3ec78, #af4261);
	color: white;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	font-size: 1.5rem;
	text-transform: uppercase;

	:hover {
		background: linear-gradient(to left, #f3ec78, #af4261);
	}
`;
export default function contact() {
	return (
		<Layout>
			<FormWrapper>
				<TitleCard title="Say Hi!" />
				<ContactForm
					name="contact-form"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<InputWrapper>
						<InputGroup>
							<Label htmlFor="name">Name</Label>
							<Input type="text" id="name" name="name" placeholder="Name" />
						</InputGroup>
						<InputGroup>
							<Label htmlFor="email">Email</Label>
							<Input type="email" id="email" name="email" placeholder="Email" />
						</InputGroup>
					</InputWrapper>
					<div>
						<Message name="message" id="message" cols="30" rows="10" placeholder="Message" />
					</div>
					<div>
						{/* Hidden input for Netlify form handling */}
						<input type="hidden" name="form-name" value="contact-form" />
						<SubmitBtn type="submit">Submit</SubmitBtn>
					</div>
				</ContactForm>
			</FormWrapper>
		</Layout>
	);
}
