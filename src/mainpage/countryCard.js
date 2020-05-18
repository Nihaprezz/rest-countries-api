import React from 'react';
import { Link } from  'react-router-dom';

function CountryCard(props){
    let { name, flag, population, region, capital } = props.countryObj;

    const cardStyle = {
        background: `url(${flag})`, 
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat', 
        width: 'auto', 
        height: '10vw'
    }
    
    return (
        <div className="card light-card">
            <Link to={`/country/${name}`}>
                <div style={cardStyle}></div>
            </Link>

            <div className="card-contents">
                <h3>{name}</h3>
                <p><span>Population:</span> {population.toLocaleString()}</p>
                <p><span>Region:</span> {region}</p>
                <p><span>Capital:</span> {capital}</p>  
            </div>  
             
        </div>
    )
}

export default CountryCard;