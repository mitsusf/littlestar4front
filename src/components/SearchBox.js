import React from "react"

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--yellow bg-washed-yellow" 
            type="search" 
            placeholder="Search Little Star" 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;