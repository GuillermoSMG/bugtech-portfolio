import React from 'react';

const Link = ({ children, to }) => {
	return (
		<li className='no-underline cursor-pointer'>
			<a
				href={`${to}`}
				className='px-4 py-3 text-[#101010] dark:text-[#E5ECF6] font-semibold'
			>
				{children}
			</a>
		</li>
	);
};

export default Link;
