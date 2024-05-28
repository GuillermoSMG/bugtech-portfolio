import { useTranslation } from "react-i18next";

export const Banner = () => {
	const [t] = useTranslation("banner")
	return (
		<section className='not-prose bg-blue-50 dark:bg-gray-950' id='services'>
			<div className='mx-auto px-4 sm:px-6 font-medium max-w-6xl py-4 text-center text-md dark:text-darkLinkText tracking-tighter'>
				{t("banner.texto-banner")}{' '}
				<span className='block md:inline'>💡</span>
			</div>
		</section>
	);
};
