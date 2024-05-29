import React from 'react';

import { MembersCard } from './components/MembersCard';
import { useTranslation } from 'react-i18next';

export const Team = () => {
	const [t] = useTranslation('team');
	const team = t('TEAM', { returnObjects: true });
	return (
		<section
			className='text-center px-4 pt-24 pb-12 md:px-6 dark:bg-darkBg '
			id='team'
		>
			<h2 className='dark:text-white text-linkText text-4xl md:text-6xl font-semibold tracking-tighter md:tracking-normal md:mb-8 mb-5'>
				{t("text")}
			</h2>
			<div className='md:flex md:justify-center'>
				{team.map(member => (
					<MembersCard
						key={member.title}
						title={member.title}
						desc={member.desc}
						img={member.img}
						whatsapp={member.whatsapp}
						linkedin={member.linkedin}
					/>
				))}
			</div>
		</section>
	);
};
