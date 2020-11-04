import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
    state={
        products: this.props.products,
        category: this.props.toty
    }
    
     
    render(){
        
        console.log(this.state)
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Price </th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.products.map((product)=>(
                        product.name.includes(this.props.value) &&<ProductRow name={product.name} price={product.price} stocked={product.stocked}/>
                        ))}  
                    </tbody>
                </table>
            </div>
        )
    }
}




export default ProductTable