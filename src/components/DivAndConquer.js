import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import "./basic.css";
import "bootstrap/dist/css/bootstrap.min.css";
import code from "./code";

const alg = code.divideandconquer;

class DivAndConquer extends Component {
  static defaultProps = { arr: [1, 2, 3, 5, 7, 9, 13, 15, 17, 21, 32], val: 5 };

  search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];

      if (array[middle] < val) {
        min = middle + 1;
      } else if (array[middle] > val) {
        max = middle - 1;
      } else {
        return middle;
      }
    }

    return -1;
  }

  render() {
    return (
      <Container className="text-center">
        <div className="basic">
          <Card style={{ width: "50%" }}>
            <Card.Body>
              <Card.Title><h1>Divide and Conquer - Binary Search</h1></Card.Title>
              <Card.Subtitle>
                Returns Index of value:{" "}
                {this.search(this.props.arr, this.props.val)}
              </Card.Subtitle>
              <Card.Text>
                Given a sorted array of integers, write a function called
                search, that accepts a value and returns the index where the
                value passed to the funtion is located. If the value is not
                found, return -1
              </Card.Text>
              <Card.Text>
                <textarea className="textarea">{alg}</textarea>
              </Card.Text>
              <Card.Text>
                <h3>Solution: Binary Search</h3>
                <p>Time Complexity - log(n)</p>
                <p>Array: [1,2,3,5,7,9,13,15,17,21,32]</p>
                <p>Value: 5</p>

                <p>
                  Returns Index of value:{" "}
                  {this.search(this.props.arr, this.props.val)}
                </p>
              </Card.Text>
              <Link className="btn btn-dark" exact to="/">
                Home
              </Link>
            </Card.Body>
          </Card>
        </div>
        );
      </Container>
    );
  }
}

export default DivAndConquer;
