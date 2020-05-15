import React, {useState, useEffect} from 'react';
import CardContainer from './cardContainer';
import FilterForm from "./filterForm";
import './main_page.css'

const url = 'https://restcountries.eu/rest/v2'

function Main(){
    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        async function fetchCountries(){
            let resp = await fetch(url + '/all')
            resp = await resp.json();
            
            setCountries(resp)
        }

        fetchCountries();
    }, [])


    const updatingSearch = (e) => {
        let search = e.target.value.toLowerCase();
        setSearchText(search)
    }    

    const updateRegion = (e) => {
        let region = e.target.value.toLowerCase();

        async function fetchByRegion(){
            let resp = await fetch(url + `/region/${region}`)
            resp = await resp.json();

            setCountries(resp)
        }

        fetchByRegion();
    }

    return (
        <div style={{background: 'hsl(0, 0%, 98%)'}} className="card-container">
            <FilterForm updatingSearch={updatingSearch} updateRegion={updateRegion}/>
            <CardContainer countries={countries.filter(country => country.name.toLowerCase().includes(searchText))}/>
        </div>
    )
}

export default Main;