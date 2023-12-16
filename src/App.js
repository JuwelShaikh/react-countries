import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
    
  },[])
  console.log(countries);
  return(
    <div>
      <h1>All countries!!</h1>
      <h3>Available countries:{countries.length}</h3>
    </div>
  )
}

function country(props)
export default App;
