import React from 'react';
import Link from './NavLink';
import { useTranslation } from 'react-i18next';

const LinkList = () => {
	const { t } = useTranslation('NavLinkList');
	const links = t('links', { returnObjects: true });
	return (
	  <>
		<ul className='flex justify-center'>
		  {links.map((link) => (
			<Link key={link.label} to={link.to}>
			  {link.label}
			</Link>
		  ))}
		</ul>
	  </>
	);
  };
  

export default LinkList;
