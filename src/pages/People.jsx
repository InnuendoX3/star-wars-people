import React, { useEffect, useState } from 'react'
import { fetchPeople } from '../data/People'

export default function People() {
  const [people, setPeople] = useState(null)

  async function getPeople() {
    const infoFetched = await fetchPeople()
    setPeople(infoFetched.results)
  }

  useEffect( () => {
    getPeople()
  }, [])

  return (
    <>
      <h2>People list page</h2> 
      {
        people && people.map( (person, index) => {
          return <p key={index}> {person.name} </p>
        })
      }
    </>
  )
}