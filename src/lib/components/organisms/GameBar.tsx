import { getCard } from "../../helpers/DeckFunctions";
import { As, CardType, Chip, Deck } from "../../types";
import Button from "../atoms/Button";
import RenderChips from "../atoms/Chips";

type props = {
	children?: JSX.Element[] | JSX.Element;
	step?: "Dealing" | "Playing" | "Waiting";
	setStep: React.Dispatch<
		React.SetStateAction<"Dealing" | "Playing" | "Waiting">
	>;
	bank?: number;
	setBank: React.Dispatch<React.SetStateAction<number>>;
	deck: Deck;
	setDeck: React.Dispatch<React.SetStateAction<Deck>>;
	userHand: Deck;
	setUserHand: React.Dispatch<React.SetStateAction<Deck>>;
	userCounter: number;
	setUserCounter: React.Dispatch<React.SetStateAction<number>>;
	chips: Chip[];
	setChips: React.Dispatch<React.SetStateAction<Chip[]>>;
};

export default function GameBar(props: props) {
	const {
		step,
		bank,
		setStep,
		setDeck,
		setBank,
		deck,
		userHand,
		setUserHand,
		userCounter,
		chips,
		setChips,
	} = props;

	const layout =
		(step === "Dealing" && (
			<>
				<h3>Bank: {bank}</h3>
				<Button
					onClick={() => {
						setStep("Playing");
					}}
				>
					Bet
				</Button>
				{RenderChips(bank, setBank, chips)}
			</>
		)) ||
		(step === "Playing" && (
			<>
				{userHand.map((item) => item.value)}
				<button
					type="button"
					onClick={() => {
						const card = deck.pop();
						const newUserHand = [
							...userHand,
							card as CardType | As,
						];
						setUserHand(newUserHand);
						setDeck([...deck]);
					}}
					className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Hit
				</button>
				<button
					type="button"
					onClick={() => {
						setStep("Waiting");
					}}
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Stand
				</button>
			</>
		)) ||
		(step === "Waiting" && (
			<>
				<h3>Bank: {bank}</h3>
				<h3>Bet: {bank}</h3>
				<h3>Hand: {bank}</h3>
			</>
		));

	return (
		<div className="fixed bottom-0 left-0 w-full flex justify-center items-center p-4 gap-4 text-white bg-black/50 ">
			{layout}
		</div>
	);
}
