import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [numberFilter, setNumberFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(`promise fulfilled, data: ${JSON.stringify(response.data)}`)
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter numberFilter = {numberFilter} setNumberFilter = {setNumberFilter} />
      <PersonForm persons = {persons} setPersons = {setPersons} /> 
      <Persons persons = {persons} numberFilter = {numberFilter} />
    </div>
  )
}

export default App