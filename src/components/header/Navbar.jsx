import React from 'react';
import LinkList from './NavLinkList';

const Navbar = () => {
	return (
		<nav className='hidden md:flex'>
			<LinkList />
		</nav>
	);
};

export default Navbar;
