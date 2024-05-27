import React from 'react';
import { Service } from '../services/components/ServiceContainer';
import { CONTACT } from './const/contact';

export const Contact = () => {
	return (
		<section
			className='text-center lg:pt-10 lg:mt-10 lg:pb-20 md:pt-8 md:mt-8 md:pb-16 px-4 pt-6 mt-6 pb-12 md:px-6'
			id='contact'
		>
			<h2 className='dark:text-white text-linkText text-4xl md:text-6xl font-semibold tracking-tighter md:tracking-normal md:mb-2'>
				¡Contactanos!
			</h2>
			<h3 className='text-1xl md:text-2xl text-mutedLight dark:text-muted tracking-tighter md:tracking-normal'>
				Estamos para ayudarte
			</h3>
			<Service services={CONTACT} isContact={true} />
		</section>
	);
};
