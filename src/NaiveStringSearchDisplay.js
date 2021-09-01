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
            <button onClick={startStringSearch}>start</button>
            <h2>count: {count}</h2>
        </div>
    )
}
