import { Banner } from './components/Banner';
import { ThemeContextConteiner } from './components/ThemeContext';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
	return (
		<ThemeContextConteiner>
			<main className='bg-mainBg dark:bg-darkBg'>
				<div className='min-h-[100vh] flex flex-col justify-between'>
					<Header />
					<Home />
					<Banner />
				</div>
			</main>
		</ThemeContextConteiner>
	);
}

export default App;
