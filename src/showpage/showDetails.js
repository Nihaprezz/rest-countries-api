import React from 'react';

function ShowDetails(props){
    let {borders, currencies, nativeName, flag, capital, population, region, subregion, topLevelDomain, languages, name } = props.country


    return (
        <div className='show-container'>
            <div className='show-img' style={{backgroundImage: `url(${flag})`, width: 'auto', height: 'auto', backgroundSize: '100%'}}></div>
            
            <section className='details-container'>
                <h1 className='show-name'>{name}</h1>    

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
                    <span>Border Countries: </span>
                    {borders.map((border, index) => <span key={index} className="bd">{border}</span>)}
                </div>
            </section>
        </div>
    )
}

export default ShowDetails;