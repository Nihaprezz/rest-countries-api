import React, { useState, useEffect } from 'react';
import ShowDetails from './showDetails'

const url = 'https://restcountries.eu/rest/v2'

const ShowPage = (props) => {
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchCountry = async function(){
            let resp = await fetch(url + `/name/${props.country.toLowerCase()}?fullText=true`)
            resp = await resp.json();
        
            setCountry(resp[0]);
        }

        fetchCountry();
    }, [props.country])


    return (
        <div>
            <button>Back</button>
            {country && <ShowDetails country={country}/>}
        </div>
    )
}

export default ShowPage;