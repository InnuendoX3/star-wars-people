import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {SearchContext} from '../context/SearchContext'
import styled from 'styled-components'

import Button from '../components/styled/Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;

  @media (max-width: 425px) {
    width: 95%;
    flex-direction: column;
  }
`
const StyledInput = styled.input`
  border: 1px solid #483859;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: center;
  }
`

export default function SearchForm() {
  const [inputText, setInputText] = useState(null)
  const {setSearchText} = useContext(SearchContext)
  let history = useHistory()

  function handleOnSubmit(e) {
    e.preventDefault()
    setSearchText(inputText)
    history.push('/search')
    document.getElementById('search-form').reset()
  }

  function handleInputText(e) {
    setInputText(e.target.value)
  }

  return (
    <StyledForm onSubmit={handleOnSubmit} id='search-form'>
      <StyledInput type="text" onChange={handleInputText} placeholder="Find someone" required />
      <Button>Search</Button>
    </StyledForm>
  )
}