import React, { useState } from "react";
import NaiveStringSearch from "./NaiveStringSearchAlg";
import { Link } from "react-router-dom";
import { Card, Button, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./basic.css";
import code from "./code";

const alg = code.naivestringsearch;

export default function NaiveStringSearchDisplay(props) {
  const short = props.short;
  const long = props.long;

  const [count, setCount] = useState(0);

  const startStringSearch = () => {
    setCount(NaiveStringSearch(long, short));
  };

  return (
    <div className="basic">
      <Card style={{ width: "50%" }}>
        <Card.Body>
          <Card.Title>
            String Search
          </Card.Title>
          <Card.Subtitle>Søk etter antall treff med 'String Search'</Card.Subtitle>
          <Card.Text>
            <textarea className="textarea">{alg}</textarea>
          </Card.Text>
          <Card.Text>
            <p><b>Text:</b> {long}</p>
            <p><b>Søkeord:</b> {short}</p>
            <h2>count: {count}</h2>
          </Card.Text>
          <Button variant="success" onClick={startStringSearch}>
            Søk
          </Button>{" "}
          <Link className="btn btn-dark" exact to="/">
            Home
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
