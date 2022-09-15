import { Spinner } from "flowbite-react";
import { useState } from "react";

export function PreloaderSpin() {
	const [hide, setHide] = useState(false);
	if (!hide) {
		return (
			<div className="flex flex-wrap items-center gap-2">
				<Spinner aria-label="Preloader Spinner" size="xl" />
			</div>
		);
	}else {
    return
  }
}
