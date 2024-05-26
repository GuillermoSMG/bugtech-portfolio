import React from 'react';
import { Service } from './components/ServiceContainer';
import { Values } from './components/Values';
import { Advantages } from './components/Advantages';

export const Services = () => {
	return (
		<section>
			<Service />
			<Values />
			<Advantages />
		</section>
	);
};
