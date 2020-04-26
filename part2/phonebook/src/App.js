import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [numberFilter, setNumberFilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
        .then(people => {
          setPersons(people)
        })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter numberFilter = {numberFilter} setNumberFilter = {setNumberFilter} />
      <PersonForm persons = {persons} setPersons = {setPersons} /> 
      <Persons 
        persons = {persons} 
        numberFilter = {numberFilter} 
        setPersons = {setPersons}
      />
    </div>
  )
}

export default App