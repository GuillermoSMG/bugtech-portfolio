import React from 'react';

const Home = () => {
	return (
		<section
			className='mt-12 md:mt-[73px] px-4 md:px-6 w-full md:w-[80vw] mx-auto mb-6 pb-12'
			id='home'
		>
			<div className='mx-auto text-center pb-10'>
				<h1 className=' text-5xl md:text-6xl font-bold'>
					<p className='mb-9 tracking-tighter'>
						<span className='dark:text-mainText text-linkText'>
							Creación de software altamente{' '}
						</span>
						<span className='dark:text-white text-actionText'>
							personalizado
						</span>
					</p>
				</h1>
				<div className='mx-auto'>
					<p className='text-infoText dark:text-infoTextDark text-xl md:max-w-[75%] mx-auto'>
						En <span className='font-semibold'>Bug Technologies</span> creamos
						software bajo demanda adecuado para startups y pequeñas empresas. A
						su vez también creamos ecommerce, landing pages, portfolios
						profesionales y sitios web de marketing.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
