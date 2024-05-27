import React from 'react';
import { LINKS } from '../../const/navbar';
import Link from './NavLink';
const LinkList = () => {
	return (
		<>
			<ul className='flex justify-center'>
				{LINKS.map(link => (
					<Link key={link.label} to={link.to}>
						{link.label}
					</Link>
				))}
			</ul>
		</>
	);
};

export default LinkList;
