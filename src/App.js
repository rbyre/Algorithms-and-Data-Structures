import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DivAndConquer from './components/DivAndConquer';
import CollectOddValues from './components/CollectOddValues';
import BinarySearch from './components/BinarySearch';
import NaiveStringSearchDisplay from './components/NaiveStringSearchDisplay';
import BubbleSortDisp from './components/BubbleSortDisp';
import SelectionSortDisplay from './components/selectionSortDisplay';
import InsertionSortDisplay from './components/InsertionSortDisplay';
import MergeSortDisplay from './components/MergeSortDisplay';
import QuickSortDisplay from './components/QuickSortDisplay';

let myArray = [1,2,3,4,5];
let long = 'ein fiskar fiskar fiskar';
let short = 'fiskar';
let unsortedArray = [109,108,37,107,45,106,29,105,94,8,93];

function App() {
  return (

    <Router>
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/divandconquer">
          <DivAndConquer />
        </Route>
        <Route exact path="/stringSearch">
        <NaiveStringSearchDisplay long={long} short={short}/>
        </Route>
        <Route exact path="/bubblesort">
        <BubbleSortDisp unsortedArray={unsortedArray} />
        </Route>
        <Route exact path="/selectionSort">
        <SelectionSortDisplay unsortedArray={unsortedArray} />
        </Route>
        <Route exact path="/insertionSort">
        <InsertionSortDisplay unsortedArray={unsortedArray} />
        </Route>
        <Route exact path="/mergesort">
        <MergeSortDisplay unsortedArray={unsortedArray} />
        </Route>
        <Route exact path="/quicksort">
        <QuickSortDisplay unsortedArray={unsortedArray} />
        </Route>
      </Switch>
      {/* <CollectOddValues arr={myArray} /> */}
      {/* <BinarySearch arr={[3,4,7,8,15,16,27,48,59,65]} elem={16} /> */}
      {/* {<NaiveStringSearchDisplay long={long} short={short}/>} */}
      
    </div>
    </Router>
  );
}

export default App;
