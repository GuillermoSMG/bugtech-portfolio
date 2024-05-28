import React from 'react';
import { AdvantagesTitle } from './AdvantagesTitle';
import { Advantage } from './Advantage';

export const Advantages = ({ order = '', advanteges, isFirst }) => {
	return (
		<div className='p-10 md:flex md:gap-16'>
			<div
				className={`${order} md:basis-1/2 mx-auto gap-8 grid gap-y-4 md:gap-y-8`}
			>
				<AdvantagesTitle
					styles={`font-bold dark:text-white sm:text-3xl tracking-tight text-lg mb-8 ${!isFirst && 'invisible'}`}
				>
					Ventajas de nuestros servicios
				</AdvantagesTitle>
				{advanteges?.map((adv, i) => (
					<Advantage
						key={i}
						title={adv.title}
						desc={adv.desc}
						icon={adv.icon}
					/>
				))}
			</div>
			<div className='basis-1/2'>
				<img
					alt='Servicios'
					className='mx-auto w-full h-auto aspect-[1.125] bg-gray-500 rounded-lg shadow-lg object-cover object-center md:mt-0 mt-10 md:basis-1/2 text-muted'
					crossOrigin='anonymous'
					decoding='async'
					height='40'
					loading='lazy'
					referrerPolicy='no-referrer'
					src='/services2.webp'
				/>
			</div>
		</div>
	);
};
