import React from 'react';
import { ServiceIcon } from '@icons';

export const Value = ({ title, desc, icon }) => {
	return (
		<article className='flex basis-1/2'>
			<div className='mr-4'>
				<ServiceIcon name={icon} />
			</div>
			<div>
				<span className='font-bold text-xl md:text-[26px] text-linkText dark:text-darkLinkText'>
					{title}
				</span>
				<p className='text-mutedLight mt-3 text-[16px] md:text-[20px] dark:text-slate-400'>
					{desc}
				</p>
			</div>
		</article>
	);
};
