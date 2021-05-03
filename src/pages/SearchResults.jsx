import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { fetchSearchPeople, fetchPeople } from '../data/People'

import Page from '../components/styled/Page'
import PeopleList from '../components/PeopleList'
import Pagination from '../components/Pagination'

const StyledLink = styled(Link)`
  color: #14274e;
  font-weight: bold;
  font-size: 20px;
  padding: 8px 0;
`

export default function SearchResults() {
  const [results, setResults] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  //searchText context comes from SearchForm text input
  const { searchText } = useContext(SearchContext)

  // Fetch from pagination
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

    getSearchResults().catch(error => console.error('Error on useEffect', error))
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
    <Page>
      <p>Search Results for <strong>{searchText}</strong></p>
      { errorMessage && <p>{errorMessage}</p> }
      { results && <PeopleList people={results} />}
      { totalPages && <Pagination {...paginationProps} /> }
      <StyledLink to='/'>Back to All characters</StyledLink>
    </Page>
  )
}