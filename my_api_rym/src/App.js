import './App.css';
import Personajes from './components/personajes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Personajes/>
      </header>
    </div>
  );
}

export default App;
