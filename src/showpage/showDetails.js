import React from 'react';

function ShowDetails(props){
    let {borders, currencies, nativeName, flag, capital, population, region, subregion, topLevelDomain, languages, name } = props.country

    return (
        <div>
                <div style={{backgroundImage: `url(${flag})`, width: 'auto', height: '10vw', backgroundSize: '100%'}}></div>

                <h1>{name}</h1>    

                <div className="details-1">
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Sub Region: </span>{subregion}</p>
                    <p><span>Capital: </span>{capital}</p>
                </div>

                <div className="details-2">
                    <p><span>Top Level Domain: </span>{topLevelDomain[0]}</p>
                    <p><span>Currencies: </span>{currencies[0].name}</p>
                    <p><span>Languages: </span>{languages.map(lang => lang.name).join(', ')}</p>

                </div>

                <div className="borders">
                    <p>Border Countries: </p>
                    {borders.map((border, index) => <span key={index} className="bd">{border}</span>)}
                </div>
            </div>
    )
}

export default ShowDetails;