import React from 'react';
import { LINKS } from '../../const/navbar';
import Link from './NavLink';
import { useTranslation } from 'react-i18next';

const LinkList = () => {
	const [t] = useTranslation('banner');
	console.log(t('links.label'));
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
