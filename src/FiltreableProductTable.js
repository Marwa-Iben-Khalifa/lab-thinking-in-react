import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from'./ProductTable';
import CheckBox from './CheckBox';
import 'bulma/css/bulma.css';


class FiltreableProductTable extends React.Component{
    state={
        products: this.props.products,
        value: this.props.value,
        category:this.props.products.map(el => el.category),
        isChecked: false
    }
    handleChange = (e) => {
        this.setState({value: e.target.value});
    }
    justAvailable =this.state.products.filter(word => word.stocked=== true);
    cat = [... new Set(this.state.category)]    
    handleCheckBoxChange=(event)=> { 
        event.target.checked ?   
        this.setState({
          products:this.justAvailable
        })
        :
        this.setState({
            products:this.props.products
          })
        this.setState({
            isChecked: event.target.checked
          })
    }  
            
    
    render() {
    return (
      <div >
        <h1 className="title is-1">IRON Store</h1>
        <SearchBar value={this.state.value} toto={this.handleChange} />
        <CheckBox  check={this.handleCheckBoxChange} isChecked={this.state.isChecked}/>
        <ProductTable isChecked={this.state.isChecked} products={this.state.products} value={this.state.value} toty={this.cat}/>
      </div>
    );
  }}

export default FiltreableProductTable