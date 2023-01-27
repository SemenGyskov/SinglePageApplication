import './App.css';
import User from './components/Form'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <button>Home</button>
      <Products/>
      <User/>
    </div>
  );
}

export default App;
