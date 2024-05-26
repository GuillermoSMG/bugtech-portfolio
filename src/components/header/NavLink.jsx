import React from 'react';

const Link = ({ children, to }) => {
	return (
		<li className='no-underline cursor-pointer'>
			<a
				href={`${to}`}
				className='px-4 py-3 md:text-[20px] text-linkText hover:text-black dark:text-darkLinkText dark:hover:text-white font-semibold'
			>
				{children}
			</a>
		</li>
	);
};

export default Link;
