import React, { useEffect, useState } from 'react';
import './country.css'

const Countries = () => {
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <div>
            <h1>All Countries info</h1>
            <h5>Country Available: {country.length}</h5>
            {
                country.map(country => <InfoCountry country={country} name={country.name.common}  ></InfoCountry>)
            }
        </div>
    );
};

const InfoCountry = props => {
    const {name, capital, population} = props.country;
    return(
        <div className='counDiv'>
            <div>
            <h3>Name: {name}</h3>
            <h4>Capital: {capital}</h4>
            <p>Population: <b>{population}</b></p>
            </div>
        </div>
    )
} 

export default Countries;