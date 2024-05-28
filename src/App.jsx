import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { ThemeContextConteiner } from './components/ThemeContext';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { Services } from './pages/services/Services';
import Navbar from './components/header/Navbar';

import { Team } from './pages/team/Team';
import { Contact } from './pages/contact/Contact';
import { useTranslation } from 'react-i18next';

function App() {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<Suspense fallback={<>Loading...</>}>
				<ThemeContextConteiner>
					<main className='bg-mainBg dark:bg-darkBg relative'>
						<div className='min-h-[70vh] md:min-h-auto flex flex-col justify-between'>
							<Header />
							<Home />
							<Banner />
						</div>
						<Services />
						<Team />
						<Contact />
						<Navbar styles='sticky bottom-0 md:hidden bg-mainBg dark:bg-headerBg py-5 px-4 backdrop-blur-md' />
					</main>
				</ThemeContextConteiner>
			</Suspense>
			<h1>{t('header.hello-world')}</h1>
			<button onClick={() => i18n.changeLanguage('es')}>es</button>
			<button onClick={() => i18n.changeLanguage('en')}>en</button>
			<button onClick={() => i18n.changeLanguage('br')}>br</button>
		</>
	);
}

export default App;
