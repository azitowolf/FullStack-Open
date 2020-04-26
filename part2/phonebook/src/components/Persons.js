import React from 'react';

const Persons = ({persons, numberFilter}) => {

    const renderNumbersAndFilter = () => {
      let filteredList = persons; 
      filteredList = filteredList.filter((person) => {
        return person.name.indexOf(numberFilter) !== -1;
      })
      const renderedJSX = (filteredList.map((person, i) => 
        <div key={i}>
          <div>Name: {person.name}</div> 
          <div>Number: {person.number} </div>
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