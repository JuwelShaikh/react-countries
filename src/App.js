import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
    
//   },[])
//   return(
//     <div>
//       <h1>All countries!!</h1>
//       <h3>Available countries:{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} capital={country.capital} ></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div className='count'>
//       <h2>Name:{props.name}</h2>
//       <h3>Capital:{props.capital}</h3>
//       <p>Population:{props.population}</p>
//     </div>
//   )
// }

export default App;
