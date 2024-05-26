import React from 'react';
import { HomeTitle } from './components/HomeTitle';
import { HomeTitleSpan } from './components/HomeTitleSpan';

const Home = () => {
	return (
		<section
			className='mt-12 md:mt-[73px] px-4 md:px-6 w-full md:w-[80vw] mx-auto mb-6 pb-12'
			id='home'
		>
			<div className='mx-auto text-center pb-10'>
				<HomeTitle
					text={[
						{
							content: 'Creación de software altamente ',
							style: 'dark:text-mainText text-linkText',
						},
						{
							content: 'personalizado',
							style: 'dark:text-white text-actionText',
						},
					]}
				/>
				<div className='mx-auto'>
					<p className='text-infoText dark:text-infoTextDark text-xl md:max-w-[75%] mx-auto'>
						En <HomeTitleSpan text='Bugs Technologies ' style='font-semibold' />
						creamos software bajo demanda adecuado para startups y pequeñas
						empresas. A su vez también creamos ecommerce, landing pages,
						portfolios profesionales y sitios web de marketing.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
