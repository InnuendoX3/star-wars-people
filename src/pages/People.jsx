import React, { useEffect, useState } from 'react'
import PeopleList from '../components/PeopleList'
import { fetchPeople } from '../data/People'

export default function People() {
  const [people, setPeople] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)

  /* Initial fetch */
  async function getSwapiData() {
    const infoFetched = await fetchPeople()
    setPeople(infoFetched.results)
    setPreviousUrl(infoFetched.previous)
    setNextUrl(infoFetched.next)
  }

  /* Fetch from pagination */
  async function getMorePeople(url) {
    const infoFetched = await fetchPeople(url)
    setPeople(infoFetched.results)
    setPreviousUrl(infoFetched.previous)
    setNextUrl(infoFetched.next)
  }

  function handlePrevious() {
    getMorePeople(previousUrl)
  }
  function handleNext() {
    getMorePeople(nextUrl)
  }

  useEffect( () => {
    getSwapiData()
  }, [])

  return (
    <>
      <h2>People list page</h2>
      { previousUrl && <button onClick={handlePrevious}>Previous</button> }
      { nextUrl && <button onClick={handleNext}>Next</button> }
      { people && <PeopleList people={people}/> }
    </>
  )
}