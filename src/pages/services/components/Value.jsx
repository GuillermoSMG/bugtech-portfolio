import React from 'react';
import { ServiceIcon } from '@icons';

export const Value = ({ title, desc, icon }) => {
	return (
		<article className='flex'>
			<div className='mr-4'>
				<ServiceIcon name={icon} />
			</div>
			<div>
				<span className='font-bold text-xl md:text-[1.3rem] text-linkText dark:text-darkLinkText'>
					{title}
				</span>
				<p className='text-muted mt-3'>{desc}</p>
			</div>
		</article>
	);
};
