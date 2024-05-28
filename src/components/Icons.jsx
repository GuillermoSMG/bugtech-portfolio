import { useContext } from 'react';
import { themeContext } from './ThemeContext';

export const ThemeIcon = () => {
	return (
		<img
			src='https://i.ibb.co/ZWmbGbj/etmfdr.gif'
			className='h-8 rounded-xl w-[55px]'
			alt=''
		/>
	);
};
export const ThemeIconDark = () => {
	return (
		<img
			src='https://i.pinimg.com/originals/94/ff/74/94ff7463a1574221ba6d4ada2c997e0b.gif'
			className='h-8 rounded-xl w-[55px]'
			alt=''
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
			width='48'
			height='48'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#011bef'
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
			className='icon icon-tabler icons-tabler-outline icon-tabler-list-check bg-[#0140ef] rounded-full p-3'
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
			className='icon icon-tabler icons-tabler-outline icon-tabler-jetpack bg-[#0140ef] rounded-full p-3'
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

const WhatsappIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width='100'
			height='100'
			viewBox='0 0 48 48'
		>
			<path
				fill='#fff'
				d='M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z'
			></path>
			<path
				fill='#fff'
				d='M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z'
			></path>
			<path
				fill='#cfd8dc'
				d='M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z'
			></path>
			<path
				fill='#40c351'
				d='M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z'
			></path>
			<path
				fill='#fff'
				fill-rule='evenodd'
				d='M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z'
				clip-rule='evenodd'
			></path>
		</svg>
	);
};

const WhatsappIconAnimated = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width='100'
			height='100'
			viewBox='0 0 48 48'
		>
			<path
				fill='#fff'
				d='M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z'
			></path>
			<path
				fill='#fff'
				d='M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z'
			></path>
			<path
				fill='#cfd8dc'
				d='M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z'
			></path>
			<path
				fill='#40c351'
				d='M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z'
			></path>
			<path
				fill='#fff'
				fill-rule='evenodd'
				d='M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z'
				clip-rule='evenodd'
			></path>
		</svg>
	);
};

const LinkedinIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width='100'
			height='100'
			viewBox='0 0 48 48'
		>
			<path
				fill='#0288D1'
				d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'
			></path>
			<path
				fill='#FFF'
				d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'
			></path>
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
			{name === 'WhatsappIconAnimated' && <WhatsappIconAnimated />}
			{name === 'WhatsappIcon' && <WhatsappIcon />}
			{name === 'LinkedinIcon' && <LinkedinIcon />}
			{name === 'DefaultIcon' && <DefaultIcon />}
		</>
	);
};
