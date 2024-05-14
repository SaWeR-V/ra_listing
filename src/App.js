import './App.css';
import data from './components/etsy.json'
import { Listing } from './components/Listing';

function App() {
  return (
    <Listing items={data}/>
  );
}

export default App;
