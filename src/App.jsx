
import React from 'react';
import './App.css';
import Header from './header';
import Product from './Product';

function App() {
  return (
    <>
      <Header />

      <div className="products">
        <Product name="Audio" product="Wireless Headphone" value="$45" />
        <Product name="Accessories" product="Mechanical Keyboard" value="$62" />
        <Product name="Accessories" product="Wireless Mouse" value="$24" />
        <Product name="Wearables" product="Smart Watch" value="$75" />
        <Product name="Audio" product="Bluetooth Speaker" value="$39" />
        <Product name="Accessories" product="Laptop Stand" value="$29" />
      </div>
    </>
  );
}

export default App;
