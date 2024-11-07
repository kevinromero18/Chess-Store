import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import NavBar from './components/navBar';

function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element = {<ProductList />}/>
            <Route path='/cart' element = {<h2>Carrito</h2>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

