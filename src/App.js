import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DivAndConquer from './components/DivAndConquer';
import CollectOddValues from './components/CollectOddValues';
import BinarySearch from './components/BinarySearch';
import NaiveStringSearchDisplay from './components/NaiveStringSearchDisplay';
import BubbleSortDisp from './components/BubbleSortDisp';


let myArray = [1,2,3,4,5];
let long = 'bukkene bruse blei brisne på rusbrus';
let short = 'brus';
let unsortedArray = [37,45,29,8];

function App() {
  return (

    <MemoryRouter>
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/divandconquer">
          <DivAndConquer />
        </Route>
        <Route exact path="/bubblesort">
        <BubbleSortDisp unsortedArray={unsortedArray} />
        </Route>
      </Switch>
      {/* <CollectOddValues arr={myArray} /> */}
      {/* <BinarySearch arr={[3,4,7,8,15,16,27,48,59,65]} elem={16} /> */}
      {/* {<NaiveStringSearchDisplay long={long} short={short}/>} */}
      
    </div>
    </MemoryRouter>
  );
}

export default App;
