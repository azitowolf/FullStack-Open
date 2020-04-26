import React, { useState } from 'react'

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
        const personObject = {
          name: newName,
          number: newNumber, 
        }
        const namesArr = persons.map((person => person.name))   
        const numsArr = persons.map((person => person.number))
    
        if (namesArr.indexOf(newName) >= 0 || numsArr.indexOf(newNumber) >= 0 ) { 
          alert(`${newName} or ${newNumber} is already added to phonebook`)
          return;
        }
        setPersons(persons.concat(personObject))
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