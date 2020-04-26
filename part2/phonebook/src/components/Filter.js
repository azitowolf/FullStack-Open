import React from 'react';

const Filter = ({numberFilter, setNumberFilter}) => {

    const handleFilterChange = (event) => {
        setNumberFilter(event.target.value)
      }
      
    return ( 
        <div>
            <h2>Filter</h2>
            <input
                value={numberFilter}
                onChange={handleFilterChange}
            />
        </div>
     );
}
 
export default Filter;