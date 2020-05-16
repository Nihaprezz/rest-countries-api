import React, { useState, useEffect } from 'react';

const url = 'https://restcountries.eu/rest/v2'

const ShowPage = (props) => {
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchCountry = async function(){
            let resp = await fetch(url + `/name/${props.country.toLowerCase()}?fullText=true`)
            resp = await resp.json();

            setCountry(resp);
        }

        fetchCountry();
    }, [props.country])

    console.log(country)
    return (
        <div>
            show page component
        </div>
    )
}

export default ShowPage;