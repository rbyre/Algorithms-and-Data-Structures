import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./basic.css";
// import {LinkContainer} from 'react-router-bootstrap';

import selectionSort from "./selectionSort";
import code from './code';
const alg = code.selectionSort;


const SelectionSortDisplay = (props) => {
  const [list, setList] = useState(props.unsortedArray);
  const [text, setText] = useState("Usortert");

  const original = props.unsortedArray;

  const sortArray = () => {
    setText("Sortert");
    setList(selectionSort(original));
  };

  return (
    <div className="basic">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>SelectionSort</Card.Title>
          <Card.Subtitle>
            Listen blir sortert med 'Selectionsort' algoritmen
          </Card.Subtitle>
          <Card.Text>
          Big O: O(n^2)
          <textarea className='textarea'>{alg}</textarea>
          </Card.Text>
          <Card.Text>
            {text}: {list.map((item) => item + " ")}
          </Card.Text>
          <Button variant="success" onClick={sortArray}>
            Sorter
          </Button>{" "}
          <Link className="btn btn-dark" exact to="/">
            Home
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};



export default SelectionSortDisplay;
