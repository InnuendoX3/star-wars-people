import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchResults from './pages/SearchResults'
import People from './pages/People'

import SearchForm from './components/SearchForm'
import { SearchContext } from './context/SearchContext'

function App() {
  const [searchText, setSearchText] = useState(null)
  
  return (
    <div>
      <h1>Star Wars People</h1>
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
    </div>
  );
}

export default App;
