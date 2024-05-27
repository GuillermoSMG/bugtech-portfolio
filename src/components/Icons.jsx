import { useContext } from 'react';
import { themeContext } from './ThemeContext';

export const ThemeIcon = () => {
	return (
		<img
			src='https://i.ibb.co/ZWmbGbj/etmfdr.gif'
			className='h-8 rounded-xl w-[55px]'
			alt='Set dark mode'
			data-testid='light-icon'
		/>
	);
};
export const ThemeIconDark = () => {
	return (
		<img
			src='https://i.pinimg.com/originals/94/ff/74/94ff7463a1574221ba6d4ada2c997e0b.gif'
			className='h-8 rounded-xl w-[55px]'
			alt='Set light mode'
			data-testid='dark-icon'
		/>
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
			stroke='#0161ef'
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
			stroke='#0161ef'
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
			stroke='#0161ef'
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
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#0161ef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-ad mb-6'
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
			stroke='#0161ef'
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

const CheckIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#fff'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-list-check bg-[#0161ef] rounded-full p-3'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3.5 5.5l1.5 1.5l2.5 -2.5' />
			<path d='M3.5 11.5l1.5 1.5l2.5 -2.5' />
			<path d='M3.5 17.5l1.5 1.5l2.5 -2.5' />
			<path d='M11 6l9 0' />
			<path d='M11 12l9 0' />
			<path d='M11 18l9 0' />
		</svg>
	);
};

const FlatCheckIcon = () => {
	return (
		<svg
			width='48px'
			height='48px'
			viewBox='0 0 24.00 24.00'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			stroke='#ffffff'
			strokeWidth='0.00024000000000000003'
			transform='matrix(1, 0, 0, 1, 0, 0)rotate(0)'
			className='mb-6'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
				stroke='#CCCCCC'
				strokeWidth='0.43200000000000005'
			></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<rect width='24' height='24' fill='transparent'></rect>{' '}
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M9.55879 3.6972C10.7552 2.02216 13.2447 2.02216 14.4412 3.6972L14.6317 3.96387C14.8422 4.25867 15.1958 4.41652 15.5558 4.37652L16.4048 4.28218C18.3156 4.06988 19.9301 5.68439 19.7178 7.59513L19.6235 8.44415C19.5835 8.8042 19.7413 9.15774 20.0361 9.36831L20.3028 9.55879C21.9778 10.7552 21.9778 13.2447 20.3028 14.4412L20.0361 14.6317C19.7413 14.8422 19.5835 15.1958 19.6235 15.5558L19.7178 16.4048C19.9301 18.3156 18.3156 19.9301 16.4048 19.7178L15.5558 19.6235C15.1958 19.5835 14.8422 19.7413 14.6317 20.0361L14.4412 20.3028C13.2447 21.9778 10.7553 21.9778 9.55879 20.3028L9.36831 20.0361C9.15774 19.7413 8.8042 19.5835 8.44414 19.6235L7.59513 19.7178C5.68439 19.9301 4.06988 18.3156 4.28218 16.4048L4.37652 15.5558C4.41652 15.1958 4.25867 14.8422 3.96387 14.6317L3.6972 14.4412C2.02216 13.2447 2.02216 10.7553 3.6972 9.55879L3.96387 9.36831C4.25867 9.15774 4.41652 8.8042 4.37652 8.44414L4.28218 7.59513C4.06988 5.68439 5.68439 4.06988 7.59513 4.28218L8.44415 4.37652C8.8042 4.41652 9.15774 4.25867 9.36831 3.96387L9.55879 3.6972ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.8882 14.526C11.3977 15.0166 10.6023 15.0166 10.1118 14.526L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z'
					fill='#16bd00'
				></path>{' '}
			</g>
		</svg>
	);
};

const ContactIcon = () => {
	return (
		<svg
			width='48px'
			height='48px'
			viewBox='0 0 1024 1024'
			className='icon mb-6'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			fill='#000000'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M853.333333 149.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333334v554.666666c0 46.933333 38.4 85.333333 85.333334 85.333334h106.666666v-27.733334c-12.8-6.4-21.333333-21.333333-21.333333-36.266666 0-23.466667 19.2-42.666667 42.666667-42.666667s42.666667 19.2 42.666666 42.666667c0 14.933333-8.533333 29.866667-21.333333 36.266666V874.666667h384v-27.733334c-12.8-6.4-21.333333-21.333333-21.333333-36.266666 0-23.466667 19.2-42.666667 42.666666-42.666667s42.666667 19.2 42.666667 42.666667c0 14.933333-8.533333 29.866667-21.333333 36.266666V874.666667h106.666666c46.933333 0 85.333333-38.4 85.333334-85.333334V234.666667c0-46.933333-38.4-85.333333-85.333334-85.333334z'
					fill='#673AB7'
				></path>
				<path
					d='M512 384m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z'
					fill='#D1C4E9'
				></path>
				<path
					d='M661.333333 597.333333s-40.533333-85.333333-149.333333-85.333333-149.333333 85.333333-149.333333 85.333333v42.666667h298.666666v-42.666667z'
					fill='#D1C4E9'
				></path>
			</g>
		</svg>
	);
};

const FastIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#fff'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-jetpack bg-[#0161ef] rounded-full p-3'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M10 6a3 3 0 1 0 -6 0v7h6v-7z' />
			<path d='M14 13h6v-7a3 3 0 0 0 -6 0v7z' />
			<path d='M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5' />
			<path d='M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5' />
			<path d='M10 8h4' />
			<path d='M10 11h4' />
		</svg>
	);
};

const GreenCheckIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='28'
			height='28'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#fff'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-check rounded-full bg-[#15803d] p-1'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M5 12l5 5l10 -10' />
		</svg>
	);
};

export const MoneyIcon = () => {
	const { theme } = useContext(themeContext);
	return (
		<svg
			width='44px'
			height='44px'
			viewBox='0 0 1024 1024'
			xmlns='http://www.w3.org/2000/svg'
			fill='#000000'
			className='mb-6'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<circle
					cx='512'
					cy='512'
					r='512'
					style={{ fill: '#dba614' }}
				></circle>{' '}
				<path
					d='M570.9 482.6h-29.4V364.8h58.9c16.3 0 29.4 13.2 29.4 29.4s13.2 29.4 29.4 29.4c16.3 0 29.4-13.2 29.4-29.4 0-48.8-39.5-88.3-88.3-88.3h-58.9V247c0-16.3-13.2-29.4-29.4-29.4-16.3 0-29.4 13.2-29.4 29.4v59h-29.4c-65 0-117.7 52.7-117.7 117.7s52.7 117.7 117.7 117.7h29.4v117.7h-58.9c-16.3 0-29.4-13.2-29.4-29.4 0-16.3-13.2-29.4-29.4-29.4s-29.4 13.2-29.4 29.4c0 48.8 39.5 88.3 88.3 88.3h58.9v58.9c0 16.3 13.2 29.4 29.4 29.4 16.3 0 29.4-13.2 29.4-29.4V718h29.4c65 0 117.7-52.7 117.7-117.7s-52.7-117.7-117.7-117.7zm-88.3 0h-29.4c-32.5 0-58.9-26.4-58.9-58.9s26.4-58.9 58.9-58.9h29.4v117.8zm88.3 176.6h-29.4V541.4h29.4c32.5 0 58.9 26.4 58.9 58.9-.1 32.5-26.4 58.9-58.9 58.9z'
					style={{ fill: theme === 'dark' ? 'rgb(15 23 42)' : '#fff' }}
				></path>{' '}
			</g>
		</svg>
	);
};

export const PhoneIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#0161ef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-message mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M11 3h10v8h-3l-4 2v-2h-3z' />
			<path d='M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2' />
			<path d='M10 18v.01' />
		</svg>
	);
};

export const EmailIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#0161ef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-mail mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
			<path d='M3 7l9 6l9 -6' />
		</svg>
	);
};

export const InstagramIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#0161ef'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram mb-6'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
			<path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
			<path d='M16.5 7.5l0 .01' />
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
			{name === 'CheckIcon' && <CheckIcon />}
			{name === 'GreenCheckIcon' && <GreenCheckIcon />}
			{name === 'FastIcon' && <FastIcon />}
			{name === 'FlatCheckIcon' && <FlatCheckIcon />}
			{name === 'ContactIcon' && <ContactIcon />}
			{name === 'MoneyIcon' && <MoneyIcon />}
			{name === 'PhoneIcon' && <PhoneIcon />}
			{name === 'EmailIcon' && <EmailIcon />}
			{name === 'InstagramIcon' && <InstagramIcon />}
			{name === 'DefaultIcon' && <DefaultIcon />}
		</>
	);
};
