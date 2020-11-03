import React from 'react';
import data from './data.json';
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
    state={
        data:data.data
    }
    render(){
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
                      {this.state.data.map((product)=>(
                        <ProductRow name={product.name} price={product.price} />
                        ))}  
                    </tbody>
                </table>
            </div>
        )
    }
}




export default ProductTable