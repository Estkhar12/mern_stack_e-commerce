import './App.css';
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/store";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store= {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
