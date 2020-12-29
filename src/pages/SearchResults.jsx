import React, { useContext, useEffect, useState } from 'react'
import PeopleList from '../components/PeopleList'
import { SearchContext } from '../context/SearchContext'
import { fetchSearchPeople, fetchPeople } from '../data/People'

export default function SearchResults() {
  const [results, setResults] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  //searchText context comes from SearchForm text input
  const { searchText } = useContext(SearchContext)

  /* Fetch from pagination */
  async function getMorePeople(url) {
    const infoFetched = await fetchPeople(url) //fetchPeople for pagination
    setResults(infoFetched.results)
    setPreviousUrl(infoFetched.previous)
    setNextUrl(infoFetched.next)
  }

  function handlePrevious() {
    getMorePeople(previousUrl)
  }
  function handleNext() {
    getMorePeople(nextUrl)
  }

  // Triggers with every change on searchText context
  useEffect(() => {
    // function inside useEffect avoid the warning:
    // "React Hook useEffect has a missing dependency"
    async function getSearchResults() {
      setErrorMessage(null)
      const fetchedResults = await fetchSearchPeople(searchText)
      console.log('fetchedResults.count', fetchedResults.count)
      if(fetchedResults.count === 0) setErrorMessage('Nothing found!')
      setResults(fetchedResults.results)
      setPreviousUrl(fetchedResults.previous)
      setNextUrl(fetchedResults.next)
    }

    getSearchResults()
  }, [searchText])

  return (
    <>
      <h2>Search Results</h2>
      { errorMessage && <p>{errorMessage}</p> }
      { previousUrl && <button onClick={handlePrevious}>Previous</button>}
      { nextUrl && <button onClick={handleNext}>Next</button>}
      { results && <PeopleList people={results} />}
    </>
  )
}