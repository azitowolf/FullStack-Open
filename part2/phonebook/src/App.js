import React, { useState, useEffect } from 'react'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [numberFilter, setNumberFilter] = useState('');
  const [notification, setNotification] = useState([null, null]);
  ///todo add filteredlist to hooks

  useEffect(() => {
    personService
      .getAll()
        .then(people => {
          setPersons(people)
        })
  }, [])

  return (
    <div>
      <Notification message = {notification} />
      <h1>Phonebook</h1>
      <h2>Add New</h2>
      <PersonForm 
        persons = {persons} 
        setPersons = {setPersons} 
        setNotification = {setNotification}
      /> 
      <h2>Filter</h2>
      <Filter 
        numberFilter = {numberFilter} 
        setNumberFilter = {setNumberFilter} 
      />
      <h2>Numbers</h2>
      <Persons 
        persons = {persons} 
        numberFilter = {numberFilter} 
        setPersons = {setPersons}
      />
    </div>
  )
}

export default App