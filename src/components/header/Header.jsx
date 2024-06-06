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
				<div className='md:w-[35rem] flex items-end justify-end'>
					<Navbar styles='hidden md:flex' />
				</div>

				<ToggleThemeBtn />
				<div>
					<select
						className='appearance-none bg-slate-100 dark:bg-[#030620e6] text-black dark:text-white py-2 px-4 border border-gray-950 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 rounded-3xl cursor-pointer'
						onChange={e => i18n.changeLanguage(e.target.value)}
					>
						<option value='es'>ES</option>
						<option value='en'>EN</option>
						<option value='br'>BR</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
