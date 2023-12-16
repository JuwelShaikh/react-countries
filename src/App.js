import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [] = useState([]);
  return (
    <div className="App">
      <loadCountries></loadCountries>
    </div>
  );
}

function loadCountries(){
  return(
    <div>
      <h3>All countries!!</h3>
    </div>
  )
}

export default App;
