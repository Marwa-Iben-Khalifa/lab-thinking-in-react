import React from 'react';

class SearchBar extends React.Component{ 
    
    
    render(){
    return (
        <div  className="input is-rounded">
          <input
              type="text"
              class="input search-bar"
              name="search"
              placeholder="Search"
              value={this.props.value}
              onChange={this.props.toto}
          />
        </div>
    )
}}




export default SearchBar