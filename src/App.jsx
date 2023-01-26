import './App.css';
import Basket from './components/Basket';
import Orders from './components/Orders';
import User from './components/Form'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <button>Home</button>
      <User/> 
      <Products/>
      <Basket/>
      <Orders/>
    </div>
  );
}

export default App;
