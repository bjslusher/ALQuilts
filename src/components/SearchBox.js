import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div style={{fontFamily:"papyrus"}} className='pa2' >
            <input className='pa3 ba b--lightest-blue '
                   type='search'
                   placeholder='Search Patterns'
                   onChange={searchChange}/>
        </div>
    );

}

export default SearchBox