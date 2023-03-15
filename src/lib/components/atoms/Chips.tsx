import { Chip } from "../../types";

export default function RenderChips(bank, setBank, chips: Chip[]) {
	if (bank < 500) {
		chips = chips.filter((item) => item.value <= bank);
	}
	return (
		<>
			{chips.map((item, index) => (
				<div key={index} onClick={() => setBank(bank - item.value)}>
					<img src={item.image} alt={`${item.value} Chip`} />
				</div>
			))}
		</>
	);
}
