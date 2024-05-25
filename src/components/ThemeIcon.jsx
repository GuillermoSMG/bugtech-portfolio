import { useContext } from 'react';
import { ThemeIconDark, ThemeIconLight } from './Icons';
import { themeContext } from './ThemeContext';

export const ThemeIcon = () => {
	const { theme, handleTheme } = useContext(themeContext);
	return (
		<button onClick={handleTheme}>
			{theme === 'dark' ? <ThemeIconDark /> : <ThemeIconLight />}
		</button>
	);
};
