import React from 'react';

const HeaderTitle = ({ children }) => {
	return (
		<h1>
			<a href='/' className='font-bold text-[20px] text-black dark:text-white'>
				{children}
			</a>
		</h1>
	);
};

export default HeaderTitle;
