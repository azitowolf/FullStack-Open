import React from 'react';
import personService from '../services/persons'

const Persons = ({persons, numberFilter, setPersons}) => {

    const renderNumbersAndFilter = () => {
      let filteredList = persons; 
      filteredList = filteredList.filter((person) => {
        return person.name.indexOf(numberFilter) !== -1;
      })
      const renderedJSX = (filteredList.map((person, i) => 
        <div key={i}>
          <div>Name: {person.name}</div> 
          <div>Number: {person.number} </div>
          <button onClick = {()=>{
            if (window.confirm("Do you really want to delete this person")) { 
              personService.del(person.id).then(response => {
                let updated = persons.filter(i => person.id !== i.id)
                setPersons(updated)
              })
            }
          }}>
            delete
          </button>
        </div>
      ))
      return renderedJSX;
    }
  
    return (
      <>
      <h2>Numbers</h2>
      {renderNumbersAndFilter()}
      </>
    )
  }

export default Persons;