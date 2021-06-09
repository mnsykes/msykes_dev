import React from "react";
import { footerArea, myEmojis } from "./compstyles/footer.module.scss";

export default function Footer() {
	return (
		<footer className={footerArea}>
			<h3>
				Made with
				<span role="img" aria-label="img" className={myEmojis}>
					☕ 🤦‍♀️ 😤 😭 ⏰ 🍕 🥃 💖
				</span>
				by Matthew Sykes
			</h3>
		</footer>
	);
}
