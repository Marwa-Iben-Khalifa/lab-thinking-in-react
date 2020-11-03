import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from'./ProductTable';

function App() {
  return (
    <div className="App">
      <h1>IRON Store</h1>
      <SearchBar />
      <ProductTable/>
    </div>
  );
}

export default App;
