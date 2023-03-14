import { useState } from "react";
import WelcomeMessage from "$lib/components/molecules/WelcomeMessage";
import Header from "$lib/components/organisms/Header";
import { createCards } from "$lib/utils/GameFunctions";
import GameBar from "$lib/components/organisms/GameBar";
import Card from "$lib/components/atoms/Card";
import fixMobileHeight from "$lib/helpers/viewportHeight";
import { BlackjApp } from "$lib/utils/Game";

function App() {
	fixMobileHeight();
	const [theme, setTheme] = useState("light");
	const [Game, setGame] = useState(new BlackjApp());

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) =>
			setTheme(e.matches ? "dark" : "light")
		);

	Game.play(0)

	return (
		<div className={`App${theme == "dark" ? " dark bg-zinc-900" : ""}`}>
			<Header />
			<div className="flex w-full h-screen justify-center items-center bg-black/30">
				<section className="w-full h-full bg-gradient-to-br from-green-800 via-emerald-900 to-green-900">
					{Game.player.hand.map((card) => {
						return (
							<Card key={card.name} src={`.${card.image}`} />
						);
					})}
				</section>
			</div>
			<GameBar props={Game} />
		</div>
	);
}

export default App;
