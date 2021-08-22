import React, {Component} from 'react';


class CollectOddValues extends Component {
    constructor(props){
        super(props);
        this.oddSlicer = this.oddSlicer.bind(this);
    }
    
    oddSlicer(l) {
        let newArr = [];
            if(l.length === 0) {
                return newArr;
            }
            if(l[0]%2 !== 0) {
                newArr.push(l[0])
            }
            newArr = newArr.concat(this.oddSlicer(l.slice(1)));
            return newArr;
            
    }

    render() {
        return (
            <div>
            <h1>CollectOddValues</h1>
            <p>input list: {this.props.arr}</p>
            <p>odds: {this.oddSlicer(this.props.arr)}</p>
            </div>
        )
    }
}


export default CollectOddValues;