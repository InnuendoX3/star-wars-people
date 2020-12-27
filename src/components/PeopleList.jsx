import React from 'react'

export default function PeopleList(props) {
  const { people } = props
  return (
    <div>
      <h3>Here comes the list</h3>
      {
        people.map((person, index) => {
          return <p key={index}>{person.name}</p>
        })
      }
    </div>
  )
}