import React from 'react';
import { Value } from './Value';
import { VALUES } from '../const/services';

export const Values = () => {
	return (
		<div className='mx-auto md:px-6 text-default lg:py-20 md:py-16 px-4 py-12 max-w-5xl flex flex-col sm:flex-row gap-8'>
			{VALUES.map((value, i) => (
				<Value
					key={i}
					title={value.title}
					desc={value.desc}
					icon={value.icon}
				/>
			))}
		</div>
	);
};
