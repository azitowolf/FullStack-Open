import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetail = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState(null);
    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios
          .get('http://api.weatherstack.com/current' 
          + '?access_key=' + api_key
          + '&query=' + country.name 
          )
          .then(response => {
            setWeatherInfo(response.data)
          })
      }, []);

      const renderWeatherInfo = () => {
          if (weatherInfo) {
            return (
            <>
                <img src={weatherInfo.current.weather_icons} />
                <div>{weatherInfo.current.weather_descriptions} </div>
                <div>Temp: {weatherInfo.current.temperature} </div>
                <div>Wind Speed: {weatherInfo.current.wind_speed} </div>
                <div>Feels Like: {weatherInfo.current.feelslike} </div>
            </>
            )
          } else { return ""}
      }

    return ( 
        <div>
            <h2>{country.name}</h2>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population.toString()}</div>
            <div>Languages:
                <ul>
                {country.languages.map((language, i) => <li key={i}>{language.name}</li> )}
                </ul>
            </div>
            <div>Flag: <br/> <img style={{ height: 50 }} src={country.flag} /></div>
            <h2>Current Weather:</h2>
            {renderWeatherInfo()}
        </div>
     );
}
 
export default CountryDetail;