import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }
    
      const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
          name: newName,
          number: newNumber, 
        }
        // dupe handling                 
        if (persons.map((person => person.name)).indexOf(newPerson.name) !== -1) { 
          const personToChange = persons.find(n => n.name === newPerson.name); 
          const id = personToChange.id; 
          const changedPerson = {...personToChange, number:newPerson.number}
          
          if (window.confirm(`${newPerson.name} is already added, do you want to update their number?`)) { 
            personService.update(
              id, changedPerson)
              .then(response => {
                let updated = persons.map(i => i.id !== id ? i : response)
                setPersons(updated)
            })
          }
        } else {
          personService.create(newPerson)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
          })
        }
        setNewName('')
        setNewNumber('')
      }

    return (   
    <div>
        <h2>Add New</h2>
        <form onSubmit={addPerson}>
          <div>
            name:
          </div>
          <input
            value={newName}
            onChange={handleNameChange}
          />
          <div>
            number:
          </div>
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
          <div>
            <button type="submit">save</button> 
          </div>
        </form > 
    </div>    
    )
}
 
export default PersonForm;