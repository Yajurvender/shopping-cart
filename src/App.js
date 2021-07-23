import { Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
    <>
      <Header />
      <div className="App" >
        <Route path="/" exact><Home /></Route>
        <Route path="/cart" exact><Cart /></Route>
      </div>
    </>
  );
}

export default App;
