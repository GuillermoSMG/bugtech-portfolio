import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { ThemeContextConteiner } from './components/ThemeContext';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { Services } from './pages/services/Services';

function App() {
	return (
		<Suspense fallback={<>Loading...</>}>
			<ThemeContextConteiner>
				<main className='bg-mainBg dark:bg-darkBg relative'>
					<div className='min-h-[100vh] flex flex-col justify-between'>
						<Header />
						<Home />
						<Banner />
					</div>
					<Services />
				</main>
			</ThemeContextConteiner>
		</Suspense>
	);
}

export default App;
