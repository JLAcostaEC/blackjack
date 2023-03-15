import { Children } from "react";
export default function CardsHolder({
	children,
	className,
}: {
	children?: JSX.Element | JSX.Element[],
	className?: string,
}) {
	const childrens = Children.toArray(children);

	return (
		<div
			className={`flex items-start ${
				!childrens?.length &&
				"w-28 h-44 border-emerald-700 border-4 rounded-lg border-dashed"
			} ${className}`}
		>
			{childrens}
		</div>
	);
}
