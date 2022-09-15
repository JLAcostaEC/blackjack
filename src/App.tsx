import { useState } from "react";
import WelcomeMessage from "./lib/components/molecules/WelcomeMessage";
import Header from "./lib/components/organisms/Header";
import { createDeck } from "$lib/utils/CreateDeck";
import GameBar from "./lib/components/organisms/GameBar";
import Card from "./lib/components/atoms/Card";
import fixMobileHeight from "./lib/helpers/viewportHeight";

function App() {
	fixMobileHeight()
	const getDeck = createDeck();

	const [deck, setDeck] = useState(getDeck);
	const [theme, setTheme] = useState("light");

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) =>
			setTheme(e.matches ? "dark" : "light")
		);

	return (
		<div className={`App${theme == "dark" ? " dark bg-zinc-900" : ""}`}>
			<Header />
			<div className="flex w-full h-screen justify-center items-center bg-black/30">
				<section className="w-full h-full bg-gradient-to-br from-green-800 via-emerald-900 to-green-900">
					<Card src='/images/cards/2C.png'/>
				</section>
			</div>
			<GameBar />
		</div>
	);
}

export default App;
