import HeaderTitle from './HeaderTitle';
import Navbar from './Navbar';
import { ToggleThemeBtn } from './ToggleThemeBtn';

const Header = () => {
	return (
		<header className='flex px-6 py-4 items-center justify-between bg-white dark:text-mainText font-sans fixed mx-auto top-0 w-full z-10 border-b dark:border-gray-700 dark:bg-headerBg backdrop-blur-md'>
			<div className='w-[80%] flex mx-auto justify-between items-center'>
				<HeaderTitle>BUGS TECHS</HeaderTitle>
				<Navbar styles='hidden md:flex' />
				<ToggleThemeBtn />
			</div>
		</header>
	);
};

export default Header;
