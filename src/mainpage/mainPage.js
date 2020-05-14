import React, {useState, useEffect} from 'react';
import CountryCard from "./countryCard"
import './main_page.css'

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
        <div className="card-container">
             main page component
             
             <div className="main-page-grid">
             {countries.length ? (
                countries.map(country => {
                    return <CountryCard key={country.numericCode} countryObj={country}/>
                })
             ) : <p>loading..</p>}
             </div>
        </div>
    )
}

export default Main;