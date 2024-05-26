import { ServiceIcon } from '@icons';

export const ServiceArticle = ({ title, desc, icon }) => {
	return (
		<article className='flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]'>
			<div className='text-left'>
				<ServiceIcon name={icon} />
				<h3 className='font-bold text-xl text-linkText dark:text-darkLinkText'>
					{title}
				</h3>
				<p className='mt-2 text-mutedLight dark:text-muted'>{desc}</p>
			</div>
		</article>
	);
};
