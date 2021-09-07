import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./basic.css";
import code from './code';

import quickSort from "./quickSort";

const alg = code.quickSort;

const QuickSortDisplay = (props) => {
  const [list, setList] = useState(props.unsortedArray);
  const [text, setText] = useState("Usortert");

  const original = props.unsortedArray;

  const sortArray = () => {
    setText("Sortert");
    setList(quickSort(original));
  };

  return (
      <div className="basic">

    <Card  >
      <Card.Body>
        <Card.Title>QuickSort</Card.Title>
        <Card.Subtitle>
          Listen blir sortert med 'QuickSort' algoritmen Big O: O(nlog(n)). 
          
        </Card.Subtitle>
        <Card.Text>
        
        <textarea className='textarea'>{alg}</textarea>
        </Card.Text>
        <Card.Text>
          {text}: {list.map((item) => item + " ")}
        </Card.Text>
        <Button variant="success" onClick={sortArray}>
          Sorter
        </Button>{' '}
        <Link className="btn btn-dark" exact to="/">
          Hjem
        </Link>
      </Card.Body>
    </Card>
      </div>
  );
};
export default QuickSortDisplay;
