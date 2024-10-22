
import { useContext} from 'react';
import './App.css';
import JatekTer from './components/JatekTer';
import { KattContext } from './context/KattContext';

function App() {
  
  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
       <h1>Light On</h1>

      </header>
      <article>
        <div className="jatekter">
          <JatekTer lista={lista} />
        </div>
      </article>
      <div className="feladat">
      <p>{} db felkapcsolt lámpa van</p>
      <p>Kapcsold fel az összeset!</p>
      <p>Sok sikert!</p></div>
      
      <footer>Dobszay Dorka</footer>
    </div>
  );
}

export default App;
