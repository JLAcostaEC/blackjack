import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../lib/components/organisms/Header";
import fixMobileHeight from "../lib/helpers/viewportHeight";

export default function Root() {
	fixMobileHeight();
	const [theme, setTheme] = useState("light");
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) =>
			setTheme(e.matches ? "dark" : "light")
		);
	return (
		<>
			<div className={`${theme == "dark" ? " dark bg-zinc-900" : ""}`}>
			  <Header />
				<Outlet />
			</div>
		</>
	);
}
