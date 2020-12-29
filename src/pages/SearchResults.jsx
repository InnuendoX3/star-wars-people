import React, {useContext, useEffect, useState} from 'react'
import PeopleList from '../components/PeopleList'
import {SearchContext} from '../context/SearchContext'
import {fetchSearchPeople} from '../data/People'

export default function SearchResults() {
  const [results, setResults] = useState(null)
  //searchText context comes from SearchForm text input
  const {searchText} = useContext(SearchContext)

  useEffect( () => {
    async function getSearchResults() {
      const fetchedResults = await fetchSearchPeople(searchText)
      setResults(fetchedResults.results)
    }
    
    getSearchResults()
  }, [searchText])

  return (
    <>
      <h2>Search Results page</h2>
      <h3>{searchText}</h3>
      { results && <PeopleList people={results} />}
    </>
  )
}