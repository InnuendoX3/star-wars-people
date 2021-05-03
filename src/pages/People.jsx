import React, { useEffect, useState } from 'react'
import { fetchPeople } from '../data/People'

import Page from '../components/styled/Page'
import PeopleList from '../components/PeopleList'
import Pagination from '../components/Pagination'

export default function People() {
  const [people, setPeople] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [previousUrl, setPreviousUrl] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)

  function changeToSecureUrl (httpUrl) {
    if (!httpUrl) return 
    console.log('changeToSecureUrl url', httpUrl)
    const httpsUrl = httpUrl.replace('http://', 'https://')
    console.log('httpsUrl url', httpsUrl)
    return httpsUrl
  }

  // Fetch from previous/next pagination
  async function getMorePeople(url) {
    const infoFetched = await fetchPeople(url)
    setPeople(infoFetched.results)
    setPreviousUrl(changeToSecureUrl(infoFetched.previous))
    setNextUrl(changeToSecureUrl(infoFetched.next))
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
  // Initial fetch
  async function getSwapiData() {
    const infoFetched = await fetchPeople()
    console.log('infoFetched', infoFetched)
    const pages = Math.ceil(infoFetched.count/10)
    setPeople(infoFetched.results)
    console.log('infoFetched.previous', infoFetched.previous)
    console.log('infoFetched.next', infoFetched.next)
    setPreviousUrl(changeToSecureUrl(infoFetched.previous))
    setNextUrl(changeToSecureUrl(infoFetched.next))
    setTotalPages( pages > 1 ? pages : null) //Show if more than 1 page
    setCurrentPage(1)
  }

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
    <Page>
      <h2>All Characters!</h2>
      <h3>Extra information</h3>
      { previousUrl && <p>Previous URL {previousUrl}</p>}
      { nextUrl && <p>Next URL {nextUrl}</p>}
      { people && <PeopleList people={people}/> }
      { totalPages && <Pagination {...paginationProps} /> }
    </Page>
  )
}