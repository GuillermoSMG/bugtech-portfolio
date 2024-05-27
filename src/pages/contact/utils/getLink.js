export const getLink = ({ title, desc }) => {
	let link = '';
	if (title === 'Celular') {
		link = `https://wa.me/${desc.replaceAll(' ', '')}`;
	}
	if (title === 'Email') {
		link = `mailto:${desc}?subject=Desarrollo%20Web`;
	}
	if (title === 'Instagram') {
		link = `https://www.instagram.com/${desc}/`;
	}
	return link;
};
