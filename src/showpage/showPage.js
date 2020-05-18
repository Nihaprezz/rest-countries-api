import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ShowDetails from './showDetails'
import './show_page.css'

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
            <Link to="/">Back</Link>
            {country && <ShowDetails country={country}/>}
        </div>
    )
}

export default ShowPage;