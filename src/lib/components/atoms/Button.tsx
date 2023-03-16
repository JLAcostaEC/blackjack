import { ButtonHTMLAttributes, ReactNode } from "react";

interface props extends ButtonHTMLAttributes< HTMLButtonElement > {
	children: ReactNode
}

export default function Button({ children, ...props }: props) {
	return (
		<button
      {...props}
			className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
		>
			{children}
		</button>
	);
}
