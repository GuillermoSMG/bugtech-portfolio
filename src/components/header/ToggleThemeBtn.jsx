import { useContext } from 'react';
import { themeContext } from '../ThemeContext';
import { ThemeIcon, ThemeIconDark } from '@icons';

export const ToggleThemeBtn = () => {
	const { handleTheme, theme } = useContext(themeContext);
	return (
		<button
			onClick={handleTheme}
			className='p-2 dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg'
		>
			{theme === "dark" ?  <ThemeIconDark/>: <ThemeIcon/> }
		</button>
	);
};
