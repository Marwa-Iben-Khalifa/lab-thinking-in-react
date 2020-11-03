import React from 'react'

class ProductRow extends React.Component{
    render(){
        return(
            <tr style={this.props.stocked ? {color:"black"} : {color:"red"}}>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}




export default ProductRow