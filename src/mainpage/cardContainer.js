import React from 'react';
import CountryCard from './countryCard'

function CardContainer(props){
    return (
        <div className="main-page-grid">
             {props.countries.length ? (
                props.countries.map(country => {
                    return <CountryCard key={country.numericCode} countryObj={country}/>
                })
             ) : null}
        </div>
    )
}

export default CardContainer;