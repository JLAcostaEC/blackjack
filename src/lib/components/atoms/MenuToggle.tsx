import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export default function Button({ ...props }: props) {
	return (
		<button
      {...props}
			type="button"
			className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
		>
			<span className="sr-only">Open main menu</span>
			<span className="w-7 stroke-black -scale-x-100">
				<Bars3CenterLeftIcon className="stroke-black" />
			</span>
		</button>
	);
}
