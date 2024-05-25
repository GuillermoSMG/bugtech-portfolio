import { useContext } from 'react';
import { themeContext } from '../ThemeContext';
import { ThemeIcon } from '../Icons';

export const ToggleThemeBtn = () => {
	const { handleTheme } = useContext(themeContext);
	return (
		<button
			onClick={handleTheme}
			className='p-2 dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg'
		>
			<ThemeIcon />
		</button>
	);
};
