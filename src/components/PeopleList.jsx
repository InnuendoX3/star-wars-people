import React from 'react'
import Person from './Person'

export default function PeopleList(props) {
  const { people } = props
  return (
    <div>
      <h3>Here comes the list</h3>
      {
        people.map((person, index) => {
          return <Person key={index} personData={person}/>
        })
      }
    </div>
  )
}