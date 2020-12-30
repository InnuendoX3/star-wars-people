import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {SearchContext} from '../context/SearchContext'

export default function SearchForm() {
  const [inputText, setInputText] = useState(null)
  const {setSearchText} = useContext(SearchContext)
  let history = useHistory()

  function handleOnSubmit(e) {
    e.preventDefault()
    setSearchText(inputText)
    history.push('/search')
    document.getElementById('search-form').reset()
    //console.log('inputText', inputText)
  }

  function handleInputText(e) {
    setInputText(e.target.value)
  }

  return (
    <form onSubmit={handleOnSubmit} id='search-form'>
      <input type="text" onChange={handleInputText} placeholder="Find someone" required />
      <input type="submit" value="Search"/>
    </form>
  )
}