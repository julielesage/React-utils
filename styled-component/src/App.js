import { H1, H2 } from './component/Titles'
import { Button, SecondaryButton } from './component/Buttons';
import './App.css';
// possibilité d'extend les components de Material-UI pour les modifier à notre sauce

function App() {
  return (
    <div className="App">
      <H1>Leçon Styled-components <span>de Steven</span></H1>
      <H2 color="palegreen">Histoire de le maîtriser...</H2>
      <Button>Follow Me</Button>
      <SecondaryButton>ou pas</SecondaryButton>
    </div>
  );
}

export default App;
