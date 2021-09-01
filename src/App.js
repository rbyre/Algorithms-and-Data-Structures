import './App.css';
// import DivAndConquer from './components/DivAndConquer';
// import CollectOddValues from './components/CollectOddValues';
// import BinarySearch from './components/BinarySearch';
import NaiveStringSearchDisplay from './NaiveStringSearchDisplay';

// let myArray = [1,2,3,4,5];
let long = 'bukkene bruse blei brisne på rusbrus';
let short = 'brus';

function App() {
  return (
    <div className="App">
      {/* <DivAndConquer/> */}
      {/* <CollectOddValues arr={myArray} /> */}
      {/* <BinarySearch arr={[3,4,7,8,15,16,27,48,59,65]} elem={16} /> */}
      {<NaiveStringSearchDisplay long={long} short={short}/>}
    </div>
  );
}

export default App;
