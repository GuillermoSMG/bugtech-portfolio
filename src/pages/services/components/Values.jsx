import React from 'react';
import { Value } from './Value';

export const Values = ({ values }) => {
	return (
		<div className='mx-auto md:px-6 text-default lg:py-16 md:py-16 px-4 py-4 sm:py-10 max-w-5xl flex flex-col sm:flex-row gap-8'>
			{values?.map((value, i) => (
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
