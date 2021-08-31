import './App.css';
// import DivAndConquer from './components/DivAndConquer';
// import CollectOddValues from './components/CollectOddValues';
import BinarySearch from './components/BinarySearch';

let myArray = [1,2,3,4,5];
function App() {
  return (
    <div className="App">
      {/* <DivAndConquer/> */}
      {/* <CollectOddValues arr={myArray} /> */}
      <BinarySearch arr={[3,4,7,8,15,16,27,48,59,65]} elem={16} />
    </div>
  );
}

export default App;
