import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, } from "react-bootstrap";
// import {LinkContainer} from 'react-router-bootstrap';

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
        <Container>
            <h1>BubbleSort</h1>
            <button onClick={sortArray}>Sorter</button>
            <h2>{text}: {list.map(item => (item+' '))}</h2>
            <Link exact to="/">Home</Link>
        </Container>
    )
} 
export default BubbleSortDisp;