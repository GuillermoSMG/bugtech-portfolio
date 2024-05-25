import React, { createContext, useEffect, useState } from 'react';

export const themeContext = createContext();

export const ThemeContextConteiner = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
			return 'dark';
		}
		return 'light';
	});
	useEffect(() => {
		if (theme === 'dark') {
			document.querySelector('html').classList.add('dark');
			document.querySelector('html').classList.remove('light');
		} else {
			document.querySelector('html').classList.add('light');
			document.querySelector('html').classList.remove('dark');
		}
	}, [theme]);

	const handleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
	};
	return (
		<themeContext.Provider value={{ theme, handleTheme }}>
			{children}
		</themeContext.Provider>
	);
};
