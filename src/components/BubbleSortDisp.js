import React, { useState } from 'react';

import bubbleSort from './bubbleSort';

const BubbleSortDisp = (props) => {

    const [list, setList] = useState(props.unsortedArray);
    const [text, setText] = useState('Usortert')
    
    const original = props.unsortedArray;
    
    const sortArray = () => {
        setText('Sortert');
        setList(bubbleSort(original));
    }

    return (
        <div>
            <h1>BubbleSort</h1>
            <button onClick={sortArray}>Sorter</button>
            <h2>{text}: {list.map(item => (item+' '))}</h2>
        </div>
    )
} 
export default BubbleSortDisp;