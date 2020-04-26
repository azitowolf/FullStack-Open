import React from 'react';
import personService from '../services/persons'

const Persons = ({persons, numberFilter, setPersons}) => {

  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this person")) { 
      personService.del(id).then(response => {
        let updated = persons.filter(i => id !== i.id)
        setPersons(updated)
      })
    }
  }
  const renderPersonsAndFilter = () => {
  let filteredList = persons; 
  filteredList = filteredList.filter((person) => {
    return person.name.indexOf(numberFilter) !== -1;
  })

  const renderedJSX = 
    (filteredList.map((person, i) => 
      <div key={i}>
        <div>Name: {person.name}</div> 
        <div>Number: {person.number} </div>
        <button onClick = {() => handleDelete(person.id)}>
          delete
        </button>
      </div>
    ))
    return renderedJSX;
  }
  
  return (
    <div>
    {renderPersonsAndFilter()}
    </div>
  )
}

export default Persons;