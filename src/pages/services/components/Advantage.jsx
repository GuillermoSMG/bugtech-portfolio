import React from 'react';
import { ServiceIcon } from '@icons';

export const Advantage = ({ title, desc, icon }) => {
	return (
		<div className='flex'>
			<div>
				<ServiceIcon name={icon} />
			</div>
			<div>
				<h3 className='ml-2 rtl:ml-0 rtl:mr-2 dark:text-white font-medium leading-6 text-lg'>
					{title}
				</h3>
				<p className='text-muted mt-3 dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2'>
					{desc}
				</p>
			</div>
		</div>
	);
};
