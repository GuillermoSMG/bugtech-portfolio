import React from 'react';

const HeaderTitle = ({ children }) => {
	return (
		<span>
			<a href='/' className='font-bold text-[20px] text-black dark:text-white'>
				{children}
			</a>
		</span>
	);
};

export default HeaderTitle;
