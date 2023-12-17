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
        </div>
    );
};

export default Countries;