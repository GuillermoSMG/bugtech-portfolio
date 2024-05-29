import React from 'react';
import { Service } from '../services/components/ServiceContainer';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
	const [t] = useTranslation('contact');
	const contacto = t('contact', { returnObjects: true });
	return (
		<section className='text-center  px-4 pt-24 pb-12 md:px-6' id='contact'>
			<h2 className='dark:text-white text-linkText text-4xl md:text-6xl font-semibold tracking-tighter md:tracking-normal md:mb-2'>
				{t('title')}
			</h2>
			<h3 className='text-1xl md:text-2xl text-mutedLight dark:text-muted tracking-tighter md:tracking-normal'>
				{t('slogan')}
			</h3>
			<Service services={contacto} isContact={true} />
		</section>
	);
};
