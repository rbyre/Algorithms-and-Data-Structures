import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./basic.css";
// import {LinkContainer} from 'react-router-bootstrap';

import bubbleSort from "./bubbleSort";

const BubbleSortDisp = (props) => {
  const [list, setList] = useState(props.unsortedArray);
  const [text, setText] = useState("Usortert");

  const original = props.unsortedArray;

  const sortArray = () => {
    setText("Sortert");
    setList(bubbleSort(original));
  };

  return (
      <div className="basic">

    <Card  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>BubbleSort</Card.Title>
        <Card.Subtitle>
          Listen blir sortert med 'bubblesort' algoritmen
        </Card.Subtitle>
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
export default BubbleSortDisp;
