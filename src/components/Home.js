import { Link } from "react-router-dom";
import { Dropdown, Container, Col, Row, Image } from "react-bootstrap";

import './Home.css';

const Home = () => {
  return (
    <Container>
      <Col>
        <h1>JavaScript Algorithms and Data Structures</h1>

        <Image
          src="https://images.unsplash.com/photo-1518770352423-dce09a3d3307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
          rounded
        />
        <Row className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Velg fra listen
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <Link to="/divandconquer">Divide and Conquer Algorithm</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <Link to="/bubblesort">BubbleSort</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
      </Col>
    </Container>
  );
};

export default Home;
