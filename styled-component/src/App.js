import { ThemeProvider } from 'styled-components';
import { theme } from './css/theme';
import GlobalStyle from './GlobalStyle';
import { H1, H2 } from './component/Titles'
import { Button, SecondaryButton } from './component/Buttons';
import { Wrapper } from './component/Wrappers';
import './App.css';
// possibilité d'extend les components de Material-UI pour les modifier à notre sauce

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<H1>Leçon Styled-components <span>de Steven</span></H1>
				<H2 color="palegreen">Histoire de le maîtriser...</H2>
				<Button>styled.button</Button>
				<br />
				<br />
				<SecondaryButton top="10" left="60">styled(Button) avec absolute cssHelper</SecondaryButton>
				<Wrapper>
					<Button>styled.div variableButton dans wrapper avec media query</Button>
				</Wrapper>
				{/* ca ca change tout ci-dessous */}
				<GlobalStyle />
			</div>
		</ThemeProvider>
	);
}

export default App;
