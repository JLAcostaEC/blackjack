import { useState } from "react";
import WelcomeMessage from "$lib/components/molecules/WelcomeMessage";
import Header from "$lib/components/organisms/Header";
import { createCards } from "$lib/utils/GameFunctions";
import GameBar from "$lib/components/organisms/GameBar";
import Card from "$lib/components/atoms/Card/Card";
import fixMobileHeight from "$lib/helpers/viewportHeight";
import { BlackJApp } from "$lib/utils/Game";
import Table from "../lib/components/atoms/Table";
import CardsHolder from "../lib/components/atoms/CardsHolder";

/** Entry file for  */
function App() {
	fixMobileHeight();
	const [theme, setTheme] = useState("light");
	const [Game, setGame] = useState(new BlackJApp());

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) =>
			setTheme(e.matches ? "dark" : "light")
		);

	Game.play(0)

	return (
		<div className={`${theme == "dark" ? " dark bg-zinc-900" : ""}`}>
			
			
		</div>
	);
}

export default App;
