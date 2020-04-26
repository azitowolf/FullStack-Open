import React from 'react';
import CountryDetail from './CountryDetail';
import CountryList from './CountryList';

const Countries = ({filteredCountries, handleSelectCountry}) => {
    if (filteredCountries.length === 1) {
      return (
        <div>
          <CountryDetail country = {filteredCountries[0]} />
        </div>
      )
    } else if (filteredCountries.length > 10) {
      return <div>Too many Results, Narrow your search Please!</div>
    } else {
      return (
        <div>
          <CountryList 
          countries = {filteredCountries} 
          handleSelectCountry = {handleSelectCountry}
          />
        </div> 
      )
    }
  }

  export default Countries;