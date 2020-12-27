import { Switch, Route } from "react-router-dom";

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
