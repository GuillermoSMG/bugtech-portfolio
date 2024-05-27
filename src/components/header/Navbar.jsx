import React from 'react';
import LinkList from './NavLinkList';

const Navbar = ({ styles }) => {
	return (
		<nav className={styles}>
			<LinkList />
		</nav>
	);
};

export default Navbar;
