import { useState } from "react";

import Bars3CenterLeftIcon from "@heroicons/react/24/outline/Bars3CenterLeftIcon.js";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon.js";
import NavigationLink from "../atoms/NavigationLink";
import { Link } from "react-router-dom";

export default function Header() {
	const [open, setOpen] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	return (
		<header className="sticky top-0 w-full border-b dark:border-gray-700 z-50">
			<nav className="p-2 py-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<Link to="/" className="flex items-center">
						<img
							src="/images/Logo.png"
							className="mr-3 h-8 sm:h-10 dark:[filter:grayscale(1)contrast(0)brightness(100)] "
							alt="BlackJApp Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							BlackJApp
						</span>
					</Link>
					<button
						type="button"
						className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
						onClick={() => setOpen(!open)}
					>
						<span className="sr-only">Open main menu</span>
						<span className="w-7 stroke-black -scale-x-100 dark:stroke-white">
							<Bars3CenterLeftIcon className="stroke-inherit" />
						</span>
					</button>
					<div
						className={`${
							open
								? ""
								: "opacity-0 pointer-events-none scale-y-0 h-0"
						} origin-top fixed top-14 left-0 md:static transition-all w-full px-2 md:block md:w-auto md:p-0 md:m-0`}
						id="mobile-menu"
					>
						<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-900 dark:text-gray-400">
							<li onClick={() => setOpen(false)}>
								<NavigationLink to="/">Home</NavigationLink>
							</li>
							<li onClick={() => setOpen(false)}>
								<NavigationLink to="/app">Play</NavigationLink>
							</li>
							<li className="relative">
								<button
									id="dropdownNavbarLink"
									onClick={() => setDropdown(!dropdown)}
									className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
								>
									Other Projects
									<span className="w-5 stroke-black dark:stroke-white">
										<ChevronDownIcon className="stroke-inherit" />
									</span>
								</button>
								<div
									id="dropdownNavbar"
									className={`${
										dropdown
											? "mt-3"
											: "opacity-0 pointer-events-none scale-y-0 h-0"
									} origin-top transition-transform z-10 w-full font-normal bg-white rounded divide-y divide-gray-100 shadow-lg md:absolute md:top-0 dark:bg-gray-700 dark:divide-gray-600`}
								>
									<ul
										className="py-1 w-full text-sm text-gray-700 dark:text-gray-400"
										aria-labelledby="dropdownLargeButton"
									>
										<li>
											<NavigationLink
												to="https://jorgelacosta.com"
												rel="author"
												className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Visit My Portfolio
											</NavigationLink>
										</li>
										{/* <li>
											<NavigationLink
												to="#"
												className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Proyect #1
											</NavigationLink>
										</li>
										<li>
											<NavigationLink
												to="#"
												className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Proyect #2
											</NavigationLink>
										</li> */}
									</ul>
								</div>
							</li>
							<li>
								<NavigationLink
									to="/about"
									className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									About
								</NavigationLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
