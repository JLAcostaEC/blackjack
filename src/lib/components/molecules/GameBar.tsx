type props = {
	children?: JSX.Element[] | JSX.Element;
};

export default function GameBar({ children, ...props }: props) {
	return (
		<section
			id="game-bar"
			className="sticky bottom-0 left-0 w-full bg-gray-900 p-3 z-0"
		>
			{children}
		</section>
	);
}
