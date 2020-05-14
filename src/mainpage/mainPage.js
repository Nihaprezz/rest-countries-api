import React, {useState, useEffect} from 'react';

const url = 'https://restcountries.eu/rest/v2/all'

function Main(){
    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function fetchCountries(){
            let resp = await fetch(url)
            resp = await resp.json();
            
            setCountries(resp)
        }

        fetchCountries();
    }, [])


    return (
        <div>
             main page component
        </div>
    )
}

export default Main;