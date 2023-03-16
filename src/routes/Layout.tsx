import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../lib/components/layout/Footer";
import Header from "../lib/components/layout/Header";
import fixMobileHeight from "../lib/helpers/viewportHeight";

export default function Root() {
	fixMobileHeight();
	let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	const [theme, setTheme] = useState(currentTheme);
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) =>
			setTheme(e.matches ? "dark" : "light")
		);
	return (
		<div className={theme == "dark" ? " dark bg-zinc-900" : ""} id="layout">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
