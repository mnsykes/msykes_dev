import React from "react";
import {
	wrapper,
	topBar,
	circles,
	one,
	two,
	three,
	screen,
	content
} from "./compstyles/window.module.scss";

export default function Window({ children }) {
	return (
		<div className={wrapper}>
			<div className={topBar}>
				<div className={circles}>
					<div className={one}></div>
					<div className={two}></div>
					<div className={three}></div>
				</div>
			</div>
			<div className={screen}>
				<main className={content}>{children}</main>
			</div>
		</div>
	);
}
