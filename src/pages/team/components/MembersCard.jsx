export const MembersCard = ({ title, desc, img, linkedin, whatsapp }) => {
	return (
		<main className='backdrop-blur  border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-white rounded-lg dark:text-white relative text-default lg:py-20 md:py-16 px-4 py-12 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6 sm:gap-y-8'>
			<div className='flex flex-col items-center justify-center text-center'>
				<h3 className='text-4xl mb-3'>{title}</h3>
				<img src={img} alt={title} className='rounded-full mb-4' />
				<p>{desc}</p>
				<icon></icon>
			</div>
		</main>
	);
};
