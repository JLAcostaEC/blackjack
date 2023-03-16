import { useState } from "react";
import Card from "$lib/components/atoms/Card/Card";
import { BlackJApp } from "$lib/utils/Game";
import Table from "$lib/components/atoms/Table/Table";
import CardsHolder from "$lib/components/atoms/CardsHolder";
import Modal from "$lib/components/molecules/Modal";
import Button from "$lib/components/atoms/Button";
import Chips from "$lib/components/atoms/Chips";
import GameBar from "../lib/components/molecules/GameBar";

/** Entry file for  */
function App() {
	const [Game, setGame] = useState({ data: new BlackJApp() });
	const [showWelcome, setShowWelcome] = useState(true);
	const [showGameConfig, setShowGameConfig] = useState(true);

	
	return (
		<>
			{showWelcome && (
				<Modal toggleVisibility={setShowWelcome}>
					<div className="flex justify-between mb-4 rounded-t sm:mb-5">
						<div className="text-lg text-gray-900 text-left md:text-xl dark:text-white">
							<h3 className="font-bold text-xl mb-4">
								Welcome to BlackJApp!
							</h3>
							<p className="mb-6 text-base">
								BlackJApp is a basic App to show you my skills
								using React JS. The name of the app is a pun
								between BlackJack, App & Jorge Acosta, the
								result Black
								<span className="font-bold text-primary-500">
									JA
								</span>
								<span className="font-bold">pp</span>. I hope
								it's to your liking!
							</p>
							<Button
								onClick={() => setShowWelcome(!showWelcome)}
							>
								Start the Game
							</Button>
						</div>
					</div>
				</Modal>
			)}
			{showGameConfig && !showWelcome && (
				<Modal toggleVisibility={setShowGameConfig}>
					<div className="flex justify-between mb-4 rounded-t sm:mb-5">
						<div className="text-lg text-gray-900 text-left md:text-xl dark:text-white">
							<h3 className="font-bold text-2xl mb-4">
								Place your bet
							</h3>
							<p className="">
								<span className="font-bold">Bank:</span>
								{Game.data.player.bank}
							</p>
							<p className="mb-6">
								<span className="font-bold">Current Bet:</span>
								{Game.data.currentBet}
							</p>
							<div className="flex w-full gap-4 flex-wrap mb-6">
								<Chips game={Game} setGame={setGame} />
							</div>
							<div className="w-full flex justify-between">
								<Button
									onClick={() => {
										Game.data.resetBet();
										setGame({ ...Game });
									}}
								>
									Reset Bet
								</Button>
								<Button
									onClick={() => {
										setShowGameConfig(!showGameConfig);
										Game.data.play();
									}}
								>
									Start the Game
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}
			<div className="flex flex-col w-full h-[calc(var(--vh)*100-64px)] min-h-screen justify-center items-center bg-black/30">
				<Table>
					<CardsHolder className="">
						{Game.data.dealer.hand.map((item) => (
							<Card
								src={
									item.isHidden
										? "./images/cards/red_back.png"
										: item.image
								}
								key={item.name}
								className=""
							></Card>
						))}
					</CardsHolder>
					<CardsHolder className="">
						{Game.data.player.hand.map((item) => (
							<Card src={item.image} key={item.name}></Card>
						))}
					</CardsHolder>
				</Table>
				<GameBar>
					<Button>Hello</Button>
				</GameBar>
			</div>
		</>
	);
}

export default App;
