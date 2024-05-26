import HeaderTitle from './HeaderTitle';
import Navbar from './Navbar';
import { ToggleThemeBtn } from './ToggleThemeBtn';

const Header = () => {
	return (
		<header className='flex px-6 py-4 items-center justify-between bg-white dark:text-mainText font-sans sticky top-0 border-b dark:border-gray-700 dark:bg-headerBg backdrop-blur-md'>
			<HeaderTitle>BUGS TECHS</HeaderTitle>
			<Navbar />
			<ToggleThemeBtn />
		</header>
	);
};

export default Header;
