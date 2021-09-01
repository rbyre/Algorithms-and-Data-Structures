import React, { useState } from 'react'
import NaiveStringSearch from './NaiveStringSearchAlg'

export default function NaiveStringSearchDisplay(props) {
    const short = props.short;
    const long = props.long;

    const [count, setCount] = useState(0); 
    
    const startStringSearch = () => {
        setCount(NaiveStringSearch(long, short))
    }

    return (
        <div>
            <h1>String Search</h1>
            <h2>Text: </h2>
            <p>{long}</p>  
            <h2>Søkeord:</h2>
            <p>{short}</p>
            <button onClick={startStringSearch}>start</button>
            <h2>count: {count}</h2>
        </div>
    )
}
