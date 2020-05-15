import React from 'react';

function FilterForm(props){

    return (
        <div style={{border: '3px solid red'}}>
            <form onChange={(e) => props.updatingSearch(e)}>
                <input placeholder="Search for Country"></input>
            </form>

            <form onChange={(e) => props.updateRegion(e)}>
                <select defaultValue="">
                    <option value="">Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </form>
        </div>
    )
}

export default FilterForm;