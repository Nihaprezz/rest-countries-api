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
                <p onClick={() => setDropDown(!dropDown)}>
                    Filter By Region <ion-icon name="chevron-down-outline"></ion-icon>
                </p>

                <div>
                    {dropDown && filters.map((region, index) => {
                        return <li key={index}>{region}</li>
                    })}
               </div>
            </div>
        </div>
    )
}

export default FilterForm;