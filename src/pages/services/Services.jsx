import { Service } from './components/ServiceContainer';
import { Values } from './components/Values';
import { Advantages } from './components/Advantages';
import { CHARACTERISTICS, SERVICES } from './const/services';

export const Services = () => {
	return (
		<section>
			<Service services={SERVICES} />
			<Values />
			<Advantages />
			<Service services={CHARACTERISTICS} />
		</section>
	);
};
