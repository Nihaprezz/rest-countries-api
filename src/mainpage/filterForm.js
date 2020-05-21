import React, {useState} from 'react';

function FilterForm(props){
    const [dropDown, setDropDown] = useState(false)

    const filters = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return (
        <div className="filter-form">
            <form onChange={(e) => props.updatingSearch(e)}>
                <ion-icon name="search-outline"></ion-icon>
                <input placeholder="Search for a country.."></input>
            </form>

            <div className="region-dd">
                <div className="option-hdr" onClick={() => setDropDown(!dropDown)}>
                    <p>Filter By Region</p>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                

                <div className="options">
                    {dropDown && filters.map((region, index) => {
                        return <li key={index}>{region}</li>
                    })}
               </div>
            </div>
        </div>
    )
}

export default FilterForm;