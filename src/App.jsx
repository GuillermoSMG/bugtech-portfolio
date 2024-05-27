import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { ThemeContextConteiner } from './components/ThemeContext';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { Services } from './pages/services/Services';
import Navbar from './components/header/Navbar';

function App() {
	return (
		<Suspense fallback={<>Loading...</>}>
			<ThemeContextConteiner>
				<main className='bg-mainBg dark:bg-darkBg relative'>
					<div className='min-h-[70vh] md:min-h-auto flex flex-col justify-between'>
						<Header />
						<Home />
						<Banner />
					</div>
					<Services />
					<Navbar styles='sticky bottom-0 md:hidden bg-mainBg dark:bg-headerBg py-5 px-4 backdrop-blur-md' />
				</main>
			</ThemeContextConteiner>
		</Suspense>
	);
}

export default App;
