import logo from './logo.svg';
import './App.css';

function App() {
      
  const a = 2
  const b = 4
  return (

    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
        <h1 data-testid = "mytestid">Hello</h1>
        <span title='sum'>{a+b}</span>
      </header>
      <input type="number" id = "num1" placeholder="Number 1"></input>
      <input type="number" id = "num2" placeholder="Number 2"></input>
      <button id = "btn">Add!</button>
    </div>
  );
}

export default App;
