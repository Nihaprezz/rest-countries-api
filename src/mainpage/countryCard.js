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
        <div className="card">
            {/* <img style={{width: '200px'}} alt="country flag" src={flag}></img> */}
            <div style={cardStyle}></div>
            <h3>{name}</h3>
            <p>{population}</p>
            <p>{region}</p>
            <p>{capital}</p>
        </div>
    )
}

export default CountryCard;