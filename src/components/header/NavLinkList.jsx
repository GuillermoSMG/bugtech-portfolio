import React from 'react';
import Link from './NavLink';
import { useTranslation } from 'react-i18next';

const LinkList = () => {
	const { t } = useTranslation('banner');
	const links = t('links', { returnObjects: true });
	return (
	  <>
		<ul className='flex justify-center'>
		  {links.map((link, index) => (
			<Link key={index} to={link.to}>
			  {link.label}
			</Link>
		  ))}
		</ul>
	  </>
	);
  };
  

export default LinkList;
