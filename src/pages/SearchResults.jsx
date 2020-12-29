import React, {useContext} from 'react'
import {SearchContext} from '../context/SearchContext'

export default function SearchResults() {
  const {searchText} = useContext(SearchContext)
  return (
    <>
      <h2>Search Results page</h2>
      <h3>{searchText}</h3>
    </>
  )
}