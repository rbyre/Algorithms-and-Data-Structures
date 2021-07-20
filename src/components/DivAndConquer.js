import React, {Component} from 'react';


const alg = `search(array, val) {
    let min = 0;/n
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min+max) /2);
        let currentElement = array[middle];

        if(array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle -1;
        }
        else {
            return middle;
        }
    }

    return -1;
}`;

class DivAndConquer extends Component {
    static defaultProps = {arr: [1,2,3,5,7,9,13,15,17,21,32],
    val: 5};
    
    search(array, val) {
        let min = 0;
        let max = array.length - 1;

        while (min <= max) {
            let middle = Math.floor((min+max) /2);
            let currentElement = array[middle];

            if(array[middle] < val) {
                min = middle + 1;
            }
            else if (array[middle] > val) {
                max = middle -1;
            }
            else {
                return middle;
            }
        }

        return -1;
    }

    
    render() {
        return (
            <div className="DivideAndConquer">
                <h1>Divide and Conquer</h1>
                <p>Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the funtion is located. If the value is not found, return -1</p>
                <div className="BinarySearch">
                    <h2>Solution: Binary Search</h2>
                    <p>Time Complexity - Log(N)</p>
                    <p>Array: [1,2,3,5,7,9,13,15,17,21,32]</p>
                    <p>Value: 5</p>
                    <div className="BSCode">
                        <p>Returns Index of value: {this.search(this.props.arr, this.props.val)}</p>
                    
                    <textarea readOnly cols={50} rows={25} >{alg}</textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default DivAndConquer;

