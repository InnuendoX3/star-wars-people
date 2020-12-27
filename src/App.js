import { Switch, Route } from 'react-router-dom'

import SearchResults from './pages/SearchResults'
import People from './pages/People'

function App() {
  return (
    <div>
      <h1>Star Wars People</h1>
      <Switch>
        <Route path="/search" >
          <SearchResults />
        </Route>
        <Route path="/">
          <People />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
