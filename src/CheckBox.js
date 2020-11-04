import React from 'react'

const CheckBox = (props) =>{
 return(
        <div className="content is-medium"> 
            <input 
            name="isChecked"
            type="checkbox"
            checked={props.isChecked}
            onChange={props.check}
            />  Show Only availble Products
        </div>
    )
}
export default CheckBox