import { ServiceArticle } from './ServiceArticle';

export const Service = ({ services, isContact }) => {
	return (
		<main className='relative mx-auto max-w-7xl md:px-6 text-default lg:py-20 md:py-16 px-4 py-12 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6 sm:gap-y-8'>
			{services.map((serv, i) => (
				<ServiceArticle
					key={i}
					title={serv.title}
					desc={serv.desc}
					icon={serv.icon}
					isContact={isContact}
				/>
			))}
		</main>
	);
};
