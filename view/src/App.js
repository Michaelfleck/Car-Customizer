import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

/*
const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/listings')
      .then(resp => resp.json())
      .then(items => items.filter(({description}) => description.includes(searchedText)))
      .then(data => setListings(data))
  }, [searchedText])
 */

function App() {
  const [val, setVal] = useState('');

  useEffect(async () => {
    const resp = await fetch('http://localhost:4300/hello-world');

    setVal(await resp.text());
  }, []);

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
          Learn React
        </a>
        <p>{val}</p>
      </header>
    </div>
  );
}

export default App;
