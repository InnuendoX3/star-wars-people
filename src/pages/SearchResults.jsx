import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { fetchSearchPeople, fetchPeople } from '../data/People'

import PeopleList from '../components/PeopleList'
import Pagination from '../components/Pagination'

export default function SearchResults() {
  const [results, setResults] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)

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
    setCurrentPage(currentPage - 1)
  }
  function handleNext() {
    getMorePeople(nextUrl)
    setCurrentPage(currentPage + 1)
  }

  // Triggers with every change on searchText context
  useEffect(() => {
    // function inside useEffect avoid the warning:
    // "React Hook useEffect has a missing dependency"
    async function getSearchResults() {
      setErrorMessage(null)
      const fetchedResults = await fetchSearchPeople(searchText)
      const pages = Math.ceil(fetchedResults.count/10)
      if(fetchedResults.count === 0) setErrorMessage('Nothing found!')
      setResults(fetchedResults.results)
      setPreviousUrl(fetchedResults.previous)
      setNextUrl(fetchedResults.next)
      setTotalPages( pages > 1 ? pages : null) //Show if more than 1 page
      setCurrentPage(1)
    }

    getSearchResults()
  }, [searchText])

  const paginationProps = {
    previousUrl,
    totalPages,
    nextUrl,
    handlePrevious,
    handleNext,
    currentPage
  }

  return (
    <>
      <h2>Search Results for <span>{searchText}</span></h2>
      { errorMessage && <p>{errorMessage}</p> }
      { totalPages && <Pagination {...paginationProps} /> }
      { results && <PeopleList people={results} />}
      <Link to='/'>All characters</Link>
    </>
  )
}