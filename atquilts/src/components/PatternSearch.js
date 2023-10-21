import React, {useState} from "react";
import SearchBox from "../SearchBox";
import CardList from "../CardList";
import {backs} from "../patterns";

function PatternSearch () {

    const [searchfield , setSearchfield] = useState("")
    const [patterns , setPatterns] = useState(backs)
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)

    }

    const filteredpatterns = patterns.filter(patterns =>{
        return patterns.name.toLowerCase().includes(searchfield.toLowerCase()) ||
            patterns.id.toLowerCase().includes(searchfield.toLowerCase())
    })

    return(
        <div className='tc'>
            <h1 style={{fontFamily:"Lucida Handwriting"}} className='underline ma0 pa4'>Pattern Search</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList patterns={filteredpatterns} />
        </div>
    );
}

export default PatternSearch;