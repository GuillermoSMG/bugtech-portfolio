export const ThemeIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#9CA3AF'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-sun'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
			<path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
		</svg>
	);
};

const WebIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#011bef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-world-www mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4' />
			<path d='M11.5 3a16.989 16.989 0 0 0 -1.826 4' />
			<path d='M12.5 3a16.989 16.989 0 0 1 1.828 4' />
			<path d='M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4' />
			<path d='M11.5 21a16.989 16.989 0 0 1 -1.826 -4' />
			<path d='M12.5 21a16.989 16.989 0 0 0 1.828 -4' />
			<path d='M2 10l1 4l1.5 -4l1.5 4l1 -4' />
			<path d='M17 10l1 4l1.5 -4l1.5 4l1 -4' />
			<path d='M9.5 10l1 4l1.5 -4l1.5 4l1 -4' />
		</svg>
	);
};

const LandingIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#011bef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-plane mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z' />
		</svg>
	);
};

const DefaultIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#011bef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-code mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M7 8l-4 4l4 4' />
			<path d='M17 8l4 4l-4 4' />
			<path d='M14 4l-4 16' />
		</svg>
	);
};

const AdIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#011bef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-ad'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
			<path d='M7 15v-4a2 2 0 0 1 4 0v4' />
			<path d='M7 13l4 0' />
			<path d='M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5' />
		</svg>
	);
};

const PortfolioIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#011bef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-luggage mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M6 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z' />
			<path d='M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1' />
			<path d='M6 10h12' />
			<path d='M6 16h12' />
			<path d='M9 20v1' />
			<path d='M15 20v1' />
		</svg>
	);
};

export const ServiceIcon = ({ name = 'DefaultIcon' }) => {
	return (
		<>
			{name === 'LandingIcon' && <LandingIcon />}
			{name === 'WebIcon' && <WebIcon />}
			{name === 'AdIcon' && <AdIcon />}
			{name === 'PortfolioIcon' && <PortfolioIcon />}
			{name === 'DefaultIcon' && <DefaultIcon />}
		</>
	);
};
