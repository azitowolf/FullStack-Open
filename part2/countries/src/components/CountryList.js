import React from 'react';

const CountryList = ({countries, handleSelectCountry}) => {
    return ( 
        <>
        {countries.map((country, i) => {

          const selectCountryByAlphaCode = () => handleSelectCountry(country.alpha3Code);

            return (
              <div key={i} > 
                {country.name} 
                <button 
                  onClick = {selectCountryByAlphaCode}> 
                    Select 
                </button> 
              </div>
            ) 
          })}
        </>
     );
}
 
export default CountryList;