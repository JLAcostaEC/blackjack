type props = {
  children?: JSX.Element[] | JSX.Element
}

export default function Table({children}: props) {
	return (
		<section
			id="cards-holder"
			className="w-full h-full flex flex-col overflow-hidden justify-between px-4  py-6 bg-gradient-to-br from-green-800 via-emerald-900 to-green-900"
		>
			{children}
		</section>
	);
}
