
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#fcf3f3",
					100: "#f9e8e8",
					200: "#efc5c5",
					300: "#e5a3a2",
					400: "#d25d5d",
					500: "#be1817",
					600: "#ab1615",
					700: "#8f1211",
					800: "#720e0e",
					900: "#5d0c0b",
				},
			},
			screens:{
				xs: '380px'
			}
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
