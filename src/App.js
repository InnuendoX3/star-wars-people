import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { SearchContext } from './context/SearchContext'
import styled from 'styled-components'

import SearchResults from './pages/SearchResults'
import People from './pages/People'

import SearchForm from './components/SearchForm'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-family: 'Audiowide', cursive;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 425px) {
    font-size: 32px;
  }
`

function App() {
  // For SearchContext
  const [searchText, setSearchText] = useState(null)
  
  return (
    <Home>
      <Title>Star Wars People</Title>
      <SearchContext.Provider value={{searchText, setSearchText}}>
        <SearchForm />
        <Switch>
          <Route path="/search" >
            <SearchResults />
          </Route>
          <Route path="/">
            <People />
          </Route>
        </Switch>
      </SearchContext.Provider>
    </Home>
  );
}

export default App;
