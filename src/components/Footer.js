import React from "react";
import { footerArea, myEmojis } from "./compstyles/footer.module.scss";

export default function Footer() {
	return (
		<footer className={footerArea}>
			<h3>Matthew Sykes &copy;2021</h3>
			<br />
			<h3>Made with:</h3>
			<span role="img" aria-label="img" className={myEmojis}>
				☕ 🤦‍♀️ 😤 😭 ⏰ 🍕 🥃 💖
			</span>
		</footer>
	);
}
