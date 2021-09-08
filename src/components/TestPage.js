import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TestPage = () => {
    return (
        <div>
            <h1>TEST</h1>
            <Link className="btn btn-dark" exact to="/">
            Home
          </Link>
        </div>
    )
}

export default TestPage;