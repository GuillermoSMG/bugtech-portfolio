const faviconTag = document.getElementById('faviconTag');
const isDark = window.matchMedia('(prefers-color-scheme:dark)');
const handleFavicon = () => {
	if (isDark.matches) {
		faviconTag.href = '/favico-w.png';
	} else {
		faviconTag.href = '/favico.png';
	}
};
handleFavicon();
