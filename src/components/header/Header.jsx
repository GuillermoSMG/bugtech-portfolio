import HeaderTitle from './HeaderTitle';
import Navbar from './Navbar';
import { ToggleThemeBtn } from './ToggleThemeBtn';

const Header = () => {
	return (
		<header className='flex px-6 py-4 items-center justify-between font-sans sticky top-0 border-b border-gray-50/0 dark:bg-[#030621e6]'>
			<HeaderTitle>BUGS TECHS</HeaderTitle>
			<Navbar />
			<ToggleThemeBtn />
		</header>
	);
};

export default Header;
