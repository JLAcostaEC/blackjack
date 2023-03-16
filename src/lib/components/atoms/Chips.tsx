import { ButtonHTMLAttributes, useState } from "react";
import { Chip } from "../../types";
import { BlackJApp } from "../../utils/Game";
import { registerChips } from "../../utils/GameFunctions";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	game: {
		data: InstanceType<typeof BlackJApp>;
	};
	setGame: React.Dispatch<
		React.SetStateAction<{
			data: BlackJApp;
		}>
	>;
}

export default function Chips({ game, setGame }: props) {
	let chips = registerChips();
	if (game.data.player.bank <= 500) {
		chips = chips.filter((item) => item.value <= game.data.player.bank)
		console.log(chips, chips.filter((item) => item.value <= game.data.player.bank))
	}
	return (
		<>
			{chips.map((item, index) => (
				<div
					key={index}
					onClick={() => {
						game.data.placeBet(item.value);
						setGame({ ...game });
					}}
					className="w-[calc(100%/3-11px)]"
				>
					<img src={item.image} alt={`${item.value} Chip`} />
				</div>
			))}
		</>
	);
}
