/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import header_es from './components/translations/es/header.json';
import header_en from './components/translations/en/header.json';
import header_br from './components/translations/br/header.json';
import home_es from './components/translations/es/home.json';
import home_en from './components/translations/en/home.json';
import home_br from './components/translations/br/home.json';
import contact_es from './components/translations/es/contact.json';
import contact_en from './components/translations/en/contact.json';
import contact_br from './components/translations/br/contact.json';
import team_es from './components/translations/es/team.json';
import team_en from './components/translations/en/team.json';
import team_br from './components/translations/br/team.json';
import services_es from './components/translations/es/services.json';
import services_en from './components/translations/en/services.json';
import services_br from './components/translations/br/services.json';
import banner_es from './components/translations/es/banner.json';
import banner_en from './components/translations/en/banner.json';
import banner_br from './components/translations/br/banner.json';
import navlist_es from './components/translations/es/navlist.json';
import navlist_en from './components/translations/en/navlist.json';
import navlist_br from './components/translations/br/navlist.json';
i18next.init({
	interpolation: { escapeValue: false },
	lng: 'es',
	resources: {
		es: {
			navlist: navlist_es,
			header: header_es,
			banner: banner_es,
			home: home_es,
			contact: contact_es,
			team: team_es,
			services: services_es,
		},
		en: {
			navlist: navlist_en,
			header: header_en,
			banner: banner_en,
			home: home_en,
			contact: contact_en,
			team: team_en,
			services: services_en,
		},
		br: {
			navlist: navlist_br,
			header: header_br,
			banner: banner_br,
			home: home_br,
			contact: contact_br,
			team: team_br,
			services: services_br,
		},
	},
});
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>
);
