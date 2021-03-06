import React, {useState, useEffect} from 'react';
import CardContainer from './cardContainer';
import FilterForm from "./filterForm";
import './main_page.css'

const url = 'https://restcountries.eu/rest/v2'

function Main(){
    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchCountries('/all');
    }, [])

    const fetchCountries = async function(endpoint){
        let resp = await fetch(url + `${endpoint}`)
        resp = await resp.json();
        setCountries(resp)
    }

    const updatingSearch = (e) => {
        let search = e.target.value.toLowerCase();
        setSearchText(search)
    }    

    const updateRegion = (region) => {
        // let region = e.target.value.toLowerCase();
        // let endpoint = region ? `/region/${region}` : '/all'
        let endpoint = `/region/${region}`
        fetchCountries(endpoint)
    }

    return (
        <div style={{background: 'hsl(0, 0%, 98%)'}} className="card-container">
            <FilterForm updatingSearch={updatingSearch} updateRegion={updateRegion}/>
            <CardContainer countries={countries.filter(country => country.name.toLowerCase().includes(searchText))}/>
        </div>
    )
}

export default Main;