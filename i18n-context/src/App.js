import logo from './logo.svg';
import './App.css';
import LanguageSelect from "./components/LanguageSelect";
import { I18nContext } from "./translations/context";
import { useContext } from 'react';

function App() {

	const { translate } = useContext(I18nContext);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<LanguageSelect />
				<p>{translate('edit_and_save')}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{translate('learn_react')}
				</a>
			</header>
		</div>
	);
}

export default App;
