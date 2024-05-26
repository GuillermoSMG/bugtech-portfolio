import React from 'react';
import { HomeTitleSpan } from './HomeTitleSpan';

export const HomeTitle = ({ text }) => {
	return (
		<h1 className=' text-5xl md:text-[75px] font-bold'>
			<p className='mb-9 tracking-tighter'>
				{text.map((t, i) => (
					<HomeTitleSpan key={i} style={t.style} text={t.content} />
				))}
			</p>
		</h1>
	);
};
