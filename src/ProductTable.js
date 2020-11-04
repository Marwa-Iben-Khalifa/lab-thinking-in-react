import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
    state={
        category: this.props.toty
    }
    
     
    render(){
        
        console.log(this.state)
        return(
            <div>
                <table className="table is-hoverable ">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Price </th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.props.products.map((product)=>(
                        product.name.includes(this.props.value) &&<ProductRow name={product.name} price={product.price} stocked={product.stocked} isChecked={this.props.isChecked}/>
                        ))}  
                    </tbody>
                </table>
            </div>
        )
    }
}




export default ProductTable