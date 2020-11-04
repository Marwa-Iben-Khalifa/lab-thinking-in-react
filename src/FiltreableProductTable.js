import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from'./ProductTable';


class FiltreableProductTable extends React.Component{
    state={
        value: this.props.value,
        category:this.props.products.map(el => el.category)
    }
    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    cat = [... new Set(this.state.category)]      
            
    
    render() {
    return (
      <div >
        <h1>IRON Store</h1>
        <SearchBar value={this.state.value} toto={this.handleChange} />
        <ProductTable products={this.props.products} value={this.state.value} toty={this.cat}/>
      </div>
    );
  }}

export default FiltreableProductTable