import { WhatsappIcon, LinkedinIcon } from '@icons';
export const MembersCard = ({ title, desc, img, linkedin, whatsapp }) => {
	return (
		<main className='backdrop-blur  border border-[#ffffff29]  dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-white rounded-lg dark:text-white relative text-default lg:py-8 md:py-8 px-2 py-4 md grid lg:grid-cols-3 mb-5 md:ml-4 md:max-w-[430px] sm:grid-cols-2 gap-4 md:gap-6 sm:gap-y-8'>
			<div className='flex flex-col items-center justify-center text-center  md:w-[415px]'>
				<h3 className='text-4xl mb-3'>{title}</h3>
				<img src={img} alt={title} className='rounded-full mb-4' />
				<p>{desc}</p>
				<div className='flex justify-center w-21 h-21 mt-4'>
					<a
						href={whatsapp}
						target='_blank'
						rel='noreferrer'
						data-testid='serviceAnchor'
					>
						<WhatsappIcon />
					</a>
					<a
						href={linkedin}
						target='_blank'
						rel='noreferrer'
						data-testid='serviceAnchor'
					>
						<LinkedinIcon />
					</a>
				</div>
			</div>
		</main>
	);
};
