import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    
    return(
        <div>
            <Header header = {course.name} size = "2" />
            <Content parts = {course.parts} />
        </div>
    )
    
}

export default Course