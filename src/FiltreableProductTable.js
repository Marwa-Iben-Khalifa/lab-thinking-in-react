import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from'./ProductTable';


function FiltreableProductTable(props) {
    

    return (
      <div >
        <h1>IRON Store</h1>
        <SearchBar />
        <ProductTable products={props.products}/>
      </div>
    );
  }

export default FiltreableProductTable