import React from 'react';

const Filter = ({numberFilter, setNumberFilter}) => {

    const handleFilterChange = (event) => {
        setNumberFilter(event.target.value)
      }
      
    return ( 
        <div>
            <input
                value={numberFilter}
                onChange={handleFilterChange}
            />
        </div>
     );
}
 
export default Filter;