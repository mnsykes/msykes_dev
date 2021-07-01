import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Window from "./Window";

export default function Layout({ children }) {
	return (
		<div>
			<Window>
				<Navbar />
				{children}
			</Window>

			<Footer />
		</div>
	);
}
