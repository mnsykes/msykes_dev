import React from "react";
import { myEmojis } from "./compstyles/footer.module.scss";

export default function Footer() {
	return (
		<footer>
			<h3>Matthew Sykes &copy;2021</h3>
			<br />
			<h3>Made with:</h3>
			<span role="img" aria-label="img" className={myEmojis}>
				☕ 🤦‍♀️ 😤 😭 ⏰ 🍕 🥃 💖
			</span>
		</footer>
	);
}
