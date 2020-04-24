import React, { useState } from 'react'
import Course from './Course'
import Header from './Header'

const App = ({courses}) => {
    const [notes, setNotes] = useState(props.notes)
    
    return (
      <div>
          <Header header = "Web Development Curriculum" size = "1" />
          {courses.map(course => 
            <Course key = {course.id} course={course} />
          )}
        
      </div>
    )
  }

export default App