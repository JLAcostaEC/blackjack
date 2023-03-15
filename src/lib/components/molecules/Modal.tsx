import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	toggleVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, toggleVisibility, ...props }: props) {
	return (
		<>
			<div
				id="successModal"
				tabIndex={-1}
				aria-hidden="true"
				className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen"
			>
				<div className="relative p-4 w-full max-w-md md:h-auto">
					<div className="relative p-4 text-center bg-white min-h-[80px] rounded-lg shadow dark:bg-gray-800 sm:p-5">
						<button
							type="button"
							className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => toggleVisibility(false)}
						>
							<XMarkIcon
								className="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							/>
							<span className="sr-only">Close modal</span>
						</button>
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
