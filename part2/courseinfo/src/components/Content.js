import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    
    const total = parts.reduce(
        (t, s) => {
                return t + s.exercises
            }, 0);

    return (
      <div>
            {parts.map(part => 
                <Part key = {part.id} part = {part} /> 
            )}
            <div>total of {total} parts</div>
          {JSON.stringify(parts)}
    </div>
    )
  }
  
  export default Content