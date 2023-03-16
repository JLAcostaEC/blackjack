import { Link } from "react-router-dom";

export default function Header() {
	return (
		<footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 z-50">
			<div className="mx-auto max-w-screen-xl">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a
							href="/"
							className="flex items-center"
						>
							<img
								src="/images/Logo.png"
								className="mr-3 h-8 dark:[filter:grayscale(1)contrast(0)brightness(100)]"
								alt="FlowBite Logo"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								BlackJApp
							</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Quick Links
							</h2>
							<ul className="text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a
										href="https://flowbite.com"
										className="hover:underline"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="https://tailwindcss.com/"
										className="hover:underline"
									>
										About
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								More about me
							</h2>
							<ul className="text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a
										href="https://github.com/themesberg/flowbite"
										className="hover:underline "
									>
										Portfolio
									</a>
								</li>
								<li>
									<a
										href="https://discord.gg/4eeurUVvTy"
										className="hover:underline"
									>
										Github
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Legal
							</h2>
							<ul className="text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<Link to="/privacy-policy" className="hover:underline">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="/terms-and-conditions" className="hover:underline">
										Terms &amp; Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© { new Date().getFullYear() }{' '}
						<Link to="https://jorgelacosta.com" className="hover:underline">
							Jorge Acosta
						</Link>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
}
