import React, { useState } from "react";

// Icons
import { EyeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

// Components
import { Alert } from "flowbite-react";

export default function WelcomeMessage() {
	const [show, setShow] = useState(true);
	return show ? (
		<div className="fixed w-screen h-screen left-0 top-0 backdrop-blur-sm bg-black/50">
			<div className="w-2/6 h-full flex justify-center items-center m-auto">
				<Alert
					color="info"
					additionalContent={
						<React.Fragment>
							<div className="mt-2 mb-4 text-sm font-medium text-black">
								This is a small project where you can appreciate
								my skills with React, Taildwind & Node. In
								addition to my knowledge in UI/UX. If you have
								any suggestions or want to contact me, you can
								do so through the Contact section.
							</div>
							<div className="flex">
								<a
									href="https://jorgelacosta.com"
									target="_blank"
									rel="noreferrer"
									className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
									onClick={() => setShow(false)}
								>
									<EyeIcon className="-ml-0.5 mr-2 h-4 w-4" />
									Meet me
								</a>
								<button
									type="button"
									className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
									onClick={() => setShow(false)}
								>
									Dismiss
								</button>
							</div>
						</React.Fragment>
					}
					icon={InformationCircleIcon}
				>
					<h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
						Welcome to BlackJApp
					</h3>
				</Alert>
			</div>
		</div>
	) : null;
}
