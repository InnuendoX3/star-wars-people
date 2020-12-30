import React, { useEffect, useState } from 'react'
import { fetchPeople } from '../data/People'

import PeopleList from '../components/PeopleList'
import Button from '../components/styled/Button'
import Pagination from '../components/Pagination'

export default function People() {
  const [people, setPeople] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)

  /* Initial fetch */
  async function getSwapiData() {
    const infoFetched = await fetchPeople()
    const pages = Math.ceil(infoFetched.count/10)
    setPeople(infoFetched.results)
    setPreviousUrl(infoFetched.previous)
    setNextUrl(infoFetched.next)
    setTotalPages( pages > 1 ? pages : null) //Show if more than 1 page
    setCurrentPage(1)
  }

  /* Fetch from previous/next pagination */
  async function getMorePeople(url) {
    const infoFetched = await fetchPeople(url)
    setPeople(infoFetched.results)
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

  useEffect( () => {
    getSwapiData()
  }, [])

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
      <h2>All Characters</h2>
      <Pagination {...paginationProps} />
      { people && <PeopleList people={people}/> }
    </>
  )
}