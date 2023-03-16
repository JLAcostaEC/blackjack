import { ButtonHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	to: string;
	rel?: string;
}

export default function NavigationLink({ children, to, rel, className, ...props }: props) {
	return (
		<NavLink
			to={to}
			rel={rel}
			className={({ isActive }) =>
				`block py-2 pr-4 pl-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0  md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent ${
					isActive
						? "currentPage bg-primary-700 hover:bg-primary-500 text-white"
						: "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
				}`
			}
		>
			{children}
		</NavLink>
	);
}
