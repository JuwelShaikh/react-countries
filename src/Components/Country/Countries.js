import React, { useEffect, useState } from 'react';

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
                country.map(country => <InfoCountry name={country.name.common} capital={country.capital}></InfoCountry>)
            }
        </div>
    );
};

const InfoCountry = props => {
    return(
        <div style={{backgroundColor:'Tomato', width:'max-content', padding:'2px', margin:'5px'}}>
            <h3>Name: {props.name}</h3>
            <h4>Capital: {props.capital}</h4>
        </div>
    )
} 

export default Countries;