import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import data from './data/data';

function App() {
  return (
    <div className="App">
      {data.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
