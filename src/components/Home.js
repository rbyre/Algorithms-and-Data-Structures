import { Link } from "react-router-dom";
import { Dropdown, Container, Col, Row, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Col className="text-center" >
        <nav>
          <ul>
            <li><Link to="/testpage">PATTERNS</Link></li>
            <li><Link to="/testpage">SEARCHING</Link></li>
            <li><Link to="/testpage">SORTING</Link></li>
            <li><Link to="/testpage">DATA STRUCTURES</Link></li>
          </ul>
        </nav>
        <h1>JavaScript Algorithms and Data Structures</h1>
        <Image
          src="https://images.unsplash.com/photo-1518770352423-dce09a3d3307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
          rounded
        />
        <Row className="dropdown justify-content-center text-align-center">
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Velg fra listen
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdownmenu">
              <Dropdown.Item href="#/action-1">
                <Link className="link" to="/divandconquer">Divide and Conquer Algorithm</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Link className="link" to="/stringSearch">String Search</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <Link className="link" to="/bubblesort">BubbleSort</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <Link className="link" to="/selectionsort">SelectionSort</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                <Link className="link" to="/insertionsort">InsertionSort</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6">
                <Link className="link" to="/mergesort">MergeSort</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-7">
                <Link className="link" to="/quicksort">QuickSort</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-8">
                <Link className="link" to="/radixsort">RadixSort</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
      </Col>
    </Container>
  );
};

export default Home;
