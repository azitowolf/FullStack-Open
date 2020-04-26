import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons, setNotification}) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    // controlled input components
    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }
      
    const initiateNotification = (message, style) => {
      setNotification(
        [message, style]
      )
      setTimeout(() => {
        setNotification([null, null])
      }, 5000)
    }

    const addPerson = (event) => {
      event.preventDefault()
      const newPerson = {
        name: newName,
        number: newNumber, 
      }
      // dupe handling                 
      if (persons.map((person => person.name)).indexOf(newPerson.name) !== -1) { //dupe found
        if (window.confirm(`${newPerson.name} is already added, do you want to update their number?`)) { 
          const personToChange = persons.find(n => n.name === newPerson.name); 
          const id = personToChange.id; 
          const changedPerson = {...personToChange, number:newPerson.number}

          personService.update(
            id, changedPerson)
            .then(response => {
              let updated = persons.map(i => i.id !== id ? i : response);
              setPersons(updated)
              initiateNotification(`Note '${newPerson.name}' was updated on the server`, 'notify');
          })
          .catch(() => {
            initiateNotification('Sorry that person has already been removed from the server', 'error');
          })
        }
      } else {
        personService.create(newPerson)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          initiateNotification(`Note '${newPerson.name}' was added to the server`, 'notify');
        })
      }
      setNewName('')
      setNewNumber('')
    }

    return (   
    <div>
        <form onSubmit={addPerson}>
          <div>
            name:
            <input
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div>
            number:
            <input
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">save</button> 
          </div>
        </form > 
    </div>    
    )
}
 
export default PersonForm;