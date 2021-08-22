import './App.css';
import DivAndConquer from './components/DivAndConquer';
import CollectOddValues from './components/CollectOddValues';


let myArray = [1,2,3,4,5];
function App() {
  return (
    <div className="App">
      <DivAndConquer/>
      <CollectOddValues arr={myArray} />
    </div>
  );
}

export default App;
