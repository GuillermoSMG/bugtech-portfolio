import { ThemeContextConteiner } from './components/ThemeContext';
import Header from './components/header/Header';

function App() {
	return (
		<ThemeContextConteiner>
			<main className='bg-[#fff] dark:bg-[#030620]'>
				<Header />
			</main>
		</ThemeContextConteiner>
	);
}

export default App;
