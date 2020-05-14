import React from 'react';

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
            {/* <img style={{width: '200px'}} alt="country flag" src={flag}></img> */}
            <div style={cardStyle}></div>

            <div className="card-contents">
                <h3>{name}</h3>
                <p><span>Population:</span> {population}</p>
                <p><span>Region:</span> {region}</p>
                <p><span>Capital:</span> {capital}</p>  
            </div>   
        </div>
    )
}

export default CountryCard;