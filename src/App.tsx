import { useState, createContext } from "react";
import WelcomeMessage from "./lib/components/molecules/WelcomeMessage";
import Header from "./lib/components/organisms/Header";
import { createDeck } from "$lib/utils/CreateDeck";
import GameBar from "./lib/components/organisms/GameBar";
import fixViewportHeight from "./lib/helpers/viewportHeight";
import Table from "./lib/components/atoms/Table";
import CardsHolder from "./lib/components/atoms/CardsHolder";
import { forEach } from "underscore";
import Card from "./lib/components/atoms/Card";

import type { CardType, As, Deck } from "$lib/types";
import { RegisterChips } from "./lib/utils/RegisterChips";

function App() {
	fixViewportHeight();

	const [deck, setDeck] = useState(createDeck());
	const [userHand, setUserHand] = useState([] as Deck);
	const [aiHand, setAiHand] = useState([] as Deck);
	const [userCounter, setUserCounter] = useState(0);
	const [aiCounter, setAiCounter] = useState(0);
	const [theme, setTheme] = useState("light");
	const [step, setStep] = useState<"Dealing" | "Playing" | "Waiting">("Dealing");
	const [bank, setBank] = useState(1000);
	const [chips, setChips] = useState(RegisterChips())

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) =>
			setTheme(e.matches ? "dark" : "light")
		);

	return (
		<div className={`App${theme == "dark" ? " dark bg-zinc-900" : ""}`}>
			<Header />
			<div className="flex w-full h-[calc(var(--vh,1vh)*100-64px)] justify-center items-center bg-black/30">
				<Table>
					<CardsHolder className="">
						{aiHand.map((item) => (
							<Card src={item.image} key={item.name}></Card>
						))}
					</CardsHolder>
					<CardsHolder className="">
						{userHand.map((item) => (
							<Card src={item.image} key={item.name}></Card>
						))}
					</CardsHolder>
				</Table>
			</div>
			<GameBar
				step={step}
				setStep={setStep}
				bank={bank}
				setBank={setBank}
				chips={chips}
				setChips={setChips}
				deck={deck}
				setDeck={setDeck}
				userHand={userHand}
				setUserHand={setUserHand}
				userCounter={userCounter}
				setUserCounter={setUserCounter}
			></GameBar>
		</div>
	);
}

export default App;
