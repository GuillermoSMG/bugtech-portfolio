import { useTranslation } from 'react-i18next';
import HeaderTitle from './HeaderTitle';
import Navbar from './Navbar';
import { ToggleThemeBtn } from './ToggleThemeBtn';

const Header = () => {
	const { i18n } = useTranslation();
	return (
		<header className='flex px-6 py-4 items-center justify-between bg-white dark:text-mainText font-sans fixed mx-auto top-0 w-full z-10 border-b dark:border-gray-700 dark:bg-headerBg backdrop-blur-md'>
			<div className='w-[80%] flex mx-auto justify-between items-center'>
				<HeaderTitle>BUGS TECHS</HeaderTitle>
				<Navbar styles='hidden md:flex' />
				<div className='flex space-x-2'>
					<button
						onClick={() => i18n.changeLanguage('es')}
						className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'
					>
						es
					</button>
					<button
						onClick={() => i18n.changeLanguage('en')}
						className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300'
					>
						en
					</button>
					<button
						onClick={() => i18n.changeLanguage('br')}
						className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300'
					>
						br
					</button>
				</div>
				<ToggleThemeBtn />
			</div>
		</header>
	);
};

export default Header;
