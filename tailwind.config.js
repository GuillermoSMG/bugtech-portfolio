/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBg: '#030620',
				mainBg: '#fff',
				headerBg: '#030620fa',
				mainText: '#e5e7eb',
				linkText: '#101010',
				darkLinkText: '#E5ECF6',
				actionText: '#6D28D9',
				infoText: '#101010A8',
				infoTextDark: '#CBD5E1',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
