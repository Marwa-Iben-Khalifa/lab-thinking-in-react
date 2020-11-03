import React from 'react';
import data from './data.json'
import logo from './logo.svg';
import './App.css';
import FiltreableProductTable from './FiltreableProductTable';



function App(props) {
  return (
    <div className="App">
      <FiltreableProductTable products={data.data} />
    </div>
  );
}

export default App;
