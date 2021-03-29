import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from "./components/Hello";

function App() {
  const foo:string[] = new Array(5).fill('hi~');
  let txt: string[] = ['hello', 'ya', 'yeah'];  //較推薦 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{foo}</p>
        <p>{txt.join(" ")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hello compiler="TypeScript" framework="React"/>
    </div>
  );
}

export default App;
