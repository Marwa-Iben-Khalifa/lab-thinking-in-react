import React from 'react';

const SearchBar= (props)=>{
    return (
        <div  className="searchBar">
          <input
              type="text"
              class="input search-bar"
              name="search"
              placeholder="Search"
            //   value={}
            //   onChange={}
          />
        </div>
    )
}




export default SearchBar