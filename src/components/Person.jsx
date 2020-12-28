import React from 'react'

export default function Person(props) {
  const { name, gender, height, mass } = props.personData
  return (
    <div>
      <h4>{name}</h4>
      <div>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{mass}</p>
      </div>
    </div>
  )
}