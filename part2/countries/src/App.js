// COUNTRIES APP
// Using API https://restcountries.eu/
// The country to be shown is found by typing a search query into the search field.
// If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
// If there are fewer than ten countries, but more than one, then all countries matching the query are shown:
// When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken in that country are shown:

// Edge Cases: NB: it is enough that your application works for most of the countries. 
// Some countries, like Sudan, can cause trouble, 
// since the name of the country is part of the name of another country, South Sudan. 
// Not considering these edge cases.

// assignment from Fullstack Open by UHelsinki. https://fullstackopen.com/en/part2/getting_data_from_server

import React, { useState, useEffect } from 'react'
import Countries from './components/Countries'
import axios from 'axios'

  // Countries 
  // if filtered array.countries.length === 1 then render countrydetail
  // if filtered array.countries.length > 10 then render string "narrow your search"
  // else render countrylist 
 
const App = () => {
  //Hooks: 
  // countries (array)
  // filterValue (string) (what we'll compare to countries.name for matches)
  // filtered (array) (this will affect render logic according to above specs)

  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  //Effects:
  // fetch all data from endpoint https://restcountries.eu/rest/v2/all

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, []);

  // Util:

  const filterCountries = (filterValue, countries) => {
    
    // re-evaluate the filtered country list, rerender
    let filteredArray = countries;
    filteredArray = filteredArray.filter((country) => {
      return country.name.indexOf(filterValue) !== -1;
    })
    
    setFilteredCountries(filteredArray);
  };
  
  // Event Handlers:
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
    filterCountries(event.target.value, countries)
  }

  const handleSelectCountry = (code) => {
    
    const eventAlpha3code = code;
    let newselection  = {};
    newselection = filteredCountries.filter((country)=>{
      return country.alpha3Code.indexOf(eventAlpha3code) !==-1;
    })
    setFilteredCountries(newselection);
  }

  // RenderFxn:

  return (
    <div>
      <h1>Search For a Country</h1>
      <input
        value={filterValue}
        onChange={handleFilterChange}
      />
      <h1>Search Results</h1>
      <div>
        <Countries 
        filteredCountries = {filteredCountries} 
        handleSelectCountry = {handleSelectCountry}
      />
      </div>
    </div>
  )
}

export default App 
