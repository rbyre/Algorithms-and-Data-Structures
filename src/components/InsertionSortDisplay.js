import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./basic.css";
import code from './code';

import insertionSort from "./insertionSort";

const alg = code.insertionSort;

const InsertionSortDisp = (props) => {
  const [list, setList] = useState(props.unsortedArray);
  const [text, setText] = useState("Usortert");

  const original = props.unsortedArray;

  const sortArray = () => {
    setText("Sortert");
    setList(insertionSort(original));
  };

  return (
      <div className="basic">

    <Card  >
      <Card.Body>
        <Card.Title>InsertionSort</Card.Title>
        <Card.Subtitle>
          Listen blir sortert med 'InsertionSort' algoritmen Big O: O(n^2). 
          
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
export default InsertionSortDisp;
