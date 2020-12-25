import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars People</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This should appear when deploying on Heroku!
        </p>
      </header>
    </div>
  );
}

export default App;
