/* eslint-disable camelcase */
import { useTranslation } from 'react-i18next';
import { Advantages } from './components/Advantages';
import { Service } from './components/ServiceContainer';
import { Values } from './components/Values';

export const Services = () => {
const [t] = useTranslation("services")

	const services = t("services", { returnObjects: true })
	const values = t("values", { returnObjects: true })
	const valuestwo = t("values_two", { returnObjects: true })
	const advantages = t("advantages", { returnObjects: true })
	const advantagestwo = t("advantages_two", { returnObjects: true })
	const characteristics = t("characteristics", { returnObjects: true })
	return (
		<section>
			<div className='pt-16 flex justify-center flex-col items-center text-left m-auto px-4 md:pl-0 '>
				<h3 className='text-black dark:text-white text-xl md:text-2xl font-semibold'>
					🚀 {t("text-section.0.title")}
				</h3>
				<p className=' text-black dark:text-white text-balance'>
					✨ {t("text-section.0.body-text")} <span className='font-medium'>{t("text-section.0.body-text1")}</span>, 
					{t("text-section.0.body-text4")}{' '}
					<span className='font-medium'>{t("text-section.0.body-text2")}</span>
					 {t("text-section.0.body-text3")}
				</p>
				<ul className='text-left py-8 flex flex-col gap-3 text-black dark:text-white md:w-[45%]'>
					<li>
						<span className='font-bold'>🏠  {t("text-section.0.home")}</span>
						 {t("text-section.0.home-body")}
					</li>
					<li>
						<span className='font-bold'>📞  {t("text-section.0.contact")}</span> 
						 {t("text-section.0.contact-body")}
					</li>
					<li>
						<span className='font-bold'>
							👥  {t("text-section.0.about-me")}
						</span>{' '}
						{t("text-section.0.about-body")}
					</li>
					<li>
						<span className='font-bold'>📸  {t("text-section.0.galery")}</span> 
						{t("text-section.0.galery-body")}
					</li>
					<li>
						<span className='font-bold'>🔗  {t("text-section.0.social-media")}</span>{' '}
						{t("text-section.0.media-body")}
					</li>
				</ul>
				<p className='text-black dark:text-white text-balance font-semibold text-[18px]'>
					🚀 {t("text-section.0.extra3")}
				</p>
				<p className='text-black dark:text-white md:w-[70%] text-center'>
				{t("text-section.0.extra")}
					<a href='#contact' className='text-blue-950 dark:text-blue-500'>
					{t("text-section.0.link")}
					</a>{' '}
					{t("text-section.0.extra1")}
				</p>
				<p className='text-black dark:text-white text-center font-semibold text-[18px]'>
					🌐 	{t("text-section.0.extra2")}
				</p>
			</div>

			<Service services={services} />
			<Values values={values} />
			<Values values={valuestwo} />
			<Advantages
				order='md:order-last'
				advanteges={advantages}
				isFirst={true}
			/>
			<Advantages advanteges={advantagestwo} />
			<Service services={characteristics} />
		</section>
	);
};
