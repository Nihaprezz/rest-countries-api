import React from 'react';

function ShowDetails(props){
    let {borders, currencies, nativeName, flag, capital, population, region, subregion, topLevelDomain, languages, name } = props.country

    return (
        <div>
                <div>img will go here</div>

                <div className="details-1">
                    first section of details
                </div>

                <div className="details-2">
                    second section of details
                </div>

                <div className="borders">
                    border countries will go here
                </div>
            </div>
    )
}

export default ShowDetails;