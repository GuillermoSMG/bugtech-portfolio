import React from 'react';
import { TEAM } from './const/DataMembers';
import { MembersCard } from './components/MembersCard';

export const Team = () => {
	return (
		<section
			className='text-center px-4 pt-24 pb-12 md:px-6 dark:bg-darkBg '
			id='team'
		>
			<h2 className='dark:text-white text-linkText text-4xl md:text-6xl font-semibold tracking-tighter md:tracking-normal md:mb-2 mb-5'>
				¡Nuestro equipo!
			</h2>
			<div className='md:flex md:justify-center'>
				{TEAM.map((member, i) => (
					<MembersCard
						key={i}
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
