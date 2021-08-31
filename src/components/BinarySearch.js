import React, {useState} from 'react';
import BSearch from './BSearch';



const BinarySearch = props => {
    const array = props.arr;
    const element = props.elem;

    const [result, setResult] = useState('Not available')
    
    const startBSearch = () => {
        setResult(BSearch(array, element));
        
    }

    return (
    <div>
    <h1>BinarySearch</h1>
        <h2>Array: {array.map((el)=> (el+' '))}</h2>
        <h2>Searching for: {element}</h2>
        <button onClick={startBSearch}>Search</button>
        <h2>Index: {result}</h2>
    </div>
    );
} 
export default BinarySearch;